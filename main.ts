// food-picture-01 entry (Node 22, standard library only).
// The image is entry.png beside this file: a gourmet steak with herb
// butter, as Ryan generated it — a thick-cut steak with a deeply seared
// crust and a glossy pool of sauce, a round pat of herb butter melting
// on top with a rosemary sprig, creamy mashed potatoes, asparagus,
// cherry tomatoes and carrots, on a dark plate in warm light.
// The program copies it to /output/entry.png, byte for byte.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
/** The competition's limit on the picture: 1 MiB. */
const MAX_BYTES = 1_048_576;

// Make sure the output directory exists, then copy the image unchanged,
// so the two grader runs produce byte-identical output. Refuse to hand
// the grader an oversized file instead of silently breaking its limit.
mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(OUTPUT_DIR, 'entry.png'));
if (statSync(join(OUTPUT_DIR, 'entry.png')).size > MAX_BYTES) {
  throw new Error(`entry.png is over the ${MAX_BYTES} byte limit`);
}
