import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "fix: changed one line at 3 AM, broke three things, fixed two of them, and the third one is a feature now";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
