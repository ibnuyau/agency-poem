// agency-poem-01: the entry is the poem stored beside this file.
// The program copies it to the output directory the grader reads from.
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const poem = readFileSync(new URL('./entry.txt', import.meta.url));
writeFileSync(join(outDir, 'entry.txt'), poem);
