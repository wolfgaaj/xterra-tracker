const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Xterra Health — Performance Tracker</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --xb:#1a1a1a;--xd:#222;--xp:#2a2a2a;--xbr:#3a3a3a;
  --xbl:#5bb8e8;--xbconst HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Xterra Health — Performance Tracker</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --xb:#1a1a1a;--xd:#222;--xp:#2a2a2a;--xbr:#3a3a3a;
  --xbl:#5bb8e8;--xbld:#2a5f7a;--xblb:rgba(91,184,232,0.08);
  --xr:#c0272d;--xrd:#7a1a1e;--xrb:rgba(192,39,45,0.08);
  --xw:#fff;--xo:#e8e8e8;--xm:#888;--xh:#555;
  --xg:#4a9e6b;--xgb:rgba(74,158,107,0.1);
  --xy:#d4a017;--xyb:rgba(212,160,23,0.1);
}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;background:var(--xb);color:var(--xw);min-height:100vh}

/* ── LOGIN ── */
.login-wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px}
.login-box{background:var(--xd);border:1px solid var(--xbr);border-radius:4px;padding:40px;width:100%;max-width:400px}
.login-logo{text-align:center;margin-bottom:32px}
.login-logo svg{margin-bottom:10px}
.login-logo .lm{font-size:16px;font-weight:500;letter-spacing:4px;text-transform:uppercase;margin-bottom:3px}
.login-logo .ls{font-size:9px;letter-spacing:2.5px;color:var(--xbl);text-transform:uppercase}
.login-title{font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--xm);margin-bottom:24px;text-align:center}
.field{margin-bottom:16px}
.field label{display:block;font-size:10px;letter-spacing:1px;text-transform:uppercase;color:var(--xm);margin-bottom:6px}
.field input{width:100%;padding:10px 12px;border:1px solid var(--xbr);border-radius:2px;background:var(--xb);color:var(--xo);font-size:13px;font-family:inherit}
.field input:focus{outline:none;border-color:var(--xbl)}
.btn-full{width:100%;padding:11px;border-radius:2px;border:1px solid var(--xbl);background:var(--xbl);color:var(--xb);font-size:11px;cursor:pointer;letter-spacing:2px;text-transform:uppercase;font-weight:500;transition:all .15s;font-family:inherit}
.btn-full:hover{background:#4aaad8}
.btn-full:disabled{opacity:.5;cursor:not-allowed}
.login-link{text-align:center;margin-top:16px;font-size:12px;color:var(--xm)}
.login-link a{color:var(--xbl);text-decoration:none;cursor:pointer}
.login-link a:hover{text-decoration:underline}
.login-err{background:var(--xrb);border:1px solid var(--xrd);border-radius:2px;padding:8px 12px;font-size:12px;color:#e06060;margin-bottom:14px}
.login-ok{background:var(--xgb);border:1px solid rgba(74,158,107,.4);border-radius:2px;padding:8px 12px;font-size:12px;color:var(--xg);margin-bottom:14px}

/* ── APP SHELL ── */
.app{display:flex;flex-direction:column;min-height:100vh}
.topbar{background:var(--xd);border-bottom:1px solid var(--xbr);padding:0 20px;display:flex;align-items:stretch;justify-content:space-between}
.tbl{display:flex;align-items:center}
.logo-area{display:flex;align-items:center;gap:10px;padding:10px 18px 10px 0;border-right:1px solid var(--xbr);margin-right:0}
.lm{font-size:12px;font-weight:500;letter-spacing:3px;text-transform:uppercase}
.ls{font-size:8px;letter-spacing:2px;color:var(--xbl);text-transform:uppercase}
.vtabs{display:flex;align-items:stretch}
.vtab{padding:0 16px;border:none;border-right:1px solid var(--xbr);font-size:10px;cursor:pointer;background:transparent;color:var(--xm);letter-spacing:1.5px;text-transform:uppercase;font-weight:500;transition:all .15s;font-family:inherit}
.vtab.active{background:var(--xbl);color:var(--xb)}
.vtab:hover:not(.active){background:var(--xp);color:var(--xw)}
.rbadge{font-size:10px;padding:4px 12px;border-radius:2px;font-weight:500;letter-spacing:1px;text-transform:uppercase;align-self:center}
.ba{background:var(--xblb);color:var(--xbl);border:1px solid var(--xbld)}
.br{background:var(--xgb);color:var(--xg);border:1px solid rgba(74,158,107,.3)}
.bl{background:var(--xrb);color:#e06060;border:1px solid var(--xrd)}
.logout-btn{background:transparent;border:none;color:var(--xm);font-size:10px;letter-spacing:1px;text-transform:uppercase;cursor:pointer;padding:0 0 0 16px;align-self:center;font-family:inherit}
.logout-btn:hover{color:var(--xbl)}
.save-dot{width:7px;height:7px;border-radius:50%;background:var(--xg);margin-left:12px;flex-shrink:0;transition:background .3s;align-self:center}
.save-dot.saving{background:var(--xy)}.save-dot.err{background:var(--xr)}
.stabs{display:flex;background:var(--xd);border-bottom:1px solid var(--xbr);padding:0 20px}
.stab{padding:10px 18px;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;color:var(--xm);border-bottom:2px solid transparent;background:transparent;border-top:none;border-left:none;border-right:none;transition:all .15s;font-weight:500;font-family:inherit}
.stab.active{color:var(--xbl);border-bottom-color:var(--xbl)}
.stab:hover:not(.active){color:var(--xw)}
.main{padding:20px;flex:1}
.loading-screen{display:flex;align-items:center;justify-content:center;min-height:300px;font-size:11px;color:var(--xm);letter-spacing:2px;text-transform:uppercase}

/* ── COMPONENTS ── */
.sh{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid var(--xbr);flex-wrap:wrap;gap:8px}
.st{font-size:11px;font-weight:500;letter-spacing:2.5px;text-transform:uppercase;color:var(--xm)}
.ba2{color:var(--xbl)}
.wn{display:flex;align-items:center;gap:8px}
.wb{width:28px;height:28px;border-radius:2px;border:1px solid var(--xbr);background:var(--xp);cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;color:var(--xm);font-family:inherit}
.wb:hover{border-color:var(--xbl);color:var(--xbl)}
.wl{font-size:12px;font-weight:500;letter-spacing:2px;text-transform:uppercase;min-width:64px;text-align:center}
.panel{background:var(--xd);border:1px solid var(--xbr);border-radius:2px;padding:16px;margin-bottom:14px}
.pt{font-size:10px;font-weight:500;letter-spacing:2px;text-transform:uppercase;color:var(--xm);margin-bottom:14px;display:flex;align-items:center;justify-content:space-between}
.cr{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:16px}
.mc{background:var(--xp);border:1px solid var(--xbr);border-radius:2px;padding:10px 12px}
.mlab{font-size:9px;color:var(--xm);margin-bottom:4px;letter-spacing:1.5px;text-transform:uppercase}
.mv{font-size:20px;font-weight:500}
.vg{color:var(--xg)}.vy{color:var(--xy)}.vr{color:var(--xr)}
.pbw{height:3px;background:var(--xbr);border-radius:2px;margin-top:6px}
.pb{height:100%;border-radius:2px;background:var(--xbl)}
.ph{display:flex;align-items:center;gap:10px;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid var(--xbr)}
.av{width:34px;height:34px;border-radius:2px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:500;flex-shrink:0;letter-spacing:1px}
.avr{background:var(--xgb);color:var(--xg);border:1px solid rgba(74,158,107,.3)}
.avl{background:var(--xrb);color:#e06060;border:1px solid var(--xrd)}
.pname{font-size:13px;font-weight:500}
.prole{font-size:10px;color:var(--xm);margin-top:1px}
.or{display:flex;align-items:center;gap:6px;margin-left:auto}
.rdt{width:8px;height:8px;border-radius:50%}
.dg{background:var(--xg)}.dy{background:var(--xy)}.dr{background:var(--xr)}.dn{background:var(--xbr)}
.rtext{font-size:10px;color:var(--xm);letter-spacing:1px;text-transform:uppercase}
.rrow{display:flex;align-items:center;gap:6px;margin-bottom:14px;flex-wrap:wrap}
.rlab{font-size:10px;color:var(--xm);letter-spacing:1px;text-transform:uppercase;margin-right:2px}
.rbn{padding:5px 12px;border-radius:2px;font-size:10px;font-weight:500;cursor:pointer;border:1px solid var(--xbr);background:var(--xp);color:var(--xm);letter-spacing:1px;text-transform:uppercase;transition:all .15s;font-family:inherit}
.rbn.rg.active{background:var(--xgb);color:var(--xg);border-color:rgba(74,158,107,.4)}
.rbn.ry.active{background:var(--xyb);color:var(--xy);border-color:rgba(212,160,23,.4)}
.rbn.rr.active{background:var(--xrb);color:#e06060;border-color:var(--xrd)}
.rbn:hover:not(.active){border-color:var(--xbl);color:var(--xbl)}
.gi{border:1px solid var(--xbr);border-radius:2px;padding:12px;margin-bottom:8px;background:var(--xp)}
.gi:last-child{margin-bottom:0}
.gmet{border-left:3px solid var(--xg)}.gpar{border-left:3px solid var(--xy)}.gmis{border-left:3px solid var(--xr)}.gpen{border-left:3px solid var(--xbr)}
.gtop{display:flex;align-items:flex-start;gap:10px}
.gsb{border:none;border-radius:2px;padding:3px 10px;font-size:10px;font-weight:500;cursor:pointer;white-space:nowrap;flex-shrink:0;margin-top:2px;letter-spacing:1px;text-transform:uppercase;font-family:inherit}
.smet{background:var(--xgb);color:var(--xg);border:1px solid rgba(74,158,107,.3)}
.spar{background:var(--xyb);color:var(--xy);border:1px solid rgba(212,160,23,.3)}
.smis{background:var(--xrb);color:#e06060;border:1px solid var(--xrd)}
.spen{background:var(--xd);color:var(--xm);border:1px solid var(--xbr)}
.gtx{font-size:12px;color:var(--xo);line-height:1.6;flex:1}
.gtag{font-size:9px;padding:2px 7px;border-radius:2px;margin-left:6px;font-weight:500;letter-spacing:1px;text-transform:uppercase;vertical-align:middle}
.trec{background:var(--xblb);color:var(--xbl);border:1px solid var(--xbld)}
.tadm{background:var(--xblb);color:var(--xbl);border:1px solid var(--xbld)}
.town{background:rgba(160,100,200,.1);color:#b07ad4;border:1px solid rgba(160,100,200,.2)}
.gn{margin-top:10px;padding-top:10px;border-top:1px solid var(--xbr)}
.fl{font-size:10px;color:var(--xm);margin-bottom:6px;letter-spacing:1px;text-transform:uppercase}
textarea,input[type=text],input[type=email],input[type=password]{font-family:inherit}
.note-ta{width:100%;font-size:12px;border:1px solid var(--xbr);border-radius:2px;padding:7px 10px;background:var(--xb);color:var(--xo);resize:vertical;min-height:44px;font-family:inherit}
.note-ta:focus{outline:none;border-color:var(--xbl)}
.pnote{background:rgba(192,39,45,.05);border:1px solid var(--xrd);border-radius:2px;padding:8px 10px;margin-top:8px}
.pnl{font-size:9px;font-weight:500;color:#e06060;margin-bottom:6px;letter-spacing:1.5px;text-transform:uppercase}
.pnote .note-ta{border:1px solid var(--xrd);background:var(--xb)}
.pnote .note-ta:focus{border-color:var(--xr)}
.agr{display:flex;gap:8px;margin-top:12px}
.agr-inp{flex:1;font-size:12px;border:1px solid var(--xbr);border-radius:2px;padding:7px 10px;background:var(--xb);color:var(--xo);font-family:inherit}
.agr-inp:focus{outline:none;border-color:var(--xbl)}
.btn-sm{padding:7px 16px;border-radius:2px;font-size:10px;cursor:pointer;letter-spacing:1.5px;text-transform:uppercase;font-weight:500;white-space:nowrap;transition:all .15s;font-family:inherit}
.bbl{border:1px solid var(--xbl);background:transparent;color:var(--xbl)}
.bbl:hover{background:var(--xbl);color:var(--xb)}
.bsl{border:1px solid var(--xbl);background:var(--xbl);color:var(--xb)}
.bsl:hover{background:#4aaad8}
.dv{height:1px;background:var(--xbr);margin:14px 0}
.dgr{display:grid;grid-template-columns:1fr 1fr;gap:14px}
@media(max-width:700px){.dgr{grid-template-columns:1fr}}
.es{text-align:center;padding:28px;color:var(--xh);font-size:12px}
.sx{overflow-x:auto}
.ht{width:100%;border-collapse:collapse;font-size:12px}
.ht th{text-align:left;padding:8px 10px;font-size:9px;color:var(--xm);border-bottom:1px solid var(--xbr);letter-spacing:1.5px;text-transform:uppercase;font-weight:500}
.ht td{padding:8px 10px;border-bottom:1px solid var(--xbr);vertical-align:top;color:var(--xo)}
.ht tr:last-child td{border-bottom:none}
.ht tr:hover td{background:var(--xp)}
.pill{display:inline-block;padding:2px 8px;border-radius:2px;font-size:10px;font-weight:500}
.pm{background:var(--xgb);color:var(--xg)}.pp{background:var(--xyb);color:var(--xy)}
.pmi{background:var(--xrb);color:#e06060}.pnx{background:var(--xp);color:var(--xm)}
.pg{background:var(--xgb);color:var(--xg)}.py{background:var(--xyb);color:var(--xy)}
.pred{background:var(--xrb);color:#e06060}.pno{background:var(--xp);color:var(--xm)}
.sb2{background:var(--xp);border:1px solid var(--xbr);border-radius:2px;padding:20px;margin-top:16px}
.sbt{font-size:13px;font-weight:500;margin-bottom:6px}
.sbs{font-size:11px;color:var(--xm);margin-bottom:16px;line-height:1.6}
.cbr{display:flex;align-items:flex-start;gap:10px;margin-bottom:14px}
.cbr input[type=checkbox]{width:16px;height:16px;margin-top:2px;flex-shrink:0;accent-color:var(--xbl);cursor:pointer}
.cbr label{font-size:12px;color:var(--xo);line-height:1.6;cursor:pointer}
.sir{display:flex;gap:10px;align-items:flex-end;flex-wrap:wrap}
.siw{flex:1;min-width:180px}
.sil{font-size:10px;color:var(--xm);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px}
.sii{font-size:14px;font-style:italic;border-bottom:1px solid var(--xbl);border-top:none;border-left:none;border-right:none;background:transparent;color:var(--xbl);padding:4px 0;width:100%;border-radius:0}
.sii:focus{outline:none;border-bottom-color:var(--xw)}
.sgb{display:inline-flex;align-items:center;gap:6px;background:var(--xgb);border:1px solid rgba(74,158,107,.4);border-radius:2px;padding:6px 12px;font-size:10px;color:var(--xg);letter-spacing:1px;text-transform:uppercase;font-weight:500}
.asn{background:var(--xblb);border:1px solid var(--xbld);border-radius:2px;padding:10px 14px;font-size:11px;color:var(--xbl);margin-top:10px}
.jdb{display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:2px;border:1px solid var(--xbl);background:transparent;color:var(--xbl);font-size:11px;cursor:pointer;letter-spacing:1.5px;text-transform:uppercase;font-weight:500;text-decoration:none;transition:all .15s;margin-bottom:14px}
.jdb:hover{background:var(--xbl);color:var(--xb)}
.wack{background:var(--xblb);border:1px solid var(--xbld);border-radius:2px;padding:14px 16px;margin-bottom:14px}
.wact{font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--xbl);font-weight:500;margin-bottom:10px}
.ackd{display:flex;align-items:center;gap:8px;font-size:11px;color:var(--xg)}
</style>
</head>
<body>

<!-- LOGIN SCREEN -->
<div id="loginScreen" class="login-wrap">
  <div class="login-box">
    <div class="login-logo">
      <svg width="40" height="40" viewBox="0 0 28 28" fill="none">
        <line x1="14" y1="2" x2="14" y2="26" stroke="white" stroke-width="1.5"/>
        <path d="M14 8 Q18 10 16 13 Q14 16 18 18" stroke="white" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <path d="M8 7 Q16 9 18 12" stroke="#5bb8e8" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M6 13 Q14 15 16 18" stroke="#c0272d" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M8 19 Q14 20 17 22" stroke="#c0272d" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>
      </svg>
      <div class="lm">Xterra Health</div>
      <div class="ls">Performance Tracker</div>
    </div>
    <div class="login-title" id="loginTitle">Sign In</div>
    <div id="loginErr" style="display:none" class="login-err"></div>
    <div id="loginOk" style="display:none" class="login-ok"></div>

    <!-- LOGIN FORM -->
    <div id="loginForm">
      <div class="field"><label>Email</label><input type="email" id="loginEmail" placeholder="your@email.com" autocomplete="email"></div>
      <div class="field"><label>Password</label><input type="password" id="loginPass" placeholder="••••••••" autocomplete="current-password"></div>
      <button class="btn-full" id="loginBtn" onclick="doLogin()">Sign In</button>
      <div class="login-link"><a onclick="showForgot()">Forgot password?</a></div>
    </div>

    <!-- FORGOT FORM -->
    <div id="forgotForm" style="display:none">
      <div class="field"><label>Email address</label><input type="email" id="forgotEmail" placeholder="your@email.com"></div>
      <button class="btn-full" onclick="doForgot()">Send Reset Link</button>
      <div class="login-link"><a onclick="showLogin()">Back to sign in</a></div>
    </div>

    <!-- RESET FORM -->
    <div id="resetForm" style="display:none">
      <div class="field"><label>New password</label><input type="password" id="resetPass" placeholder="Min 8 characters"></div>
      <div class="field"><label>Confirm password</label><input type="password" id="resetPass2" placeholder="Repeat password"></div>
      <button class="btn-full" onclick="doReset()">Set New Password</button>
    </div>
  </div>
</div>

<!-- APP SHELL -->
<div id="appShell" class="app" style="display:none">
  <div class="topbar">
    <div class="tbl">
      <div class="logo-area">
        <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
          <line x1="14" y1="2" x2="14" y2="26" stroke="white" stroke-width="1.5"/>
          <path d="M14 8 Q18 10 16 13 Q14 16 18 18" stroke="white" stroke-width="1.2" fill="none" stroke-linecap="round"/>
          <path d="M8 7 Q16 9 18 12" stroke="#5bb8e8" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <path d="M6 13 Q14 15 16 18" stroke="#c0272d" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <path d="M8 19 Q14 20 17 22" stroke="#c0272d" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>
        </svg>
        <div><div class="lm">Xterra Health</div><div class="ls">Performance Tracker</div></div>
      </div>
      <div class="vtabs" id="vTabs"></div>
      <div class="save-dot" id="saveDot"></div>
    </div>
    <div style="display:flex;align-items:center;gap:0">
      <span class="rbadge ba" id="rBadge"></span>
      <button class="logout-btn" onclick="doLogout()">Sign Out</button>
    </div>
  </div>
  <div class="stabs" id="sTabs"></div>
  <div class="main" id="mainContent"><div class="loading-screen">Loading...</div></div>
</div>

<script>
const API = '/api';
const WKS = 12;

let authToken = localStorage.getItem('xt_token');
let currentUser = JSON.parse(localStorage.getItem('xt_user') || 'null');
let appView = 'admin';
let appSub = 'perf';
let appWeek = 1;
let DATA = { ryan: null, luis: null };

const PEOPLE = {
  ryan: { name: 'Ryan Anzalone', role: 'Director, Front End Operations', av: 'avr', ini: 'RA',
    jdTitle: 'Director, Front End Operations', jdFile: '/jd/Ryan_Anzalone_JD_FrontEndOps_v3.pdf',
    jdDesc: 'Your full job description outlining role scope, operational boundaries, core responsibilities, minimum performance expectations, and reporting relationships. Effective April 21, 2026.' },
  luis: { name: 'Luis Martinez', role: 'Director, Back End Operations & Provider Oversight', av: 'avl', ini: 'LM',
    jdTitle: 'Director, Back End Operations & Provider Oversight', jdFile: '/jd/Luis_Martinez_JD_BackEndOps_v3.pdf',
    jdDesc: 'Your full job description outlining role scope, operational boundaries, core responsibilities including provider network management, recruitment, letter production, GHL migration, and the veteran help line build. Effective April 21, 2026.' },
};

// ── AUTH ──────────────────────────────────────────────────────────────
function showErr(msg) { const e = document.getElementById('loginErr'); e.textContent = msg; e.style.display = 'block'; document.getElementById('loginOk').style.display = 'none'; }
function showOk(msg) { const e = document.getElementById('loginOk'); e.textContent = msg; e.style.display = 'block'; document.getElementById('loginErr').style.display = 'none'; }
function hideMsg() { document.getElementById('loginErr').style.display = 'none'; document.getElementById('loginOk').style.display = 'none'; }

function showLogin() {
  hideMsg();
  document.getElementById('loginTitle').textContent = 'Sign In';
  document.getElementById('loginForm').style.display = '';
  document.getElementById('forgotForm').style.display = 'none';
  document.getElementById('resetForm').style.display = 'none';
}
function showForgot() {
  hideMsg();
  document.getElementById('loginTitle').textContent = 'Reset Password';
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('forgotForm').style.display = '';
  document.getElementById('resetForm').style.display = 'none';
}
function showReset() {
  hideMsg();
  document.getElementById('loginTitle').textContent = 'Set New Password';
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('forgotForm').style.display = 'none';
  document.getElementById('resetForm').style.display = '';
}

async function doLogin() {
  hideMsg();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPass').value;
  if (!email || !password) { showErr('Please enter your email and password.'); return; }
  const btn = document.getElementById('loginBtn');
  btn.disabled = true; btn.textContent = 'Signing in...';
  try {
    const r = await fetch(\`\${API}/auth/login\`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
    const d = await r.json();
    if (!r.ok) { showErr(d.error || 'Login failed.'); return; }
    authToken = d.token;
    currentUser = d.user;
    localStorage.setItem('xt_token', authToken);
    localStorage.setItem('xt_user', JSON.stringify(currentUser));
    initApp();
  } catch { showErr('Network error. Please try again.'); }
  finally { btn.disabled = false; btn.textContent = 'Sign In'; }
}

async function doForgot() {
  hideMsg();
  const email = document.getElementById('forgotEmail').value.trim();
  if (!email) { showErr('Please enter your email.'); return; }
  await fetch(\`\${API}/auth/forgot\`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
  showOk('If an account exists with that email, a reset link has been sent.');
}

async function doReset() {
  hideMsg();
  const token = new URLSearchParams(location.search).get('token');
  const pass = document.getElementById('resetPass').value;
  const pass2 = document.getElementById('resetPass2').value;
  if (pass.length < 8) { showErr('Password must be at least 8 characters.'); return; }
  if (pass !== pass2) { showErr('Passwords do not match.'); return; }
  const r = await fetch(\`\${API}/auth/reset\`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token, password: pass }) });
  if (r.ok) { showOk('Password updated. You can now sign in.'); setTimeout(showLogin, 2000); }
  else { showErr('Reset link invalid or expired.'); }
}

function doLogout() {
  localStorage.removeItem('xt_token'); localStorage.removeItem('xt_user');
  authToken = null; currentUser = null; DATA = { ryan: null, luis: null };
  document.getElementById('appShell').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  showLogin();
}

// ── API HELPERS ───────────────────────────────────────────────────────
async function api(path, method = 'GET', body = null) {
  const opts = { method, headers: { 'Authorization': \`Bearer \${authToken}\`, 'Content-Type': 'application/json' } };
  if (body) opts.body = JSON.stringify(body);
  const r = await fetch(\`\${API}/\${path}\`, opts);
  if (r.status === 401) { doLogout(); return null; }
  return r.json();
}

function setSave(state) {
  const d = document.getElementById('saveDot');
  if (!d) return;
  d.className = 'save-dot' + (state === 'saving' ? ' saving' : state === 'err' ? ' err' : '');
}

// ── DATA LOADING ──────────────────────────────────────────────────────
async function loadPerson(pid) {
  const d = await api(\`load?person=\${pid}\`);
  if (!d) return;
  DATA[pid] = d;
}

async function initApp() {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('appShell').style.display = 'flex';
  document.getElementById('mainContent').innerHTML = '<div class="loading-screen">Loading your data...</div>';

  const role = currentUser.role;
  appView = role === 'admin' ? 'admin' : role;
  appSub = 'perf';

  // Load data based on role
  if (role === 'admin') {
    await Promise.all([loadPerson('ryan'), loadPerson('luis')]);
  } else {
    await loadPerson(role);
  }

  buildTopBar();
  render();
}

// ── TOP BAR ───────────────────────────────────────────────────────────
function buildTopBar() {
  const role = currentUser.role;
  const vt = document.getElementById('vTabs');
  const badge = document.getElementById('rBadge');

  if (role === 'admin') {
    vt.innerHTML = \`
      <button class="vtab active" onclick="setView('admin')">Admin</button>
      <button class="vtab" onclick="setView('ryan')">Ryan's Portal</button>
      <button class="vtab" onclick="setView('luis')">Luis's Portal</button>\`;
    badge.className = 'rbadge ba';
    badge.textContent = 'Admin · Andrew Wolfgang';
  } else {
    vt.innerHTML = ''; // no tab switching for non-admins
    badge.className = \`rbadge b\${role[0]}\`;
    badge.textContent = currentUser.name;
  }
}

function setView(v) {
  if (currentUser.role !== 'admin') return;
  appView = v; appSub = 'perf';
  document.querySelectorAll('.vtab').forEach((t, i) => t.classList.toggle('active', ['admin','ryan','luis'][i] === v));
  const badge = document.getElementById('rBadge');
  const map = { admin: ['ba','Admin · Andrew Wolfgang'], ryan: ['br','Ryan Anzalone'], luis: ['bl','Luis Martinez'] };
  badge.className = 'rbadge ' + map[v][0]; badge.textContent = map[v][1];
  render();
}

function setSub(s) { appSub = s; render(); }
function setWk(w) { appWeek = Math.max(1, Math.min(WKS, w)); render(); }

// ── GOAL STATUS CYCLE ─────────────────────────────────────────────────
async function cycleStatus(pid, wk, gid) {
  const goal = DATA[pid].goals.find(g => g.id === gid);
  if (!goal) return;
  const c = ['pending','met','partial','missed'];
  goal.status = c[(c.indexOf(goal.status) + 1) % c.length];
  render();
  setSave('saving');
  try {
    await api(\`goals/\${gid}\`, 'PATCH', { status: goal.status });
    setSave('ok');
  } catch { setSave('err'); }
}

async function setRating(pid, wk, r) {
  const wd = getWD(pid, wk);
  wd.rating = wd.rating === r ? null : r;
  render();
  setSave('saving');
  try { await api(\`week/\${pid}/\${wk}\`, 'PATCH', { rating: wd.rating }); setSave('ok'); }
  catch { setSave('err'); }
}

let noteTimers = {};
async function saveNote(pid, wk, gid, field, val) {
  const goal = DATA[pid].goals.find(g => g.id === gid);
  if (goal) goal[field] = val;
  const key = \`\${gid}-\${field}\`;
  clearTimeout(noteTimers[key]);
  setSave('saving');
  noteTimers[key] = setTimeout(async () => {
    try { await api(\`goals/\${gid}\`, 'PATCH', { [field]: val }); setSave('ok'); }
    catch { setSave('err'); }
  }, 1000);
}

async function saveWeekNote(pid, wk, field, val) {
  const wd = getWD(pid, wk); wd[field] = val;
  const key = \`wn-\${pid}-\${wk}-\${field}\`;
  clearTimeout(noteTimers[key]);
  setSave('saving');
  noteTimers[key] = setTimeout(async () => {
    try { await api(\`week/\${pid}/\${wk}\`, 'PATCH', { [field]: val }); setSave('ok'); }
    catch { setSave('err'); }
  }, 1000);
}

async function addGoal(pid, wk) {
  const inp = document.getElementById(\`ai-\${pid}-\${wk}\`);
  if (!inp || !inp.value.trim()) return;
  const text = inp.value.trim();
  const source = currentUser.role === 'admin' ? 'admin' : 'own';
  setSave('saving');
  try {
    const res = await api('goals', 'POST', { targetPerson: pid, week: wk, text, source });
    if (res && res.id) {
      DATA[pid].goals.push({ id: res.id, person: pid, week: wk, text, source, status: 'pending', notes: '', private_note: '' });
      inp.value = '';
      render();
      setSave('ok');
    }
  } catch { setSave('err'); }
}

async function signJD(pid) {
  const n = document.getElementById(\`jd-n-\${pid}\`);
  const c = document.getElementById(\`jd-c-\${pid}\`);
  if (!n || !c) return;
  if (!c.checked || !n.value.trim()) { alert('Please check the acknowledgment and type your full name.'); return; }
  const signedName = n.value.trim();
  setSave('saving');
  try {
    await api('sign/jd', 'POST', { targetPerson: pid, signedName });
    DATA[pid].jdSig = { signed_name: signedName, signed_at: Date.now() };
    setSave('ok'); render();
  } catch { setSave('err'); }
}

async function signAck(pid, wk) {
  const n = document.getElementById(\`ack-n-\${pid}-\${wk}\`);
  const c = document.getElementById(\`ack-c-\${pid}-\${wk}\`);
  if (!n || !c) return;
  if (!c.checked || !n.value.trim()) { alert('Please check the acknowledgment and type your full name.'); return; }
  const signedName = n.value.trim();
  setSave('saving');
  try {
    await api('sign/week', 'POST', { targetPerson: pid, week: wk, signedName });
    if (!DATA[pid].acks) DATA[pid].acks = [];
    DATA[pid].acks.push({ person: pid, week: wk, signed_name: signedName, signed_at: Date.now() });
    setSave('ok'); render();
  } catch { setSave('err'); }
}

// ── HELPERS ───────────────────────────────────────────────────────────
function getWD(pid, wk) {
  if (!DATA[pid].weekData) DATA[pid].weekData = [];
  let wd = DATA[pid].weekData.find(w => w.week === wk);
  if (!wd) { wd = { week: wk, rating: null, week_note: '', private_note: '' }; DATA[pid].weekData.push(wd); }
  return wd;
}
function getAck(pid, wk) {
  return (DATA[pid].acks || []).find(a => a.week == wk);
}
function getGoals(pid, wk) {
  return (DATA[pid].goals || []).filter(g => g.week == wk);
}
function getStats(pid, wk) {
  const gs = getGoals(pid, wk);
  const total = gs.length, met = gs.filter(g=>g.status==='met').length, missed = gs.filter(g=>g.status==='missed').length, partial = gs.filter(g=>g.status==='partial').length;
  return { total, met, missed, partial, pct: total ? Math.round(((met+partial*.5)/total)*100) : 0 };
}
function sc(s){return{met:'smet',partial:'spar',missed:'smis',pending:'spen'}[s]||'spen';}
function sl(s){return{met:'Met',partial:'Partial',missed:'Missed',pending:'Pending'}[s]||'Pending';}
function gc(s){return{met:'gmet',partial:'gpar',missed:'gmis',pending:'gpen'}[s]||'gpen';}
function rpc(r){return{green:'pg',yellow:'py',red:'pred'}[r]||'pno';}
function rl(r){return{green:'On Track',yellow:'Needs Attention',red:'Off Track'}[r]||'—';}
function dc(r){return{green:'dg',yellow:'dy',red:'dr'}[r]||'dn';}
function tagH(src){
  if(src==='recurring')return\`<span class="gtag trec">Recurring</span>\`;
  if(src==='admin')return\`<span class="gtag tadm">Admin</span>\`;
  return\`<span class="gtag town">Self</span>\`;
}

// ── RENDER COMPONENTS ─────────────────────────────────────────────────
function gItem(pid, wk, g, isAdmin) {
  const pn = isAdmin ? \`<div class="pnote"><div class="pnl">Private admin note</div><textarea class="note-ta" placeholder="Not visible to \${pid==='ryan'?'Ryan':'Luis'}..." onchange="saveNote('\${pid}',\${wk},'\${g.id}','private_note',this.value)">\${g.private_note||''}</textarea></div>\` : '';
  return \`<div class="gi \${gc(g.status)}">
    <div class="gtop">
      <button class="gsb \${sc(g.status)}" onclick="cycleStatus('\${pid}',\${wk},'\${g.id}')">\${sl(g.status)}</button>
      <div class="gtx">\${g.text}\${tagH(g.source)}</div>
    </div>
    <div class="gn">
      <div class="fl">Outcome notes</div>
      <textarea class="note-ta" placeholder="Document what happened..." onchange="saveNote('\${pid}',\${wk},'\${g.id}','notes',this.value)">\${g.notes||''}</textarea>
      \${pn}
    </div>
  </div>\`;
}

function wAck(pid, wk, isOwn) {
  if (!isOwn) return '';
  const a = getAck(pid, wk);
  if (a) {
    return \`<div class="wack"><div class="wact">Week \${wk} acknowledgment</div><div class="ackd"><svg width="12" height="12" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6.5" stroke="#4a9e6b"/><path d="M4 7l2 2 4-4" stroke="#4a9e6b" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>Signed by \${a.signed_name} · \${new Date(a.signed_at).toLocaleString()}</div></div>\`;
  }
  return \`<div class="wack">
    <div class="wact">Week \${wk} — please acknowledge before proceeding</div>
    <div class="cbr"><input type="checkbox" id="ack-c-\${pid}-\${wk}"><label for="ack-c-\${pid}-\${wk}">I, <strong>\${PEOPLE[pid].name}</strong>, confirm I have reviewed my Week \${wk} goals, understand my performance expectations, and commit to the deliverables listed above.</label></div>
    <div class="sir"><div class="siw"><div class="sil">Type full name as signature</div><input type="text" class="sii" id="ack-n-\${pid}-\${wk}" placeholder="\${PEOPLE[pid].name}"></div><button class="btn-sm bsl" onclick="signAck('\${pid}',\${wk})">Sign & Submit</button></div>
  </div>\`;
}

function pPanel(pid, wk, isAdmin, isOwn) {
  if (!DATA[pid]) return '<div class="panel"><div class="es">Loading...</div></div>';
  const p = PEOPLE[pid]; const wd = getWD(pid, wk); const st = getStats(pid, wk); const gs = getGoals(pid, wk);
  const rec = gs.filter(g=>g.source==='recurring').length;
  const added = gs.filter(g=>g.source!=='recurring').length;
  const canAdd = isAdmin || isOwn;
  return \`<div class="panel">
    <div class="ph">
      <div class="av \${p.av}">\${p.ini}</div>
      <div><div class="pname">\${p.name}</div><div class="prole">\${p.role}</div></div>
      <div class="or"><div class="rdt \${dc(wd.rating)}"></div><span class="rtext">\${rl(wd.rating)}</span></div>
    </div>
    <div class="cr">
      <div class="mc"><div class="mlab">Goals</div><div class="mv">\${st.total}</div><div class="pbw"><div class="pb" style="width:\${st.pct}%"></div></div></div>
      <div class="mc"><div class="mlab">Met</div><div class="mv vg">\${st.met}</div></div>
      <div class="mc"><div class="mlab">Partial</div><div class="mv vy">\${st.partial}</div></div>
      <div class="mc"><div class="mlab">Missed</div><div class="mv vr">\${st.missed}</div></div>
    </div>
    <div class="rrow">
      <span class="rlab">Week rating:</span>
      <button class="rbn rg \${wd.rating==='green'?'active':''}" onclick="setRating('\${pid}',\${wk},'green')">On Track</button>
      <button class="rbn ry \${wd.rating==='yellow'?'active':''}" onclick="setRating('\${pid}',\${wk},'yellow')">Needs Attention</button>
      <button class="rbn rr \${wd.rating==='red'?'active':''}" onclick="setRating('\${pid}',\${wk},'red')">Off Track</button>
    </div>
    \${wAck(pid, wk, isOwn)}
    <div class="pt"><span>Goals — <span class="ba2">Week \${wk}</span></span><span style="font-size:10px;color:var(--xm)">\${st.pct}% · \${rec} recurring · \${added} added</span></div>
    \${gs.length ? gs.map(g=>gItem(pid,wk,g,isAdmin)).join('') : '<div class="es">No goals set for this week yet.</div>'}
    \${canAdd ? \`<div class="agr"><input class="agr-inp" id="ai-\${pid}-\${wk}" placeholder="\${isAdmin?'Add admin goal for this week...':'Add your own goal...'}"><button class="btn-sm bbl" onclick="addGoal('\${pid}',\${wk})">+ Add Goal</button></div>\` : ''}
    <div class="dv"></div>
    <div class="fl">Weekly summary</div>
    <textarea class="note-ta" style="min-height:52px;margin-bottom:\${isAdmin?'10px':'0'}" placeholder="Overall week summary..." onchange="saveWeekNote('\${pid}',\${wk},'week_note',this.value)">\${wd.week_note||''}</textarea>
    \${isAdmin ? \`<div class="pnote"><div class="pnl">Private admin commentary — week level</div><textarea class="note-ta" placeholder="Executive-level private notes..." onchange="saveWeekNote('\${pid}',\${wk},'private_note',this.value)">\${wd.private_note||''}</textarea></div>\` : ''}
  </div>\`;
}

function jdTab(pid) {
  if (!DATA[pid]) return '<div class="loading-screen">Loading...</div>';
  const p = PEOPLE[pid]; const sig = DATA[pid].jdSig;
  const sigBlock = sig
    ? \`<div style="margin-top:12px"><span class="sgb"><svg width="12" height="12" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6.5" stroke="#4a9e6b"/><path d="M4 7l2 2 4-4" stroke="#4a9e6b" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>Signed by \${sig.signed_name} · \${new Date(sig.signed_at).toLocaleString()}</span></div>\`
    : \`<div class="sb2">
        <div class="sbt">Position acknowledgment — signature required</div>
        <div class="sbs">By signing below, you confirm you have downloaded and reviewed your full Job Description, understand your role scope and performance expectations, and accept the terms of your position effective April 21, 2026.</div>
        <div class="cbr"><input type="checkbox" id="jd-c-\${pid}"><label for="jd-c-\${pid}">I, <strong>\${p.name}</strong>, confirm I have read and understood my Job Description in full and accept the responsibilities of my role as \${p.jdTitle} at Xterra Health LLC, effective April 21, 2026.</label></div>
        <div class="sir"><div class="siw"><div class="sil">Type your full name as signature</div><input type="text" class="sii" id="jd-n-\${pid}" placeholder="\${p.name}"></div><button class="btn-sm bsl" onclick="signJD('\${pid}')">Sign & Submit</button></div>
        <div class="asn">Upon signing, Andrew Wolfgang will be notified at awolfgang@xterrahealth.com and this signature is permanently saved to your record.</div>
      </div>\`;
  return \`<div>
    <div class="sh"><span class="st">Job Description — <span class="ba2">\${p.name}</span></span></div>
    <div class="panel">
      <div class="pt">\${p.jdTitle}</div>
      <div style="font-size:12px;color:var(--xm);line-height:1.7;margin-bottom:16px">\${p.jdDesc}</div>
      <a class="jdb" href="\${p.jdFile}" target="_blank">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="#5bb8e8" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Download Job Description PDF
      </a>
      <div style="font-size:11px;color:var(--xh)">Effective April 21, 2026 · Xterra Health LLC · Confidential</div>
      \${sigBlock}
    </div>
  </div>\`;
}

function histTab(pid) {
  if (!DATA[pid]) return '<div class="es">Loading...</div>';
  const rows = [];
  for (let w = 1; w <= WKS; w++) {
    const st = getStats(pid, w); const wd = getWD(pid, w); const a = getAck(pid, w);
    const has = getGoals(pid,w).some(g=>g.status!=='pending') || wd.rating || wd.week_note;
    if (!has && w > appWeek) continue;
    rows.push(\`<tr>
      <td style="font-weight:500;color:var(--xbl);letter-spacing:1px">Wk \${w}</td>
      <td>\${st.total}</td>
      <td><span class="pill pm">\${st.met}</span></td>
      <td><span class="pill pp">\${st.partial}</span></td>
      <td><span class="pill pmi">\${st.missed}</span></td>
      <td><span class="pill \${rpc(wd.rating)}">\${rl(wd.rating)}</span></td>
      <td><span class="pill \${a?'pm':'pnx'}">\${a?'Signed':'Pending'}</span></td>
      <td style="color:var(--xm);font-size:11px">\${wd.week_note?(wd.week_note.substring(0,46)+(wd.week_note.length>46?'…':'')):'—'}</td>
    </tr>\`);
  }
  if (!rows.length) return '<div class="es">No history yet — outcomes will appear here as weeks are completed.</div>';
  return \`<div class="sx"><table class="ht"><thead><tr><th>Wk</th><th>Goals</th><th>Met</th><th>Partial</th><th>Missed</th><th>Rating</th><th>Ack</th><th>Summary</th></tr></thead><tbody>\${rows.join('')}</tbody></table></div>\`;
}

function renderSTabs(tabs) {
  document.getElementById('sTabs').innerHTML = tabs.map(t=>\`<button class="stab \${appSub===t.id?'active':''}" onclick="setSub('\${t.id}')">\${t.label}</button>\`).join('');
}

function render() {
  const el = document.getElementById('mainContent');
  const isAdmin = currentUser.role === 'admin';
  const wk = appWeek;
  const wnav = \`<div class="wn"><button class="wb" onclick="setWk(\${wk-1})">&#8249;</button><span class="wl">Week \${wk}</span><button class="wb" onclick="setWk(\${wk+1})">&#8250;</button></div>\`;

  if (isAdmin) {
    renderSTabs([{id:'perf',label:'Performance'},{id:'ryan-d',label:'Ryan — Detail'},{id:'luis-d',label:'Luis — Detail'},{id:'hist',label:'History'}]);
    if (appSub==='perf') {
      el.innerHTML = \`<div class="sh"><span class="st">Executive Tracker — <span class="ba2">Admin View</span></span>\${wnav}</div><div class="dgr">\${pPanel('ryan',wk,true,false)}\${pPanel('luis',wk,true,false)}</div>\`;
    } else if (appSub==='ryan-d') {
      el.innerHTML = \`<div class="sh"><span class="st">Ryan Anzalone — <span class="ba2">Full Detail</span></span>\${wnav}</div>\${pPanel('ryan',wk,true,false)}\`;
    } else if (appSub==='luis-d') {
      el.innerHTML = \`<div class="sh"><span class="st">Luis Martinez — <span class="ba2">Full Detail</span></span>\${wnav}</div>\${pPanel('luis',wk,true,false)}\`;
    } else {
      el.innerHTML = \`<div class="sh"><span class="st">Performance History — <span class="ba2">All</span></span></div>
        <div class="panel"><div class="pt">Ryan Anzalone</div>\${histTab('ryan')}</div>
        <div class="panel"><div class="pt">Luis Martinez</div>\${histTab('luis')}</div>\`;
    }
  } else {
    const pid = currentUser.role;
    const p = PEOPLE[pid];
    renderSTabs([{id:'perf',label:'My Performance'},{id:'jd',label:'My Job Description'},{id:'hist',label:'My History'}]);
    if (appSub==='perf') {
      el.innerHTML = \`<div class="sh"><span class="st">My Performance — <span class="ba2">\${p.name}</span></span>\${wnav}</div>\${pPanel(pid,wk,false,true)}\`;
    } else if (appSub==='jd') {
      el.innerHTML = jdTab(pid);
    } else {
      el.innerHTML = \`<div class="sh"><span class="st">My History — <span class="ba2">\${p.name}</span></span></div><div class="panel"><div class="pt">Performance Record</div>\${histTab(pid)}</div>\`;
    }
  }
}

// ── INIT ──────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  // Check for password reset token in URL
  const token = new URLSearchParams(location.search).get('token');
  if (token) { showReset(); return; }

  // Auto-login if token stored
  if (authToken && currentUser) {
    initApp();
  }

  // Enter key on login
  document.getElementById('loginPass').addEventListener('keydown', e => { if (e.key==='Enter') doLogin(); });
  document.getElementById('loginEmail').addEventListener('keydown', e => { if (e.key==='Enter') document.getElementById('loginPass').focus(); });
});
</script>
</body>
</html>
`;

const JWT_SECRET = "XterraHealth2026SecureTrackerKeyForJWTAuthenticationAndSecurity";
const ADMIN_EMAIL = "awolfgang@xterrahealth.com";
const APP_URL = "https://billowing-frog-531e.xterra-health.workers.dev";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/')) {
      return handleAPI(request, env);
    }
    return new Response(HTML, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' }
    });
  }
};

async function handleAPI(request, env) {
  const url = new URL(request.url);
  const path = url.pathname.replace('/api/', '').replace(/\/$/, '');
  const method = request.method;
  const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization',
  };
  if (method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
  
  function json(data, status = 200) {
    return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json', ...CORS } });
  }
  function err(msg, status = 400) { return json({ error: msg }, status); }
  
  async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode(...new Uint8Array(hash)));
  }
  
  async function makeJWT(payload) {
    const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(JWT_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const body = btoa(JSON.stringify({ ...payload, exp: Math.floor(Date.now()/1000) + 604800 }));
    const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(header + '.' + body));
    return header + '.' + body + '.' + btoa(String.fromCharCode(...new Uint8Array(sig)));
  }
  
  async function verifyJWT(token) {
    try {
      const [header, body, sig] = token.split('.');
      const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(JWT_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']);
      const valid = await crypto.subtle.verify('HMAC', key, Uint8Array.from(atob(sig), c => c.charCodeAt(0)), new TextEncoder().encode(header + '.' + body));
      if (!valid) return null;
      const payload = JSON.parse(atob(body));
      if (payload.exp < Math.floor(Date.now()/1000)) return null;
      return payload;
    } catch { return null; }
  }
  
  async function getUser(request) {
    const auth = request.headers.get('Authorization') || '';
    const token = auth.replace('Bearer ', '');
    if (!token) return null;
    return verifyJWT(token);
  }

  async function sendEmail(to, subject, htmlBody) {
    if (!env.RESEND_API_KEY) return false;
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: 'Xterra Tracker <notifications@xterrahealth.com>', to: [to], subject, html: htmlBody })
      });
      return res.ok;
    } catch { return false; }
  }

  function uid() { return crypto.randomUUID(); }

  const PEOPLE = {
    ryan: { name: 'Ryan Anzalone', role: 'Director, Front End Operations' },
    luis: { name: 'Luis Martinez', role: 'Director, Back End Operations & Provider Oversight' },
  };

  if (path === 'auth/login' && method === 'POST') {
    const { email, password } = await request.json();
    if (!email || !password) return err('Missing fields');
    const hash = await hashPassword(password);
    const user = await env.DB.prepare('SELECT id, email, role, name FROM users WHERE email = ? AND password_hash = ?').bind(email.toLowerCase(), hash).first();
    if (!user) return err('Invalid email or password', 401);
    const token = await makeJWT({ sub: user.id, role: user.role, name: user.name, email: user.email });
    return json({ token, user: { id: user.id, role: user.role, name: user.name, email: user.email } });
  }

  if (path === 'auth/forgot' && method === 'POST') {
    const { email } = await request.json();
    if (!email) return err('Missing email');
    const user = await env.DB.prepare('SELECT id, name FROM users WHERE email = ?').bind(email.toLowerCase()).first();
    if (!user) return json({ ok: true });
    const token = uid();
    const expires = Date.now() + 3600000;
    await env.DB.prepare('UPDATE users SET reset_token = ?, reset_expires = ? WHERE id = ?').bind(token, expires, user.id).run();
    const resetUrl = `${APP_URL}?token=${token}`;
    await sendEmail(email, 'Xterra Tracker — Password Reset', `<div style="font-family:Arial,sans-serif;padding:32px"><h2 style="color:#5bb8e8">Xterra Health Performance Tracker</h2><p>Hi ${user.name},</p><p>Click below to reset your password.</p><a href="${resetUrl}" style="display:inline-block;padding:12px 24px;background:#5bb8e8;color:#1a1a1a;text-decoration:none">Reset Password</a></div>`);
    return json({ ok: true });
  }

  if (path === 'auth/reset' && method === 'POST') {
    const { token, password } = await request.json();
    if (!token || !password || password.length < 8) return err('Invalid request');
    const user = await env.DB.prepare('SELECT id FROM users WHERE reset_token = ? AND reset_expires > ?').bind(token, Date.now()).first();
    if (!user) return err('Reset link expired or invalid', 401);
    const hash = await hashPassword(password);
    await env.DB.prepare('UPDATE users SET password_hash = ?, reset_token = NULL, reset_expires = NULL WHERE id = ?').bind(hash, user.id).run();
    return json({ ok: true });
  }

  const user = await getUser(request);
  if (!user) return err('Unauthorized', 401);
  const person = user.role === 'admin' ? null : user.role;

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
    const safeGoals = goals.results.map(g => isAdmin ? g : { ...g, private_note: undefined });
    const safeWeeks = weekData.results.map(w => isAdmin ? w : { ...w, private_note: undefined });
    return json({ goals: safeGoals, weekData: safeWeeks, jdSig, acks: acks.results });
  }

  if (path.startsWith('goals')) {
    const parts = path.split('/');
    if (method === 'GET') {
      const targetPerson = parts[1]; const targetWeek = parseInt(parts[2]);
      if (person && person !== targetPerson) return err('Forbidden', 403);
      const rows = await env.DB.prepare('SELECT * FROM goals WHERE person = ? AND week = ? ORDER BY sort_order ASC, created_at ASC').bind(targetPerson, targetWeek).all();
      return json(rows.results);
    }
    if (method === 'POST') {
      const { targetPerson, week, text, source } = await request.json();
      if (person && person !== targetPerson) return err('Forbidden', 403);
      const id = uid();
      const maxOrder = await env.DB.prepare('SELECT MAX(sort_order) as m FROM goals WHERE person = ? AND week = ?').bind(targetPerson, week).first();
      const order = ((maxOrder?.m) || 0) + 1;
      await env.DB.prepare('INSERT INTO goals (id, person, week, text, source, sort_order) VALUES (?,?,?,?,?,?)').bind(id, targetPerson, week, text, source, order).run();
      return json({ id });
    }
    if (method === 'PATCH') {
      const goalId = parts[1];
      const body = await request.json();
      const goal = await env.DB.prepare('SELECT person FROM goals WHERE id = ?').bind(goalId).first();
      if (!goal) return err('Not found', 404);
      if (person && person !== goal.person) return err('Forbidden', 403);
      const allowed = ['status','notes'];
      if (user.role === 'admin') allowed.push('private_note','text');
      const updates = []; const vals = [];
      for (const k of allowed) { if (k in body) { updates.push(`${k} = ?`); vals.push(body[k]); } }
      if (!updates.length) return err('Nothing to update');
      updates.push('updated_at = unixepoch()');
      vals.push(goalId);
      await env.DB.prepare(`UPDATE goals SET ${updates.join(',')} WHERE id = ?`).bind(...vals).run();
      return json({ ok: true });
    }
  }

  if (path.startsWith('week')) {
    const parts = path.split('/');
    const targetPerson = parts[1]; const targetWeek = parseInt(parts[2]);
    if (person && person !== targetPerson) return err('Forbidden', 403);
    if (method === 'GET') {
      const row = await env.DB.prepare('SELECT * FROM week_data WHERE person = ? AND week = ?').bind(targetPerson, targetWeek).first();
      return json(row || {});
    }
    if (method === 'PATCH') {
      const body = await request.json();
      const allowed = ['rating','week_note'];
      if (user.role === 'admin') allowed.push('private_note');
      const updates = []; const vals = [];
      for (const k of allowed) { if (k in body) { updates.push(`${k} = ?`); vals.push(body[k]); } }
      if (!updates.length) return err('Nothing to update');
      updates.push('updated_at = unixepoch()');
      const existing = await env.DB.prepare('SELECT id FROM week_data WHERE person = ? AND week = ?').bind(targetPerson, targetWeek).first();
      if (existing) {
        vals.push(targetPerson); vals.push(targetWeek);
        await env.DB.prepare(`UPDATE week_data SET ${updates.join(',')} WHERE person = ? AND week = ?`).bind(...vals).run();
      } else {
        const fields = allowed.filter(k => k in body);
        const insertVals = [uid(), targetPerson, targetWeek, ...fields.map(k => body[k])];
        await env.DB.prepare(`INSERT INTO week_data (id, person, week, ${fields.join(',')}) VALUES (?,?,?,${fields.map(()=>'?').join(',')})`).bind(...insertVals).run();
      }
      return json({ ok: true });
    }
  }

  if (path === 'sign/jd' && method === 'POST') {
    const { targetPerson, signedName } = await request.json();
    if (person && person !== targetPerson) return err('Forbidden', 403);
    const existing = await env.DB.prepare('SELECT id FROM jd_signatures WHERE person = ?').bind(targetPerson).first();
    if (existing) return err('Already signed');
    await env.DB.prepare('INSERT INTO jd_signatures (id, person, signed_name, signed_at) VALUES (?,?,?,?)').bind(uid(), targetPerson, signedName, Date.now()).run();
    const p = PEOPLE[targetPerson];
    await sendEmail(ADMIN_EMAIL, `JD Signature Recorded — ${p.name}`, `<div style="font-family:Arial,sans-serif;padding:32px"><h2 style="color:#5bb8e8">Xterra Health Performance Tracker</h2><p>${p.name} signed their Job Description on ${new Date().toLocaleString()}.</p><p>Signed as: <em>${signedName}</em></p></div>`);
    return json({ ok: true });
  }

  if (path === 'sign/week' && method === 'POST') {
    const { targetPerson, week, signedName } = await request.json();
    if (person && person !== targetPerson) return err('Forbidden', 403);
    const existing = await env.DB.prepare('SELECT id FROM week_acks WHERE person = ? AND week = ?').bind(targetPerson, week).first();
    if (existing) return err('Already acknowledged');
    await env.DB.prepare('INSERT INTO week_acks (id, person, week, signed_name, signed_at) VALUES (?,?,?,?,?)').bind(uid(), targetPerson, week, signedName, Date.now()).run();
    const p = PEOPLE[targetPerson];
    await sendEmail(ADMIN_EMAIL, `Week ${week} Goals Acknowledged — ${p.name}`, `<div style="font-family:Arial,sans-serif;padding:32px"><h2 style="color:#5bb8e8">Xterra Health Performance Tracker</h2><p>${p.name} acknowledged Week ${week} goals on ${new Date().toLocaleString()}.</p><p>Signed as: <em>${signedName}</em></p></div>`);
    return json({ ok: true });
  }

  return err('Not found', 404);
}
ld:#2a5f7a;--xblb:rgba(91,184,232,0.08);
  --xr:#c0272d;--xrd:#7a1a1e;--xrb:rgba(192,39,45,0.08);
  --xw:#fff;--xo:#e8e8e8;--xm:#888;--xh:#555;
  --xg:#4a9e6b;--xgb:rgba(74,158,107,0.1);
  --xy:#d4a017;--xyb:rgba(212,160,23,0.1);
}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;background:var(--xb);color:var(--xw);min-height:100vh}

