// ai-happy-01 entry: emit one joyful image.
// Copies the bundled entry.png to the output directory, byte for byte,
// so two runs always produce identical output.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));

// Prefer the image that sits beside this file; fall back to the
// working directory in case the program is invoked from elsewhere.
const beside = join(here, "entry.png");
const inCwd = resolve(process.cwd(), "entry.png");
const source = existsSync(beside) ? beside : inCwd;

// Fail loudly rather than writing nothing if the image is missing.
if (!existsSync(source)) {
  throw new Error(`entry image not found (looked beside main.ts and in ${process.cwd()})`);
}

// Output directory: the grader sets MAKEFUN_OUTPUT_DIR locally;
// on the sandbox the writable directory is /output. resolve() also
// anchors a relative MAKEFUN_OUTPUT_DIR to the working directory.
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(outDir, { recursive: true });

copyFileSync(source, join(outDir, "entry.png"));
