// functions/api/[[route]].js
// Cloudflare Pages Function — handles all /api/* routes

import { SignJWT, jwtVerify } from 'https://esm.sh/jose@5.2.0';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type,Authorization',
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS },
  });
}

function err(msg, status = 400) {
  return json({ error: msg }, status);
}

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode(...new Uint8Array(hash)));
}

async function makeJWT(payload, secret) {
  const key = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']
  );
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(key);
}

async function verifyJWT(token, secret) {
  try {
    const key = await crypto.subtle.importKey(
      'raw', new TextEncoder().encode(secret),
      { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']
    );
    const { payload } = await jwtVerify(token, key);
    return payload;
  } catch {
    return null;
  }
}

async function getUser(request, env) {
  const auth = request.headers.get('Authorization') || '';
  const token = auth.replace('Bearer ', '');
  if (!token) return null;
  return verifyJWT(token, env.JWT_SECRET);
}

async function sendEmail(env, to, subject, html) {
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Xterra Tracker <notifications@xterrahealth.com>',
        to: [to],
        subject,
        html,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

function uid() {
  return crypto.randomUUID();
}

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS });
  }

  const url = new URL(request.url);
  const path = url.pathname.replace('/api/', '').replace(/\/$/, '');
  const method = request.method;

  // ── AUTH ──────────────────────────────────────────────
  if (path === 'auth/login' && method === 'POST') {
    const { email, password } = await request.json();
    if (!email || !password) return err('Missing fields');
    const hash = await hashPassword(password);
    const user = await env.DB.prepare(
      'SELECT id, email, role, name FROM users WHERE email = ? AND password_hash = ?'
    ).bind(email.toLowerCase(), hash).first();
    if (!user) return err('Invalid email or password', 401);
    const token = await makeJWT({ sub: user.id, role: user.role, name: user.name, email: user.email }, env.JWT_SECRET);
    return json({ token, user: { id: user.id, role: user.role, name: user.name, email: user.email } });
  }

  if (path === 'auth/forgot' && method === 'POST') {
    const { email } = await request.json();
    if (!email) return err('Missing email');
    const user = await env.DB.prepare('SELECT id, name FROM users WHERE email = ?').bind(email.toLowerCase()).first();
    if (!user) return json({ ok: true }); // don't reveal if email exists
    const token = uid();
    const expires = Date.now() + 3600000; // 1 hour
    await env.DB.prepare('UPDATE users SET reset_token = ?, reset_expires = ? WHERE id = ?')
      .bind(token, expires, user.id).run();
    const resetUrl = `${env.APP_URL}/reset?token=${token}`;
    await sendEmail(env, email, 'Xterra Tracker — Password Reset', `
      <div style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;padding:32px">
        <h2 style="color:#5bb8e8;letter-spacing:2px;text-transform:uppercase;font-size:14px">Xterra Health Performance Tracker</h2>
        <h3 style="color:#1a1a1a">Password Reset Request</h3>
        <p style="color:#555">Hi ${user.name},</p>
        <p style="color:#555">Click the button below to reset your password. This link expires in 1 hour.</p>
        <a href="${resetUrl}" style="display:inline-block;margin:20px 0;padding:12px 24px;background:#5bb8e8;color:#1a1a1a;text-decoration:none;border-radius:2px;font-weight:500;letter-spacing:1px;text-transform:uppercase;font-size:12px">Reset Password</a>
        <p style="color:#888;font-size:12px">If you did not request this, ignore this email.</p>
      </div>`);
    return json({ ok: true });
  }

  if (path === 'auth/reset' && method === 'POST') {
    const { token, password } = await request.json();
    if (!token || !password || password.length < 8) return err('Invalid request');
    const user = await env.DB.prepare(
      'SELECT id FROM users WHERE reset_token = ? AND reset_expires > ?'
    ).bind(token, Date.now()).first();
    if (!user) return err('Reset link expired or invalid', 401);
    const hash = await hashPassword(password);
    await env.DB.prepare('UPDATE users SET password_hash = ?, reset_token = NULL, reset_expires = NULL WHERE id = ?')
      .bind(hash, user.id).run();
    return json({ ok: true });
  }

  // ── REQUIRE AUTH BELOW ─────────────────────────────────
  const user = await getUser(request, env);
  if (!user) return err('Unauthorized', 401);

  const person = user.role === 'admin' ? null : user.role; // 'ryan' or 'luis'

  // ── GOALS ──────────────────────────────────────────────
  if (path.startsWith('goals')) {
    const parts = path.split('/'); // goals / person / week

    if (method === 'GET') {
      const targetPerson = parts[1];
      const targetWeek = parseInt(parts[2]);
      // Security: non-admins can only see their own
      if (person && person !== targetPerson) return err('Forbidden', 403);
      const showPrivate = user.role === 'admin';
      const rows = await env.DB.prepare(
        'SELECT id, text, source, status, notes' + (showPrivate ? ', private_note' : '') +
        ' FROM goals WHERE person = ? AND week = ? ORDER BY sort_order ASC, created_at ASC'
      ).bind(targetPerson, targetWeek).all();
      return json(rows.results);
    }

    if (method === 'POST') {
      const { targetPerson, week, text, source } = await request.json();
      if (person && person !== targetPerson) return err('Forbidden', 403);
      if (!['admin','own'].includes(source) && user.role !== 'admin') return err('Forbidden', 403);
      const id = uid();
      const maxOrder = await env.DB.prepare(
        'SELECT MAX(sort_order) as m FROM goals WHERE person = ? AND week = ?'
      ).bind(targetPerson, week).first();
      const order = ((maxOrder?.m) || 0) + 1;
      await env.DB.prepare(
        'INSERT INTO goals (id, person, week, text, source, sort_order) VALUES (?,?,?,?,?,?)'
      ).bind(id, targetPerson, week, text, source, order).run();
      return json({ id });
    }

    if (method === 'PATCH') {
      const goalId = parts[1];
      const body = await request.json();
      // Verify ownership
      const goal = await env.DB.prepare('SELECT person FROM goals WHERE id = ?').bind(goalId).first();
      if (!goal) return err('Not found', 404);
      if (person && person !== goal.person) return err('Forbidden', 403);

      const allowed = ['status','notes'];
      if (user.role === 'admin') allowed.push('private_note','text');
      const updates = [];
      const vals = [];
      for (const k of allowed) {
        if (k in body) { updates.push(`${k} = ?`); vals.push(body[k]); }
      }
      if (!updates.length) return err('Nothing to update');
      updates.push('updated_at = unixepoch()');
      vals.push(goalId);
      await env.DB.prepare(`UPDATE goals SET ${updates.join(',')} WHERE id = ?`).bind(...vals).run();
      return json({ ok: true });
    }
  }

  // ── WEEK DATA ──────────────────────────────────────────
  if (path.startsWith('week')) {
    const parts = path.split('/');
    const targetPerson = parts[1];
    const targetWeek = parseInt(parts[2]);
    if (person && person !== targetPerson) return err('Forbidden', 403);

    if (method === 'GET') {
      const showPrivate = user.role === 'admin';
      const row = await env.DB.prepare(
        'SELECT rating, week_note' + (showPrivate ? ', private_note' : '') +
        ' FROM week_data WHERE person = ? AND week = ?'
      ).bind(targetPerson, targetWeek).first();
      return json(row || {});
    }

    if (method === 'PATCH') {
      const body = await request.json();
      const allowed = ['rating','week_note'];
      if (user.role === 'admin') allowed.push('private_note');
      const updates = [];
      const vals = [];
      for (const k of allowed) {
        if (k in body) { updates.push(`${k} = ?`); vals.push(body[k]); }
      }
      if (!updates.length) return err('Nothing to update');
      updates.push('updated_at = unixepoch()');
      // Upsert
      await env.DB.prepare(`
        INSERT INTO week_data (id, person, week, ${allowed.filter(k => k in body).join(',')})
        VALUES (?, ?, ?, ${allowed.filter(k => k in body).map(() => '?').join(',')})
        ON CONFLICT(person, week) DO UPDATE SET ${updates.join(',')}
      `).bind(uid(), targetPerson, targetWeek, ...vals.slice(0, -1), ...vals).run().catch(async () => {
        await env.DB.prepare(`UPDATE week_data SET ${updates.join(',')} WHERE person = ? AND week = ?`)
          .bind(...vals, targetPerson, targetWeek).run();
      });
      return json({ ok: true });
    }
  }

  // ── SIGNATURES ─────────────────────────────────────────
  if (path === 'sign/jd' && method === 'POST') {
    const { targetPerson, signedName } = await request.json();
    if (person && person !== targetPerson) return err('Forbidden', 403);
    const existing = await env.DB.prepare('SELECT id FROM jd_signatures WHERE person = ?').bind(targetPerson).first();
    if (existing) return err('Already signed');
    await env.DB.prepare('INSERT INTO jd_signatures (id, person, signed_name, signed_at) VALUES (?,?,?,?)')
      .bind(uid(), targetPerson, signedName, Date.now()).run();
    const p = PEOPLE[targetPerson];
    const subject = `JD Signature Recorded — ${p.name}`;
    const body = `<div style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;padding:32px">
      <h2 style="color:#5bb8e8;letter-spacing:2px;text-transform:uppercase;font-size:14px">Xterra Health Performance Tracker</h2>
      <h3>${subject}</h3>
      <p style="color:#555">${p.name} has reviewed and signed their Job Description.</p>
      <table style="width:100%;border-collapse:collapse;font-size:13px;color:#555">
        <tr><td style="padding:6px 0;color:#888">Role</td><td>${p.role}</td></tr>
        <tr><td style="padding:6px 0;color:#888">Signed as</td><td><em>${signedName}</em></td></tr>
        <tr><td style="padding:6px 0;color:#888">Timestamp</td><td>${new Date().toLocaleString()}</td></tr>
      </table>
      <p style="color:#888;font-size:12px;margin-top:24px">This signature is permanently recorded in the Xterra Performance Tracker.</p>
    </div>`;
    await sendEmail(env, env.ADMIN_EMAIL, subject, body);
    await env.DB.prepare('INSERT INTO alert_log (id, subject, body, delivered) VALUES (?,?,?,?)')
      .bind(uid(), subject, body, 1).run();
    return json({ ok: true });
  }

  if (path === 'sign/week' && method === 'POST') {
    const { targetPerson, week, signedName } = await request.json();
    if (person && person !== targetPerson) return err('Forbidden', 403);
    const existing = await env.DB.prepare('SELECT id FROM week_acks WHERE person = ? AND week = ?').bind(targetPerson, week).first();
    if (existing) return err('Already acknowledged');
    await env.DB.prepare('INSERT INTO week_acks (id, person, week, signed_name, signed_at) VALUES (?,?,?,?,?)')
      .bind(uid(), targetPerson, week, signedName, Date.now()).run();
    const p = PEOPLE[targetPerson];
    const subject = `Week ${week} Goals Acknowledged — ${p.name}`;
    const body = `<div style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;padding:32px">
      <h2 style="color:#5bb8e8;letter-spacing:2px;text-transform:uppercase;font-size:14px">Xterra Health Performance Tracker</h2>
      <h3>${subject}</h3>
      <p style="color:#555">${p.name} has reviewed and acknowledged their Week ${week} goals and performance expectations.</p>
      <table style="width:100%;border-collapse:collapse;font-size:13px;color:#555">
        <tr><td style="padding:6px 0;color:#888">Week</td><td>${week}</td></tr>
        <tr><td style="padding:6px 0;color:#888">Signed as</td><td><em>${signedName}</em></td></tr>
        <tr><td style="padding:6px 0;color:#888">Timestamp</td><td>${new Date().toLocaleString()}</td></tr>
      </table>
      <p style="color:#888;font-size:12px;margin-top:24px">This acknowledgment is permanently recorded in the Xterra Performance Tracker.</p>
    </div>`;
    await sendEmail(env, env.ADMIN_EMAIL, subject, body);
    await env.DB.prepare('INSERT INTO alert_log (id, subject, body, delivered) VALUES (?,?,?,?)')
      .bind(uid(), subject, body, 1).run();
    return json({ ok: true });
  }

  // ── FULL DATA LOAD ─────────────────────────────────────
  if (path === 'load' && method === 'GET') {
    const targetPerson = url.searchParams.get('person');
    if (person && person !== targetPerson) return err('Forbidden', 403);
    const isAdmin = user.role === 'admin';

    const [goals, weekData, jdSig, acks] = await Promise.all([
      env.DB.prepare('SELECT * FROM goals WHERE person = ? ORDER BY week ASC, sort_order ASC, created_at ASC').bind(targetPerson).all(),
      env.DB.prepare('SELECT * FROM week_data WHERE person = ?').bind(targetPerson).all(),
      env.DB.prepare('SELECT * FROM jd_signatures WHERE person = ?').bind(targetPerson).first(),
      env.DB.prepare('SELECT * FROM week_acks WHERE person = ?').bind(targetPerson).all(),
    ]);

    // Strip private notes if not admin
    const safeGoals = goals.results.map(g => isAdmin ? g : { ...g, private_note: undefined });
    const safeWeeks = weekData.results.map(w => isAdmin ? w : { ...w, private_note: undefined });

    return json({ goals: safeGoals, weekData: safeWeeks, jdSig, acks: acks.results });
  }

  return err('Not found', 404);
}

const PEOPLE = {
  ryan: { name: 'Ryan Anzalone', role: 'Director, Front End Operations' },
  luis: { name: 'Luis Martinez', role: 'Director, Back End Operations & Provider Oversight' },
};