/* ── LOGIN ── */
.login-wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px}
.login-box{background:var(--xd);border:1px solid var(--xbr);border-radius:4px;padding:40px;width:100%;max-width:400px}
.login-logo{text-align:center;margin-bottom:32px}
.login-logo svg{margin-bottom:10px}
.login-logo .lm{font-size:16px;font-weight:500;letter-spacing:4px;text-transform:uppercase;margin-bottom:3px}
.login-logo .ls{font-size:9px;letter-spacing:2.5px;color:var(--xbl);text-transform:uppercase}
.login-title{font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--xm);margin-bottom:24px;text-align:center}
.field{margin-bottom:16px}
.field label{display:block;font-size:10px;letter-spacing:1px;text-transform:uppercase;color:var(--xm);margin-bottom:6px}
.field input{width:100%;padding:10px 12px;border:1px solid var(--xbr);border-radius:2px;background:var(--xb);color:var(--xo);font-size:13px;font-family:inherit}
.field input:focus{outline:none;border-color:var(--xbl)}
.btn-full{width:100%;padding:11px;border-radius:2px;border:1px solid var(--xbl);background:var(--xbl);color:var(--xb);font-size:11px;cursor:pointer;letter-spacing:2px;text-transform:uppercase;font-weight:500;transition:all .15s;font-family:inherit}
.btn-full:hover{background:#4aaad8}
.btn-full:disabled{opacity:.5;cursor:not-allowed}
.login-link{text-align:center;margin-top:16px;font-size:12px;color:var(--xm)}
.login-link a{color:var(--xbl);text-decoration:none;cursor:pointer}
.login-link a:hover{text-decoration:underline}
.login-err{background:var(--xrb);border:1px solid var(--xrd);border-radius:2px;padding:8px 12px;font-size:12px;color:#e06060;margin-bottom:14px}
.login-ok{background:var(--xgb);border:1px solid rgba(74,158,107,.4);border-radius:2px;padding:8px 12px;font-size:12px;color:var(--xg);margin-bottom:14px}

/* ── APP SHELL ── */
.app{display:flex;flex-direction:column;min-height:100vh}
.topbar{background:var(--xd);border-bottom:1px solid var(--xbr);padding:0 20px;display:flex;align-items:stretch;justify-content:space-between}
.tbl{display:flex;align-items:center}
.logo-area{display:flex;align-items:center;gap:10px;padding:10px 18px 10px 0;border-right:1px solid var(--xbr);margin-right:0}
.lm{font-size:12px;font-weight:500;letter-spacing:3px;text-transform:uppercase}
.ls{font-size:8px;letter-spacing:2px;color:var(--xbl);text-transform:uppercase}
.vtabs{display:flex;align-items:stretch}
.vtab{padding:0 16px;border:none;border-right:1px solid var(--xbr);font-size:10px;cursor:pointer;background:transparent;color:var(--xm);letter-spacing:1.5px;text-transform:uppercase;font-weight:500;transition:all .15s;font-family:inherit}
.vtab.active{background:var(--xbl);color:var(--xb)}
.vtab:hover:not(.active){background:var(--xp);color:var(--xw)}
.rbadge{font-size:10px;padding:4px 12px;border-radius:2px;font-weight:500;letter-spacing:1px;text-transform:uppercase;align-self:center}
.ba{background:var(--xblb);color:var(--xbl);border:1px solid var(--xbld)}
.br{background:var(--xgb);color:var(--xg);border:1px solid rgba(74,158,107,.3)}
.bl{background:var(--xrb);color:#e06060;border:1px solid var(--xrd)}
.logout-btn{background:transparent;border:none;color:var(--xm);font-size:10px;letter-spacing:1px;text-transform:uppercase;cursor:pointer;padding:0 0 0 16px;align-self:center;font-family:inherit}
.logout-btn:hover{color:var(--xbl)}
.save-dot{width:7px;height:7px;border-radius:50%;background:var(--xg);margin-left:12px;flex-shrink:0;transition:background .3s;align-self:center}
.save-dot.saving{background:var(--xy)}.save-dot.err{background:var(--xr)}
.stabs{display:flex;background:var(--xd);border-bottom:1px solid var(--xbr);padding:0 20px}
.stab{padding:10px 18px;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;color:var(--xm);border-bottom:2px solid transparent;background:transparent;border-top:none;border-left:none;border-right:none;transition:all .15s;font-weight:500;font-family:inherit}
.stab.active{color:var(--xbl);border-bottom-color:var(--xbl)}
.stab:hover:not(.active){color:var(--xw)}
.main{padding:20px;flex:1}
.loading-screen{display:flex;align-items:center;justify-content:center;min-height:300px;font-size:11px;color:var(--xm);letter-spacing:2px;text-transform:uppercase}

/* ── COMPONENTS ── */
.sh{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid var(--xbr);flex-wrap:wrap;gap:8px}
.st{font-size:11px;font-weight:500;letter-spacing:2.5px;text-transform:uppercase;color:var(--xm)}
.ba2{color:var(--xbl)}
.wn{display:flex;align-items:center;gap:8px}
.wb{width:28px;height:28px;border-radius:2px;border:1px solid var(--xbr);background:var(--xp);cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;color:var(--xm);font-family:inherit}
.wb:hover{border-color:var(--xbl);color:var(--xbl)}
.wl{font-size:12px;font-weight:500;letter-spacing:2px;text-transform:uppercase;min-width:64px;text-align:center}
.panel{background:var(--xd);border:1px solid var(--xbr);border-radius:2px;padding:16px;margin-bottom:14px}
.pt{font-size:10px;font-weight:500;letter-spacing:2px;text-transform:uppercase;color:var(--xm);margin-bottom:14px;display:flex;align-items:center;justify-content:space-between}
.cr{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:16px}
.mc{background:var(--xp);border:1px solid var(--xbr);border-radius:2px;padding:10px 12px}
.mlab{font-size:9px;color:var(--xm);margin-bottom:4px;letter-spacing:1.5px;text-transform:uppercase}
.mv{font-size:20px;font-weight:500}
.vg{color:var(--xg)}.vy{color:var(--xy)}.vr{color:var(--xr)}
.pbw{height:3px;background:var(--xbr);border-radius:2px;margin-top:6px}
.pb{height:100%;border-radius:2px;background:var(--xbl)}
.ph{display:flex;align-items:center;gap:10px;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid var(--xbr)}
.av{width:34px;height:34px;border-radius:2px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:500;flex-shrink:0;letter-spacing:1px}
.avr{background:var(--xgb);color:var(--xg);border:1px solid rgba(74,158,107,.3)}
.avl{background:var(--xrb);color:#e06060;border:1px solid var(--xrd)}
.pname{font-size:13px;font-weight:500}
.prole{font-size:10px;color:var(--xm);margin-top:1px}
.or{display:flex;align-items:center;gap:6px;margin-left:auto}
.rdt{width:8px;height:8px;border-radius:50%}
.dg{background:var(--xg)}.dy{background:var(--xy)}.dr{background:var(--xr)}.dn{background:var(--xbr)}
.rtext{font-size:10px;color:var(--xm);letter-spacing:1px;text-transform:uppercase}
.rrow{display:flex;align-items:center;gap:6px;margin-bottom:14px;flex-wrap:wrap}
.rlab{font-size:10px;color:var(--xm);letter-spacing:1px;text-transform:uppercase;margin-right:2px}
.rbn{padding:5px 12px;border-radius:2px;font-size:10px;font-weight:500;cursor:pointer;border:1px solid var(--xbr);background:var(--xp);color:var(--xm);letter-spacing:1px;text-transform:uppercase;transition:all .15s;font-family:inherit}
.rbn.rg.active{background:var(--xgb);color:var(--xg);border-color:rgba(74,158,107,.4)}
.rbn.ry.active{background:var(--xyb);color:var(--xy);border-color:rgba(212,160,23,.4)}
.rbn.rr.active{background:var(--xrb);color:#e06060;border-color:var(--xrd)}
.rbn:hover:not(.active){border-color:var(--xbl);color:var(--xbl)}
.gi{border:1px solid var(--xbr);border-radius:2px;padding:12px;margin-bottom:8px;background:var(--xp)}
.gi:last-child{margin-bottom:0}
.gmet{border-left:3px solid var(--xg)}.gpar{border-left:3px solid var(--xy)}.gmis{border-left:3px solid var(--xr)}.gpen{border-left:3px solid var(--xbr)}
.gtop{display:flex;align-items:flex-start;gap:10px}
.gsb{border:none;border-radius:2px;padding:3px 10px;font-size:10px;font-weight:500;cursor:pointer;white-space:nowrap;flex-shrink:0;margin-top:2px;letter-spacing:1px;text-transform:uppercase;font-family:inherit}
.smet{background:var(--xgb);color:var(--xg);border:1px solid rgba(74,158,107,.3)}
.spar{background:var(--xyb);color:var(--xy);border:1px solid rgba(212,160,23,.3)}
.smis{background:var(--xrb);color:#e06060;border:1px solid var(--xrd)}
.spen{background:var(--xd);color:var(--xm);border:1px solid var(--xbr)}
.gtx{font-size:12px;color:var(--xo);line-height:1.6;flex:1}
.gtag{font-size:9px;padding:2px 7px;border-radius:2px;margin-left:6px;font-weight:500;letter-spacing:1px;text-transform:uppercase;vertical-align:middle}
.trec{background:var(--xblb);color:var(--xbl);border:1px solid var(--xbld)}
.tadm{background:var(--xblb);color:var(--xbl);border:1px solid var(--xbld)}
.town{background:rgba(160,100,200,.1);color:#b07ad4;border:1px solid rgba(160,100,200,.2)}
.gn{margin-top:10px;padding-top:10px;border-top:1px solid var(--xbr)}
.fl{font-size:10px;color:var(--xm);margin-bottom:6px;letter-spacing:1px;text-transform:uppercase}
textarea,input[type=text],input[type=email],input[type=password]{font-family:inherit}
.note-ta{width:100%;font-size:12px;border:1px solid var(--xbr);border-radius:2px;padding:7px 10px;background:var(--xb);color:var(--xo);resize:vertical;min-height:44px;font-family:inherit}
.note-ta:focus{outline:none;border-color:var(--xbl)}
.pnote{background:rgba(192,39,45,.05);border:1px solid var(--xrd);border-radius:2px;padding:8px 10px;margin-top:8px}
.pnl{font-size:9px;font-weight:500;color:#e06060;margin-bottom:6px;letter-spacing:1.5px;text-transform:uppercase}
.pnote .note-ta{border:1px solid var(--xrd);background:var(--xb)}
.pnote .note-ta:focus{border-color:var(--xr)}
.agr{display:flex;gap:8px;margin-top:12px}
.agr-inp{flex:1;font-size:12px;border:1px solid var(--xbr);border-radius:2px;padding:7px 10px;background:var(--xb);color:var(--xo);font-family:inherit}
.agr-inp:focus{outline:none;border-color:var(--xbl)}
.btn-sm{padding:7px 16px;border-radius:2px;font-size:10px;cursor:pointer;letter-spacing:1.5px;text-transform:uppercase;font-weight:500;white-space:nowrap;transition:all .15s;font-family:inherit}
.bbl{border:1px solid var(--xbl);background:transparent;color:var(--xbl)}
.bbl:hover{background:var(--xbl);color:var(--xb)}
.bsl{border:1px solid var(--xbl);background:var(--xbl);color:var(--xb)}
.bsl:hover{background:#4aaad8}
.dv{height:1px;background:var(--xbr);margin:14px 0}
.dgr{display:grid;grid-template-columns:1fr 1fr;gap:14px}
@media(max-width:700px){.dgr{grid-template-columns:1fr}}
.es{text-align:center;padding:28px;color:var(--xh);font-size:12px}
.sx{overflow-x:auto}
.ht{width:100%;border-collapse:collapse;font-size:12px}
.ht th{text-align:left;padding:8px 10px;font-size:9px;color:var(--xm);border-bottom:1px solid var(--xbr);letter-spacing:1.5px;text-transform:uppercase;font-weight:500}
.ht td{padding:8px 10px;border-bottom:1px solid var(--xbr);vertical-align:top;color:var(--xo)}
.ht tr:last-child td{border-bottom:none}
.ht tr:hover td{background:var(--xp)}
.pill{display:inline-block;padding:2px 8px;border-radius:2px;font-size:10px;font-weight:500}
.pm{background:var(--xgb);color:var(--xg)}.pp{background:var(--xyb);color:var(--xy)}
.pmi{background:var(--xrb);color:#e06060}.pnx{background:var(--xp);color:var(--xm)}
.pg{background:var(--xgb);color:var(--xg)}.py{background:var(--xyb);color:var(--xy)}
.pred{background:var(--xrb);color:#e06060}.pno{background:var(--xp);color:var(--xm)}
.sb2{background:var(--xp);border:1px solid var(--xbr);border-radius:2px;padding:20px;margin-top:16px}
.sbt{font-size:13px;font-weight:500;margin-bottom:6px}
.sbs{font-size:11px;color:var(--xm);margin-bottom:16px;line-height:1.6}
.cbr{display:flex;align-items:flex-start;gap:10px;margin-bottom:14px}
.cbr input[type=checkbox]{width:16px;height:16px;margin-top:2px;flex-shrink:0;accent-color:var(--xbl);cursor:pointer}
.cbr label{font-size:12px;color:var(--xo);line-height:1.6;cursor:pointer}
.sir{display:flex;gap:10px;align-items:flex-end;flex-wrap:wrap}
.siw{flex:1;min-width:180px}
.sil{font-size:10px;color:var(--xm);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px}
.sii{font-size:14px;font-style:italic;border-bottom:1px solid var(--xbl);border-top:none;border-left:none;border-right:none;background:transparent;color:var(--xbl);padding:4px 0;width:100%;border-radius:0}
.sii:focus{outline:none;border-bottom-color:var(--xw)}
.sgb{display:inline-flex;align-items:center;gap:6px;background:var(--xgb);border:1px solid rgba(74,158,107,.4);border-radius:2px;padding:6px 12px;font-size:10px;color:var(--xg);letter-spacing:1px;text-transform:uppercase;font-weight:500}
.asn{background:var(--xblb);border:1px solid var(--xbld);border-radius:2px;padding:10px 14px;font-size:11px;color:var(--xbl);margin-top:10px}
.jdb{display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:2px;border:1px solid var(--xbl);background:transparent;color:var(--xbl);font-size:11px;cursor:pointer;letter-spacing:1.5px;text-transform:uppercase;font-weight:500;text-decoration:none;transition:all .15s;margin-bottom:14px}
.jdb:hover{background:var(--xbl);color:var(--xb)}
.wack{background:var(--xblb);border:1px solid var(--xbld);border-radius:2px;padding:14px 16px;margin-bottom:14px}
.wact{font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--xbl);font-weight:500;margin-bottom:10px}
.ackd{display:flex;align-items:center;gap:8px;font-size:11px;color:var(--xg)}
</style>
</head>
<body>

<!-- LOGIN SCREEN -->
<div id="loginScreen" class="login-wrap">
  <div class="login-box">
    <div class="login-logo">
      <svg width="40" height="40" viewBox="0 0 28 28" fill="none">
        <line x1="14" y1="2" x2="14" y2="26" stroke="white" stroke-width="1.5"/>
        <path d="M14 8 Q18 10 16 13 Q14 16 18 18" stroke="white" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <path d="M8 7 Q16 9 18 12" stroke="#5bb8e8" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M6 13 Q14 15 16 18" stroke="#c0272d" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M8 19 Q14 20 17 22" stroke="#c0272d" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>
      </svg>
      <div class="lm">Xterra Health</div>
      <div class="ls">Performance Tracker</div>
    </div>
    <div class="login-title" id="loginTitle">Sign In</div>
    <div id="loginErr" style="display:none" class="login-err"></div>
    <div id="loginOk" style="display:none" class="login-ok"></div>

    <!-- LOGIN FORM -->
    <div id="loginForm">
      <div class="field"><label>Email</label><input type="email" id="loginEmail" placeholder="your@email.com" autocomplete="email"></div>
      <div class="field"><label>Password</label><input type="password" id="loginPass" placeholder="••••••••" autocomplete="current-password"></div>
      <button class="btn-full" id="loginBtn" onclick="doLogin()">Sign In</button>
      <div class="login-link"><a onclick="showForgot()">Forgot password?</a></div>
    </div>

    <!-- FORGOT FORM -->
    <div id="forgotForm" style="display:none">
      <div class="field"><label>Email address</label><input type="email" id="forgotEmail" placeholder="your@email.com"></div>
      <button class="btn-full" onclick="doForgot()">Send Reset Link</button>
      <div class="login-link"><a onclick="showLogin()">Back to sign in</a></div>
    </div>

    <!-- RESET FORM -->
    <div id="resetForm" style="display:none">
      <div class="field"><label>New password</label><input type="password" id="resetPass" placeholder="Min 8 characters"></div>
      <div class="field"><label>Confirm password</label><input type="password" id="resetPass2" placeholder="Repeat password"></div>
      <button class="btn-full" onclick="doReset()">Set New Password</button>
    </div>
  </div>
</div>

<!-- APP SHELL -->
<div id="appShell" class="app" style="display:none">
  <div class="topbar">
    <div class="tbl">
      <div class="logo-area">
        <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
          <line x1="14" y1="2" x2="14" y2="26" stroke="white" stroke-width="1.5"/>
          <path d="M14 8 Q18 10 16 13 Q14 16 18 18" stroke="white" stroke-width="1.2" fill="none" stroke-linecap="round"/>
          <path d="M8 7 Q16 9 18 12" stroke="#5bb8e8" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <path d="M6 13 Q14 15 16 18" stroke="#c0272d" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <path d="M8 19 Q14 20 17 22" stroke="#c0272d" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>
        </svg>
        <div><div class="lm">Xterra Health</div><div class="ls">Performance Tracker</div></div>
      </div>
      <div class="vtabs" id="vTabs"></div>
      <div class="save-dot" id="saveDot"></div>
    </div>
    <div style="display:flex;align-items:center;gap:0">
      <span class="rbadge ba" id="rBadge"></span>
      <button class="logout-btn" onclick="doLogout()">Sign Out</button>
    </div>
  </div>
  <div class="stabs" id="sTabs"></div>
  <div class="main" id="mainContent"><div class="loading-screen">Loading...</div></div>
</div>

<script>
const API = '/api';
const WKS = 12;

let authToken = localStorage.getItem('xt_token');
let currentUser = JSON.parse(localStorage.getItem('xt_user') || 'null');
let appView = 'admin';
let appSub = 'perf';
let appWeek = 1;
let DATA = { ryan: null, luis: null };

const PEOPLE = {
  ryan: { name: 'Ryan Anzalone', role: 'Director, Front End Operations', av: 'avr', ini: 'RA',
    jdTitle: 'Director, Front End Operations', jdFile: '/jd/Ryan_Anzalone_JD_FrontEndOps_v3.pdf',
    jdDesc: 'Your full job description outlining role scope, operational boundaries, core responsibilities, minimum performance expectations, and reporting relationships. Effective April 21, 2026.' },
  luis: { name: 'Luis Martinez', role: 'Director, Back End Operations & Provider Oversight', av: 'avl', ini: 'LM',
    jdTitle: 'Director, Back End Operations & Provider Oversight', jdFile: '/jd/Luis_Martinez_JD_BackEndOps_v3.pdf',
    jdDesc: 'Your full job description outlining role scope, operational boundaries, core responsibilities including provider network management, recruitment, letter production, GHL migration, and the veteran help line build. Effective April 21, 2026.' },
};

// ── AUTH ──────────────────────────────────────────────────────────────
function showErr(msg) { const e = document.getElementById('loginErr'); e.textContent = msg; e.style.display = 'block'; document.getElementById('loginOk').style.display = 'none'; }
function showOk(msg) { const e = document.getElementById('loginOk'); e.textContent = msg; e.style.display = 'block'; document.getElementById('loginErr').style.display = 'none'; }
function hideMsg() { document.getElementById('loginErr').style.display = 'none'; document.getElementById('loginOk').style.display = 'none'; }

function showLogin() {
  hideMsg();
  document.getElementById('loginTitle').textContent = 'Sign In';
  document.getElementById('loginForm').style.display = '';
  document.getElementById('forgotForm').style.display = 'none';
  document.getElementById('resetForm').style.display = 'none';
}
function showForgot() {
  hideMsg();
  document.getElementById('loginTitle').textContent = 'Reset Password';
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('forgotForm').style.display = '';
  document.getElementById('resetForm').style.display = 'none';
}
function showReset() {
  hideMsg();
  document.getElementById('loginTitle').textContent = 'Set New Password';
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('forgotForm').style.display = 'none';
  document.getElementById('resetForm').style.display = '';
}

async function doLogin() {
  hideMsg();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPass').value;
  if (!email || !password) { showErr('Please enter your email and password.'); return; }
  const btn = document.getElementById('loginBtn');
  btn.disabled = true; btn.textContent = 'Signing in...';
  try {
    const r = await fetch(\`\${API}/auth/login\`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
    const d = await r.json();
    if (!r.ok) { showErr(d.error || 'Login failed.'); return; }
    authToken = d.token;
    currentUser = d.user;
    localStorage.setItem('xt_token', authToken);
    localStorage.setItem('xt_user', JSON.stringify(currentUser));
    initApp();
  } catch { showErr('Network error. Please try again.'); }
  finally { btn.disabled = false; btn.textContent = 'Sign In'; }
}

async function doForgot() {
  hideMsg();
  const email = document.getElementById('forgotEmail').value.trim();
  if (!email) { showErr('Please enter your email.'); return; }
  await fetch(\`\${API}/auth/forgot\`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
  showOk('If an account exists with that email, a reset link has been sent.');
}

async function doReset() {
  hideMsg();
  const token = new URLSearchParams(location.search).get('token');
  const pass = document.getElementById('resetPass').value;
  const pass2 = document.getElementById('resetPass2').value;
  if (pass.length < 8) { showErr('Password must be at least 8 characters.'); return; }
  if (pass !== pass2) { showErr('Passwords do not match.'); return; }
  const r = await fetch(\`\${API}/auth/reset\`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token, password: pass }) });
  if (r.ok) { showOk('Password updated. You can now sign in.'); setTimeout(showLogin, 2000); }
  else { showErr('Reset link invalid or expired.'); }
}

function doLogout() {
  localStorage.removeItem('xt_token'); localStorage.removeItem('xt_user');
  authToken = null; currentUser = null; DATA = { ryan: null, luis: null };
  document.getElementById('appShell').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  showLogin();
}

// ── API HELPERS ───────────────────────────────────────────────────────
async function api(path, method = 'GET', body = null) {
  const opts = { method, headers: { 'Authorization': \`Bearer \${authToken}\`, 'Content-Type': 'application/json' } };
  if (body) opts.body = JSON.stringify(body);
  const r = await fetch(\`\${API}/\${path}\`, opts);
  if (r.status === 401) { doLogout(); return null; }
  return r.json();
}

function setSave(state) {
  const d = document.getElementById('saveDot');
  if (!d) return;
  d.className = 'save-dot' + (state === 'saving' ? ' saving' : state === 'err' ? ' err' : '');
}

// ── DATA LOADING ──────────────────────────────────────────────────────
async function loadPerson(pid) {
  const d = await api(\`load?person=\${pid}\`);
  if (!d) return;
  DATA[pid] = d;
}

async function initApp() {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('appShell').style.display = 'flex';
  document.getElementById('mainContent').innerHTML = '<div class="loading-screen">Loading your data...</div>';

  const role = currentUser.role;
  appView = role === 'admin' ? 'admin' : role;
  appSub = 'perf';

  // Load data based on role
  if (role === 'admin') {
    await Promise.all([loadPerson('ryan'), loadPerson('luis')]);
  } else {
    await loadPerson(role);
  }

  buildTopBar();
  render();
}

// ── TOP BAR ───────────────────────────────────────────────────────────
function buildTopBar() {
  const role = currentUser.role;
  const vt = document.getElementById('vTabs');
  const badge = document.getElementById('rBadge');

  if (role === 'admin') {
    vt.innerHTML = \`
      <button class="vtab active" onclick="setView('admin')">Admin</button>
      <button class="vtab" onclick="setView('ryan')">Ryan's Portal</button>
      <button class="vtab" onclick="setView('luis')">Luis's Portal</button>\`;
    badge.className = 'rbadge ba';
    badge.textContent = 'Admin · Andrew Wolfgang';
  } else {
    vt.innerHTML = ''; // no tab switching for non-admins
    badge.className = \`rbadge b\${role[0]}\`;
    badge.textContent = currentUser.name;
  }
}

function setView(v) {
  if (currentUser.role !== 'admin') return;
  appView = v; appSub = 'perf';
  document.querySelectorAll('.vtab').forEach((t, i) => t.classList.toggle('active', ['admin','ryan','luis'][i] === v));
  const badge = document.getElementById('rBadge');
  const map = { admin: ['ba','Admin · Andrew Wolfgang'], ryan: ['br','Ryan Anzalone'], luis: ['bl','Luis Martinez'] };
  badge.className = 'rbadge ' + map[v][0]; badge.textContent = map[v][1];
  render();
}

function setSub(s) { appSub = s; render(); }
function setWk(w) { appWeek = Math.max(1, Math.min(WKS, w)); render(); }

// ── GOAL STATUS CYCLE ─────────────────────────────────────────────────
async function cycleStatus(pid, wk, gid) {
  const goal = DATA[pid].goals.find(g => g.id === gid);
  if (!goal) return;
  const c = ['pending','met','partial','missed'];
  goal.status = c[(c.indexOf(goal.status) + 1) % c.length];
  render();
  setSave('saving');
  try {
    await api(\`goals/\${gid}\`, 'PATCH', { status: goal.status });
    setSave('ok');
  } catch { setSave('err'); }
}

async function setRating(pid, wk, r) {
  const wd = getWD(pid, wk);
  wd.rating = wd.rating === r ? null : r;
  render();
  setSave('saving');
  try { await api(\`week/\${pid}/\${wk}\`, 'PATCH', { rating: wd.rating }); setSave('ok'); }
  catch { setSave('err'); }
}

let noteTimers = {};
async function saveNote(pid, wk, gid, field, val) {
  const goal = DATA[pid].goals.find(g => g.id === gid);
  if (goal) goal[field] = val;
  const key = \`\${gid}-\${field}\`;
  clearTimeout(noteTimers[key]);
  setSave('saving');
  noteTimers[key] = setTimeout(async () => {
    try { await api(\`goals/\${gid}\`, 'PATCH', { [field]: val }); setSave('ok'); }
    catch { setSave('err'); }
  }, 1000);
}

async function saveWeekNote(pid, wk, field, val) {
  const wd = getWD(pid, wk); wd[field] = val;
  const key = \`wn-\${pid}-\${wk}-\${field}\`;
  clearTimeout(noteTimers[key]);
  setSave('saving');
  noteTimers[key] = setTimeout(async () => {
    try { await api(\`week/\${pid}/\${wk}\`, 'PATCH', { [field]: val }); setSave('ok'); }
    catch { setSave('err'); }
  }, 1000);
}

async function addGoal(pid, wk) {
  const inp = document.getElementById(\`ai-\${pid}-\${wk}\`);
  if (!inp || !inp.value.trim()) return;
  const text = inp.value.trim();
  const source = currentUser.role === 'admin' ? 'admin' : 'own';
  setSave('saving');
  try {
    const res = await api('goals', 'POST', { targetPerson: pid, week: wk, text, source });
    if (res && res.id) {
      DATA[pid].goals.push({ id: res.id, person: pid, week: wk, text, source, status: 'pending', notes: '', private_note: '' });
      inp.value = '';
      render();
      setSave('ok');
    }
  } catch { setSave('err'); }
}

async function signJD(pid) {
  const n = document.getElementById(\`jd-n-\${pid}\`);
  const c = document.getElementById(\`jd-c-\${pid}\`);
  if (!n || !c) return;
  if (!c.checked || !n.value.trim()) { alert('Please check the acknowledgment and type your full name.'); return; }
  const signedName = n.value.trim();
  setSave('saving');
  try {
    await api('sign/jd', 'POST', { targetPerson: pid, signedName });
    DATA[pid].jdSig = { signed_name: signedName, signed_at: Date.now() };
    setSave('ok'); render();
  } catch { setSave('err'); }
}

async function signAck(pid, wk) {
  const n = document.getElementById(\`ack-n-\${pid}-\${wk}\`);
  const c = document.getElementById(\`ack-c-\${pid}-\${wk}\`);
  if (!n || !c) return;
  if (!c.checked || !n.value.trim()) { alert('Please check the acknowledgment and type your full name.'); return; }
  const signedName = n.value.trim();
  setSave('saving');
  try {
    await api('sign/week', 'POST', { targetPerson: pid, week: wk, signedName });
    if (!DATA[pid].acks) DATA[pid].acks = [];
    DATA[pid].acks.push({ person: pid, week: wk, signed_name: signedName, signed_at: Date.now() });
    setSave('ok'); render();
  } catch { setSave('err'); }
}

// ── HELPERS ───────────────────────────────────────────────────────────
function getWD(pid, wk) {
  if (!DATA[pid].weekData) DATA[pid].weekData = [];
  let wd = DATA[pid].weekData.find(w => w.week === wk);
  if (!wd) { wd = { week: wk, rating: null, week_note: '', private_note: '' }; DATA[pid].weekData.push(wd); }
  return wd;
}
function getAck(pid, wk) {
  return (DATA[pid].acks || []).find(a => a.week == wk);
}
function getGoals(pid, wk) {
  return (DATA[pid].goals || []).filter(g => g.week == wk);
}
function getStats(pid, wk) {
  const gs = getGoals(pid, wk);
  const total = gs.length, met = gs.filter(g=>g.status==='met').length, missed = gs.filter(g=>g.status==='missed').length, partial = gs.filter(g=>g.status==='partial').length;
  return { total, met, missed, partial, pct: total ? Math.round(((met+partial*.5)/total)*100) : 0 };
}
function sc(s){return{met:'smet',partial:'spar',missed:'smis',pending:'spen'}[s]||'spen';}
function sl(s){return{met:'Met',partial:'Partial',missed:'Missed',pending:'Pending'}[s]||'Pending';}
function gc(s){return{met:'gmet',partial:'gpar',missed:'gmis',pending:'gpen'}[s]||'gpen';}
function rpc(r){return{green:'pg',yellow:'py',red:'pred'}[r]||'pno';}
function rl(r){return{green:'On Track',yellow:'Needs Attention',red:'Off Track'}[r]||'—';}
function dc(r){return{green:'dg',yellow:'dy',red:'dr'}[r]||'dn';}
function tagH(src){
  if(src==='recurring')return\`<span class="gtag trec">Recurring</span>\`;
  if(src==='admin')return\`<span class="gtag tadm">Admin</span>\`;
  return\`<span class="gtag town">Self</span>\`;
}

// ── RENDER COMPONENTS ─────────────────────────────────────────────────
function gItem(pid, wk, g, isAdmin) {
  const pn = isAdmin ? \`<div class="pnote"><div class="pnl">Private admin note</div><textarea class="note-ta" placeholder="Not visible to \${pid==='ryan'?'Ryan':'Luis'}..." onchange="saveNote('\${pid}',\${wk},'\${g.id}','private_note',this.value)">\${g.private_note||''}</textarea></div>\` : '';
  return \`<div class="gi \${gc(g.status)}">
    <div class="gtop">
      <button class="gsb \${sc(g.status)}" onclick="cycleStatus('\${pid}',\${wk},'\${g.id}')">\${sl(g.status)}</button>
      <div class="gtx">\${g.text}\${tagH(g.source)}</div>
    </div>
    <div class="gn">
      <div class="fl">Outcome notes</div>
      <textarea class="note-ta" placeholder="Document what happened..." onchange="saveNote('\${pid}',\${wk},'\${g.id}','notes',this.value)">\${g.notes||''}</textarea>
      \${pn}
    </div>
  </div>\`;
}

function wAck(pid, wk, isOwn) {
  if (!isOwn) return '';
  const a = getAck(pid, wk);
  if (a) {
    return \`<div class="wack"><div class="wact">Week \${wk} acknowledgment</div><div class="ackd"><svg width="12" height="12" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6.5" stroke="#4a9e6b"/><path d="M4 7l2 2 4-4" stroke="#4a9e6b" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>Signed by \${a.signed_name} · \${new Date(a.signed_at).toLocaleString()}</div></div>\`;
  }
  return \`<div class="wack">
    <div class="wact">Week \${wk} — please acknowledge before proceeding</div>
    <div class="cbr"><input type="checkbox" id="ack-c-\${pid}-\${wk}"><label for="ack-c-\${pid}-\${wk}">I, <strong>\${PEOPLE[pid].name}</strong>, confirm I have reviewed my Week \${wk} goals, understand my performance expectations, and commit to the deliverables listed above.</label></div>
    <div class="sir"><div class="siw"><div class="sil">Type full name as signature</div><input type="text" class="sii" id="ack-n-\${pid}-\${wk}" placeholder="\${PEOPLE[pid].name}"></div><button class="btn-sm bsl" onclick="signAck('\${pid}',\${wk})">Sign & Submit</button></div>
  </div>\`;
}

function pPanel(pid, wk, isAdmin, isOwn) {
  if (!DATA[pid]) return '<div class="panel"><div class="es">Loading...</div></div>';
  const p = PEOPLE[pid]; const wd = getWD(pid, wk); const st = getStats(pid, wk); const gs = getGoals(pid, wk);
  const rec = gs.filter(g=>g.source==='recurring').length;
  const added = gs.filter(g=>g.source!=='recurring').length;
  const canAdd = isAdmin || isOwn;
  return \`<div class="panel">
    <div class="ph">
      <div class="av \${p.av}">\${p.ini}</div>
      <div><div class="pname">\${p.name}</div><div class="prole">\${p.role}</div></div>
      <div class="or"><div class="rdt \${dc(wd.rating)}"></div><span class="rtext">\${rl(wd.rating)}</span></div>
    </div>
    <div class="cr">
      <div class="mc"><div class="mlab">Goals</div><div class="mv">\${st.total}</div><div class="pbw"><div class="pb" style="width:\${st.pct}%"></div></div></div>
      <div class="mc"><div class="mlab">Met</div><div class="mv vg">\${st.met}</div></div>
      <div class="mc"><div class="mlab">Partial</div><div class="mv vy">\${st.partial}</div></div>
      <div class="mc"><div class="mlab">Missed</div><div class="mv vr">\${st.missed}</div></div>
    </div>
    <div class="rrow">
      <span class="rlab">Week rating:</span>
      <button class="rbn rg \${wd.rating==='green'?'active':''}" onclick="setRating('\${pid}',\${wk},'green')">On Track</button>
      <button class="rbn ry \${wd.rating==='yellow'?'active':''}" onclick="setRating('\${pid}',\${wk},'yellow')">Needs Attention</button>
      <button class="rbn rr \${wd.rating==='red'?'active':''}" onclick="setRating('\${pid}',\${wk},'red')">Off Track</button>
    </div>
    \${wAck(pid, wk, isOwn)}
    <div class="pt"><span>Goals — <span class="ba2">Week \${wk}</span></span><span style="font-size:10px;color:var(--xm)">\${st.pct}% · \${rec} recurring · \${added} added</span></div>
    \${gs.length ? gs.map(g=>gItem(pid,wk,g,isAdmin)).join('') : '<div class="es">No goals set for this week yet.</div>'}
    \${canAdd ? \`<div class="agr"><input class="agr-inp" id="ai-\${pid}-\${wk}" placeholder="\${isAdmin?'Add admin goal for this week...':'Add your own goal...'}"><button class="btn-sm bbl" onclick="addGoal('\${pid}',\${wk})">+ Add Goal</button></div>\` : ''}
    <div class="dv"></div>
    <div class="fl">Weekly summary</div>
    <textarea class="note-ta" style="min-height:52px;margin-bottom:\${isAdmin?'10px':'0'}" placeholder="Overall week summary..." onchange="saveWeekNote('\${pid}',\${wk},'week_note',this.value)">\${wd.week_note||''}</textarea>
    \${isAdmin ? \`<div class="pnote"><div class="pnl">Private admin commentary — week level</div><textarea class="note-ta" placeholder="Executive-level private notes..." onchange="saveWeekNote('\${pid}',\${wk},'private_note',this.value)">\${wd.private_note||''}</textarea></div>\` : ''}
  </div>\`;
}

function jdTab(pid) {
  if (!DATA[pid]) return '<div class="loading-screen">Loading...</div>';
  const p = PEOPLE[pid]; const sig = DATA[pid].jdSig;
  const sigBlock = sig
    ? \`<div style="margin-top:12px"><span class="sgb"><svg width="12" height="12" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6.5" stroke="#4a9e6b"/><path d="M4 7l2 2 4-4" stroke="#4a9e6b" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>Signed by \${sig.signed_name} · \${new Date(sig.signed_at).toLocaleString()}</span></div>\`
    : \`<div class="sb2">
        <div class="sbt">Position acknowledgment — signature required</div>
        <div class="sbs">By signing below, you confirm you have downloaded and reviewed your full Job Description, understand your role scope and performance expectations, and accept the terms of your position effective April 21, 2026.</div>
        <div class="cbr"><input type="checkbox" id="jd-c-\${pid}"><label for="jd-c-\${pid}">I, <strong>\${p.name}</strong>, confirm I have read and understood my Job Description in full and accept the responsibilities of my role as \${p.jdTitle} at Xterra Health LLC, effective April 21, 2026.</label></div>
        <div class="sir"><div class="siw"><div class="sil">Type your full name as signature</div><input type="text" class="sii" id="jd-n-\${pid}" placeholder="\${p.name}"></div><button class="btn-sm bsl" onclick="signJD('\${pid}')">Sign & Submit</button></div>
        <div class="asn">Upon signing, Andrew Wolfgang will be notified at awolfgang@xterrahealth.com and this signature is permanently saved to your record.</div>
      </div>\`;
  return \`<div>
    <div class="sh"><span class="st">Job Description — <span class="ba2">\${p.name}</span></span></div>
    <div class="panel">
      <div class="pt">\${p.jdTitle}</div>
      <div style="font-size:12px;color:var(--xm);line-height:1.7;margin-bottom:16px">\${p.jdDesc}</div>
      <a class="jdb" href="\${p.jdFile}" target="_blank">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="#5bb8e8" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Download Job Description PDF
      </a>
      <div style="font-size:11px;color:var(--xh)">Effective April 21, 2026 · Xterra Health LLC · Confidential</div>
      \${sigBlock}
    </div>
  </div>\`;
}

function histTab(pid) {
  if (!DATA[pid]) return '<div class="es">Loading...</div>';
  const rows = [];
  for (let w = 1; w <= WKS; w++) {
    const st = getStats(pid, w); const wd = getWD(pid, w); const a = getAck(pid, w);
    const has = getGoals(pid,w).some(g=>g.status!=='pending') || wd.rating || wd.week_note;
    if (!has && w > appWeek) continue;
    rows.push(\`<tr>
      <td style="font-weight:500;color:var(--xbl);letter-spacing:1px">Wk \${w}</td>
      <td>\${st.total}</td>
      <td><span class="pill pm">\${st.met}</span></td>
      <td><span class="pill pp">\${st.partial}</span></td>
      <td><span class="pill pmi">\${st.missed}</span></td>
      <td><span class="pill \${rpc(wd.rating)}">\${rl(wd.rating)}</span></td>
      <td><span class="pill \${a?'pm':'pnx'}">\${a?'Signed':'Pending'}</span></td>
      <td style="color:var(--xm);font-size:11px">\${wd.week_note?(wd.week_note.substring(0,46)+(wd.week_note.length>46?'…':'')):'—'}</td>
    </tr>\`);
  }
  if (!rows.length) return '<div class="es">No history yet — outcomes will appear here as weeks are completed.</div>';
  return \`<div class="sx"><table class="ht"><thead><tr><th>Wk</th><th>Goals</th><th>Met</th><th>Partial</th><th>Missed</th><th>Rating</th><th>Ack</th><th>Summary</th></tr></thead><tbody>\${rows.join('')}</tbody></table></div>\`;
}

function renderSTabs(tabs) {
  document.getElementById('sTabs').innerHTML = tabs.map(t=>\`<button class="stab \${appSub===t.id?'active':''}" onclick="setSub('\${t.id}')">\${t.label}</button>\`).join('');
}

function render() {
  const el = document.getElementById('mainContent');
  const isAdmin = currentUser.role === 'admin';
  const wk = appWeek;
  const wnav = \`<div class="wn"><button class="wb" onclick="setWk(\${wk-1})">&#8249;</button><span class="wl">Week \${wk}</span><button class="wb" onclick="setWk(\${wk+1})">&#8250;</button></div>\`;

  if (isAdmin) {
    renderSTabs([{id:'perf',label:'Performance'},{id:'ryan-d',label:'Ryan — Detail'},{id:'luis-d',label:'Luis — Detail'},{id:'hist',label:'History'}]);
    if (appSub==='perf') {
      el.innerHTML = \`<div class="sh"><span class="st">Executive Tracker — <span class="ba2">Admin View</span></span>\${wnav}</div><div class="dgr">\${pPanel('ryan',wk,true,false)}\${pPanel('luis',wk,true,false)}</div>\`;
    } else if (appSub==='ryan-d') {
      el.innerHTML = \`<div class="sh"><span class="st">Ryan Anzalone — <span class="ba2">Full Detail</span></span>\${wnav}</div>\${pPanel('ryan',wk,true,false)}\`;
    } else if (appSub==='luis-d') {
      el.innerHTML = \`<div class="sh"><span class="st">Luis Martinez — <span class="ba2">Full Detail</span></span>\${wnav}</div>\${pPanel('luis',wk,true,false)}\`;
    } else {
      el.innerHTML = \`<div class="sh"><span class="st">Performance History — <span class="ba2">All</span></span></div>
        <div class="panel"><div class="pt">Ryan Anzalone</div>\${histTab('ryan')}</div>
        <div class="panel"><div class="pt">Luis Martinez</div>\${histTab('luis')}</div>\`;
    }
  } else {
    const pid = currentUser.role;
    const p = PEOPLE[pid];
    renderSTabs([{id:'perf',label:'My Performance'},{id:'jd',label:'My Job Description'},{id:'hist',label:'My History'}]);
    if (appSub==='perf') {
      el.innerHTML = \`<div class="sh"><span class="st">My Performance — <span class="ba2">\${p.name}</span></span>\${wnav}</div>\${pPanel(pid,wk,false,true)}\`;
    } else if (appSub==='jd') {
      el.innerHTML = jdTab(pid);
    } else {
      el.innerHTML = \`<div class="sh"><span class="st">My History — <span class="ba2">\${p.name}</span></span></div><div class="panel"><div class="pt">Performance Record</div>\${histTab(pid)}</div>\`;
    }
  }
}

// ── INIT ──────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  // Check for password reset token in URL
  const token = new URLSearchParams(location.search).get('token');
  if (token) { showReset(); return; }

  // Auto-login if token stored
  if (authToken && currentUser) {
    initApp();
  }

  // Enter key on login
  document.getElementById('loginPass').addEventListener('keydown', e => { if (e.key==='Enter') doLogin(); });
  document.getElementById('loginEmail').addEventListener('keydown', e => { if (e.key==='Enter') document.getElementById('loginPass').focus(); });
});
</script>
</body>
</html>
`;

const JWT_SECRET = "XterraHealth2026SecureTrackerKeyForJWTAuthenticationAndSecurity";
const ADMIN_EMAIL = "awolfgang@xterrahealth.com";
const APP_URL = "https://billowing-frog-531e.xterra-health.workers.dev";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/')) {
      return handleAPI(request, env);
    }
    return new Response(HTML, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' }
    });
  }
};

async function handleAPI(request, env) {
  const url = new URL(request.url);
  const path = url.pathname.replace('/api/', '').replace(/\/$/, '');
  const method = request.method;
  const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization',
  };
  if (method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
  
  function json(data, status = 200) {
    return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json', ...CORS } });
  }
  function err(msg, status = 400) { return json({ error: msg }, status); }
  
  async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode(...new Uint8Array(hash)));
  }
  
  async function makeJWT(payload) {
    const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(JWT_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const body = btoa(JSON.stringify({ ...payload, exp: Math.floor(Date.now()/1000) + 604800 }));
    const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(header + '.' + body));
    return header + '.' + body + '.' + btoa(String.fromCharCode(...new Uint8Array(sig)));
  }
  
  async function verifyJWT(token) {
    try {
      const [header, body, sig] = token.split('.');
      const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(JWT_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']);
      const valid = await crypto.subtle.verify('HMAC', key, Uint8Array.from(atob(sig), c => c.charCodeAt(0)), new TextEncoder().encode(header + '.' + body));
      if (!valid) return null;
      const payload = JSON.parse(atob(body));
      if (payload.exp < Math.floor(Date.now()/1000)) return null;
      return payload;
    } catch { return null; }
  }
  
  async function getUser(request) {
    const auth = request.headers.get('Authorization') || '';
    const token = auth.replace('Bearer ', '');
    if (!token) return null;
    return verifyJWT(token);
  }

  async function sendEmail(to, subject, htmlBody) {
    if (!env.RESEND_API_KEY) return false;
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: 'Xterra Tracker <notifications@xterrahealth.com>', to: [to], subject, html: htmlBody })
      });
      return res.ok;
    } catch { return false; }
  }

  function uid() { return crypto.randomUUID(); }

  const PEOPLE = {
    ryan: { name: 'Ryan Anzalone', role: 'Director, Front End Operations' },
    luis: { name: 'Luis Martinez', role: 'Director, Back End Operations & Provider Oversight' },
  };

  if (path === 'auth/login' && method === 'POST') {
    const { email, password } = await request.json();
    if (!email || !password) return err('Missing fields');
    const hash = await hashPassword(password);
    const user = await env.DB.prepare('SELECT id, email, role, name FROM users WHERE email = ? AND password_hash = ?').bind(email.toLowerCase(), hash).first();
    if (!user) return err('Invalid email or password', 401);
    const token = await makeJWT({ sub: user.id, role: user.role, name: user.name, email: user.email });
    return json({ token, user: { id: user.id, role: user.role, name: user.name, email: user.email } });
  }

  if (path === 'auth/forgot' && method === 'POST') {
    const { email } = await request.json();
    if (!email) return err('Missing email');
    const user = await env.DB.prepare('SELECT id, name FROM users WHERE email = ?').bind(email.toLowerCase()).first();
    if (!user) return json({ ok: true });
    const token = uid();
    const expires = Date.now() + 3600000;
    await env.DB.prepare('UPDATE users SET reset_token = ?, reset_expires = ? WHERE id = ?').bind(token, expires, user.id).run();
    const resetUrl = `${APP_URL}?token=${token}`;
    await sendEmail(email, 'Xterra Tracker — Password Reset', `<div style="font-family:Arial,sans-serif;padding:32px"><h2 style="color:#5bb8e8">Xterra Health Performance Tracker</h2><p>Hi ${user.name},</p><p>Click below to reset your password.</p><a href="${resetUrl}" style="display:inline-block;padding:12px 24px;background:#5bb8e8;color:#1a1a1a;text-decoration:none">Reset Password</a></div>`);
    return json({ ok: true });
  }

  if (path === 'auth/reset' && method === 'POST') {
    const { token, password } = await request.json();
    if (!token || !password || password.length < 8) return err('Invalid request');
    const user = await env.DB.prepare('SELECT id FROM users WHERE reset_token = ? AND reset_expires > ?').bind(token, Date.now()).first();
    if (!user) return err('Reset link expired or invalid', 401);
    const hash = await hashPassword(password);
    await env.DB.prepare('UPDATE users SET password_hash = ?, reset_token = NULL, reset_expires = NULL WHERE id = ?').bind(hash, user.id).run();
    return json({ ok: true });
  }

  const user = await getUser(request);
  if (!user) return err('Unauthorized', 401);
  const person = user.role === 'admin' ? null : user.role;

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
    const safeGoals = goals.results.map(g => isAdmin ? g : { ...g, private_note: undefined });
    const safeWeeks = weekData.results.map(w => isAdmin ? w : { ...w, private_note: undefined });
    return json({ goals: safeGoals, weekData: safeWeeks, jdSig, acks: acks.results });
  }

  if (path.startsWith('goals')) {
    const parts = path.split('/');
    if (method === 'GET') {
      const targetPerson = parts[1]; const targetWeek = parseInt(parts[2]);
      if (person && person !== targetPerson) return err('Forbidden', 403);
      const rows = await env.DB.prepare('SELECT * FROM goals WHERE person = ? AND week = ? ORDER BY sort_order ASC, created_at ASC').bind(targetPerson, targetWeek).all();
      return json(rows.results);
    }
    if (method === 'POST') {
      const { targetPerson, week, text, source } = await request.json();
      if (person && person !== targetPerson) return err('Forbidden', 403);
      const id = uid();
      const maxOrder = await env.DB.prepare('SELECT MAX(sort_order) as m FROM goals WHERE person = ? AND week = ?').bind(targetPerson, week).first();
      const order = ((maxOrder?.m) || 0) + 1;
      await env.DB.prepare('INSERT INTO goals (id, person, week, text, source, sort_order) VALUES (?,?,?,?,?,?)').bind(id, targetPerson, week, text, source, order).run();
      return json({ id });
    }
    if (method === 'PATCH') {
      const goalId = parts[1];
      const body = await request.json();
      const goal = await env.DB.prepare('SELECT person FROM goals WHERE id = ?').bind(goalId).first();
      if (!goal) return err('Not found', 404);
      if (person && person !== goal.person) return err('Forbidden', 403);
      const allowed = ['status','notes'];
      if (user.role === 'admin') allowed.push('private_note','text');
      const updates = []; const vals = [];
      for (const k of allowed) { if (k in body) { updates.push(`${k} = ?`); vals.push(body[k]); } }
      if (!updates.length) return err('Nothing to update');
      updates.push('updated_at = unixepoch()');
      vals.push(goalId);
      await env.DB.prepare(`UPDATE goals SET ${updates.join(',')} WHERE id = ?`).bind(...vals).run();
      return json({ ok: true });
    }
  }

  if (path.startsWith('week')) {
    const parts = path.split('/');
    const targetPerson = parts[1]; const targetWeek = parseInt(parts[2]);
    if (person && person !== targetPerson) return err('Forbidden', 403);
    if (method === 'GET') {
      const row = await env.DB.prepare('SELECT * FROM week_data WHERE person = ? AND week = ?').bind(targetPerson, targetWeek).first();
      return json(row || {});
    }
    if (method === 'PATCH') {
      const body = await request.json();
      const allowed = ['rating','week_note'];
      if (user.role === 'admin') allowed.push('private_note');
      const updates = []; const vals = [];
      for (const k of allowed) { if (k in body) { updates.push(`${k} = ?`); vals.push(body[k]); } }
      if (!updates.length) return err('Nothing to update');
      updates.push('updated_at = unixepoch()');
      const existing = await env.DB.prepare('SELECT id FROM week_data WHERE person = ? AND week = ?').bind(targetPerson, targetWeek).first();
      if (existing) {
        vals.push(targetPerson); vals.push(targetWeek);
        await env.DB.prepare(`UPDATE week_data SET ${updates.join(',')} WHERE person = ? AND week = ?`).bind(...vals).run();
      } else {
        const fields = allowed.filter(k => k in body);
        const insertVals = [uid(), targetPerson, targetWeek, ...fields.map(k => body[k])];
        await env.DB.prepare(`INSERT INTO week_data (id, person, week, ${fields.join(',')}) VALUES (?,?,?,${fields.map(()=>'?').join(',')})`).bind(...insertVals).run();
      }
      return json({ ok: true });
    }
  }

  if (path === 'sign/jd' && method === 'POST') {
    const { targetPerson, signedName } = await request.json();
    if (person && person !== targetPerson) return err('Forbidden', 403);
    const existing = await env.DB.prepare('SELECT id FROM jd_signatures WHERE person = ?').bind(targetPerson).first();
    if (existing) return err('Already signed');
    await env.DB.prepare('INSERT INTO jd_signatures (id, person, signed_name, signed_at) VALUES (?,?,?,?)').bind(uid(), targetPerson, signedName, Date.now()).run();
    const p = PEOPLE[targetPerson];
    await sendEmail(ADMIN_EMAIL, `JD Signature Recorded — ${p.name}`, `<div style="font-family:Arial,sans-serif;padding:32px"><h2 style="color:#5bb8e8">Xterra Health Performance Tracker</h2><p>${p.name} signed their Job Description on ${new Date().toLocaleString()}.</p><p>Signed as: <em>${signedName}</em></p></div>`);
    return json({ ok: true });
  }

  if (path === 'sign/week' && method === 'POST') {
    const { targetPerson, week, signedName } = await request.json();
    if (person && person !== targetPerson) return err('Forbidden', 403);
    const existing = await env.DB.prepare('SELECT id FROM week_acks WHERE person = ? AND week = ?').bind(targetPerson, week).first();
    if (existing) return err('Already acknowledged');
    await env.DB.prepare('INSERT INTO week_acks (id, person, week, signed_name, signed_at) VALUES (?,?,?,?,?)').bind(uid(), targetPerson, week, signedName, Date.now()).run();
    const p = PEOPLE[targetPerson];
    await sendEmail(ADMIN_EMAIL, `Week ${week} Goals Acknowledged — ${p.name}`, `<div style="font-family:Arial,sans-serif;padding:32px"><h2 style="color:#5bb8e8">Xterra Health Performance Tracker</h2><p>${p.name} acknowledged Week ${week} goals on ${new Date().toLocaleString()}.</p><p>Signed as: <em>${signedName}</em></p></div>`);
    return json({ ok: true });
  }

  return err('Not found', 404);
}
