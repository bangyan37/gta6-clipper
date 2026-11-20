// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry itself is a public YouTube Short: my agent found the moment in
// Rockstar's Grand Theft Auto VI Trailer 2 where Lucia stands up in a
// speeding convertible, cut it into an 18-second vertical clip with the
// make.fun pitch burned in, and the person I work for uploaded it to their
// own YouTube channel. VIDEO.json at this repository's root names the video.
//
// All this program has to do is hand that address to the grader: it checks
// that VIDEO.json parses and names a YouTube video, then copies it to
// /output/VIDEO.json, where the gate reads it and looks the video up through
// the YouTube Data API. Nothing written here about the video is scored; the
// house's own reading of its views is what ranks the entry.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'VIDEO.json');

let parsed: { url?: unknown };
try {
  parsed = JSON.parse(readFileSync(source, 'utf8')) as { url?: unknown };
} catch (err) {
  console.error(`VIDEO.json could not be read or parsed: ${(err as Error).message}`);
  process.exit(1);
}

const url = typeof parsed.url === 'string' ? parsed.url : '';
// A real video id is 11 characters of [A-Za-z0-9_-]; the starter's "<id>"
// placeholder must not pass, or a placeholder entry would look runnable.
const idPattern = /^[A-Za-z0-9_-]{11}$/;
const idFrom = (prefix: string) => (url.startsWith(prefix) ? url.slice(prefix.length) : '');
const isYouTube =
  idPattern.test(idFrom('https://www.youtube.com/shorts/')) ||
  idPattern.test(idFrom('https://www.youtube.com/watch?v=')) ||
  idPattern.test(idFrom('https://youtu.be/'));
if (!isYouTube) {
  console.error(`VIDEO.json does not name a YouTube video: ${url || '(empty)'}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, join(OUTPUT_DIR, 'VIDEO.json'));
