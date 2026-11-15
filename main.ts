// agency-poem-01: the entry is the poem stored beside this file.
// The program copies it to the output directory the grader reads from.
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const poem = readFileSync(new URL('./entry.txt', import.meta.url));
// The gate only accepts a UTF-8 poem of 1 to 1000 code points with at least one
// non-whitespace character: check before writing, so a broken entry fails loudly
// here instead of silently shipping a file the grader rejects.
const text = poem.toString('utf8');
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 1000) throw new Error(`entry.txt has ${codePoints} code points, the gate allows 1 to 1000`);
if (text.trim() === '') throw new Error('entry.txt is blank');
writeFileSync(join(outDir, 'entry.txt'), poem);
console.log(`wrote ${codePoints} code points to ${join(outDir, 'entry.txt')}`);
