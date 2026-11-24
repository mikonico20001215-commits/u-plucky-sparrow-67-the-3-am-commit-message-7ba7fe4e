// The 3 AM Commit Message: one line — a sleep-deprived dev's 3 AM commit message.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "fix: changed one line at 3 AM, broke three things, fixed two of them, and the third one is a feature now";

if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  console.error("error: entry must be a single line of 1-200 characters");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
