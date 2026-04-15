-- Users table
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL CHECK(role IN ('admin','ryan','luis')),
  name TEXT NOT NULL,
  reset_token TEXT,
  reset_expires INTEGER,
  created_at INTEGER DEFAULT (unixepoch())
);

-- Weekly data per person
CREATE TABLE IF NOT EXISTS week_data (
  id TEXT PRIMARY KEY,
  person TEXT NOT NULL CHECK(person IN ('ryan','luis')),
  week INTEGER NOT NULL,
  rating TEXT CHECK(rating IN ('green','yellow','red') OR rating IS NULL),
  week_note TEXT DEFAULT '',
  private_note TEXT DEFAULT '',
  updated_at INTEGER DEFAULT (unixepoch()),
  UNIQUE(person, week)
);

-- Goals
CREATE TABLE IF NOT EXISTS goals (
  id TEXT PRIMARY KEY,
  person TEXT NOT NULL CHECK(person IN ('ryan','luis')),
  week INTEGER NOT NULL,
  text TEXT NOT NULL,
  source TEXT NOT NULL CHECK(source IN ('recurring','admin','own')),
  status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending','met','partial','missed')),
  notes TEXT DEFAULT '',
  private_note TEXT DEFAULT '',
  sort_order INTEGER DEFAULT 0,
  created_at INTEGER DEFAULT (unixepoch()),
  updated_at INTEGER DEFAULT (unixepoch())
);

-- JD signatures
CREATE TABLE IF NOT EXISTS jd_signatures (
  id TEXT PRIMARY KEY,
  person TEXT NOT NULL CHECK(person IN ('ryan','luis')),
  signed_name TEXT NOT NULL,
  signed_at INTEGER NOT NULL,
  UNIQUE(person)
);

-- Weekly acknowledgments
CREATE TABLE IF NOT EXISTS week_acks (
  id TEXT PRIMARY KEY,
  person TEXT NOT NULL CHECK(person IN ('ryan','luis')),
  week INTEGER NOT NULL,
  signed_name TEXT NOT NULL,
  signed_at INTEGER NOT NULL,
  UNIQUE(person, week)
);

-- Alert log
CREATE TABLE IF NOT EXISTS alert_log (
  id TEXT PRIMARY KEY,
  subject TEXT NOT NULL,
  body TEXT NOT NULL,
  sent_at INTEGER DEFAULT (unixepoch()),
  delivered INTEGER DEFAULT 0
);

-- Seed users (passwords are bcrypt hashes — will be replaced on first deploy)
-- Temporary passwords: Admin=Xterra@Admin1, Ryan=Xterra@Ryan1, Luis=Xterra@Luis1
INSERT OR IGNORE INTO users (id, email, password_hash, role, name) VALUES
  ('usr-admin', 'awolfgang@xterrahealth.com', '__HASH_ADMIN__', 'admin', 'Andrew Wolfgang'),
  ('usr-ryan',  'ranzalone@xterrahealth.com', '__HASH_RYAN__',  'ryan',  'Ryan Anzalone'),
  ('usr-luis',  'lmartinez@xterrahealth.com', '__HASH_LUIS__',  'luis',  'Luis Martinez');
