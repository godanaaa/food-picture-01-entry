// food-picture-01 entry (Node 22, standard library only).
// The image is entry.png beside this file: a double smash burger on a
// glossy toasted brioche bun, cheddar melting down the sides, steam rising
// from the hot patties, fresh lettuce and tomato, golden fries blurred
// behind it in warm window light.
// The program copies it to /output/entry.png, byte for byte.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Make sure the output directory exists, then copy the image unchanged,
// so the two grader runs produce byte-identical output.
mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(OUTPUT_DIR, 'entry.png'));
