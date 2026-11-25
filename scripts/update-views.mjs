// STUDIO SOLA — 포트폴리오 영상 조회수 갱신 (GitHub Actions가 하루 한 번 실행)
// data/portfolio.js 에 있는 유튜브 영상들의 조회수를 YouTube Data API로 받아 data/views.json 에 저장합니다.
// 필요한 것: 저장소 Secret "YT_API_KEY" (YouTube Data API v3 키)
import fs from 'node:fs';
import vm from 'node:vm';

const KEY = process.env.YT_API_KEY;
if (!KEY) { console.error('YT_API_KEY secret is missing'); process.exit(1); }

// read window.PORTFOLIO from the site data file
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync('data/portfolio.js', 'utf8'), ctx);
const data = ctx.window.PORTFOLIO || {};

function ytId(url) {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (/youtu\.be$/.test(u.hostname)) return u.pathname.slice(1).split('/')[0] || null;
    if (u.searchParams.get('v')) return u.searchParams.get('v');
    const m = u.pathname.match(/\/(shorts|embed|live)\/([^/?#]+)/);
    return m ? m[2] : null;
  } catch (e) { return null; }
}
const ids = [...new Set([...(data.channels || []), ...(data.categories || [])]
  .flatMap((it) => (it.videos || []).map((v) => ytId(v.url))).filter(Boolean))];
console.log('videos:', ids.length);

const views = {};
for (let i = 0; i < ids.length; i += 50) {           // the API takes up to 50 ids per call (1 quota unit each call)
  const batch = ids.slice(i, i + 50);
  const res = await fetch('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=' + batch.join(',') + '&key=' + encodeURIComponent(KEY));
  if (!res.ok) { console.error('YouTube API error', res.status, await res.text()); process.exit(1); }
  const j = await res.json();
  for (const it of j.items || []) {
    const n = Number(it.statistics && it.statistics.viewCount);
    if (Number.isFinite(n)) views[it.id] = n;
  }
}

const file = 'data/views.json';
let prev = {};
try { prev = JSON.parse(fs.readFileSync(file, 'utf8')).views || {}; } catch (e) {}
if (JSON.stringify(prev) === JSON.stringify(views)) { console.log('no change'); process.exit(0); }
fs.writeFileSync(file, JSON.stringify({ updated: new Date().toISOString(), views }, null, 2) + '\n');
console.log('updated', Object.keys(views).length, 'videos');
