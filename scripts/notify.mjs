// Polls ESPN's public scoreboard and publishes goal / kickoff / full-time alerts to ntfy.sh topics.
// Topic for a team: <TOPIC_PREFIX>-t<espnTeamId>. No secrets: topics on ntfy.sh are public-by-name.
// State (previous scores) is kept in state.json, which the workflow caches between runs.
import fs from 'node:fs';
const PREFIX = process.env.TOPIC_PREFIX;
const DRY = process.env.DRY_RUN === '1';
if (!PREFIX || PREFIX.length < 8) { console.error('TOPIC_PREFIX missing'); process.exit(1); }
const STATE = process.env.STATE_FILE || 'state.json';
const NAMES = JSON.parse(fs.readFileSync(new URL('./names-ar.json', import.meta.url), 'utf8'));
const ar = n => NAMES[n] || n;
const prev = fs.existsSync(STATE) ? JSON.parse(fs.readFileSync(STATE, 'utf8')) : null;
const ymd = d => d.toISOString().slice(0, 10).replace(/-/g, '');
const now = new Date(); const yest = new Date(now.getTime() - 86400000);
const events = [];
for (const d of [yest, now]) {
    const base = process.env.ESPN_BASE || 'https://site.api.espn.com/apis/site/v2/sports/soccer';
    const r = await fetch(`${base}/all/scoreboard?dates=${ymd(d)}&limit=400`, { headers: { 'user-agent': 'kora-notify/1.0' } });
    if (!r.ok) { console.error('espn', r.status); process.exit(0); }
    events.push(...((await r.json()).events ?? []));
}
const next = {}; const out = [];
for (const e of events) {
    const c = e.competitions?.[0]; if (!c) continue;
    const h = c.competitors.find(x => x.homeAway === 'home'), a = c.competitors.find(x => x.homeAway === 'away'); if (!h || !a) continue;
    const st = e.status?.type?.state; // pre | in | post
    const hs = parseInt(h.score) || 0, as = parseInt(a.score) || 0;
    next[e.id] = { hs, as, st };
    const o = prev?.[e.id]; if (!prev) continue;
    const line = `${ar(h.team.displayName)} ${hs} - ${as} ${ar(a.team.displayName)}`;
    let msg = null;
    if ((!o || o.st === 'pre') && st === 'in') msg = { t: 'بدأت المباراة', m: `${ar(h.team.displayName)} ضد ${ar(a.team.displayName)}`, tag: 'soccer' };
    else if (o && (hs > o.hs || as > o.as)) msg = { t: 'جووول!', m: line, tag: 'goal_net' };
    else if (o && o.st === 'in' && st === 'post') msg = { t: 'انتهت المباراة', m: line, tag: 'checkered_flag' };
    if (msg) for (const id of [h.team.id, a.team.id]) out.push({ topic: `${PREFIX}-t${id}`, title: msg.t, message: msg.m, tags: [msg.tag] });
}
console.log(`events ${events.length}, alerts ${out.length}, first run: ${!prev}`);
for (const p of out) {
    if (DRY) { console.log('DRY', JSON.stringify(p)); continue; }
    const r = await fetch(process.env.NTFY_URL || 'https://ntfy.sh/', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(p) });
    console.log('publish', p.topic, r.status);
}
fs.writeFileSync(STATE, JSON.stringify(next));
