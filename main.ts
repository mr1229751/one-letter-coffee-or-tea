// One Letter: Coffee or Tea — entry program for make.fun.
// Emits one fixed single-letter vote to the output directory.
// Uses only the Node standard library and behaves identically on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LETTER = "A";

function assertEntryIsValid(letter: string): void {
  if (letter !== "A" && letter !== "B") {
    throw new Error("Entry must be exactly one letter: A for coffee or B for tea.");
  }
}

assertEntryIsValid(ENTRY_LETTER);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_LETTER, "utf8");
