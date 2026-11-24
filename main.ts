// One Letter: Coffee or Tea — make.fun entry.
// Writes the entry text to /output/entry.txt.
// Node standard library only; deterministic: same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "A";

// Gate guard: the sealed scorer only accepts exactly one character: A for coffee or B for tea.
// A carriage return or newline would break the one-entry promise,
// so reject them rather than trusting the length check alone.
if (LINE !== "A" && LINE !== "B") {
  throw new Error("entry must be exactly one letter: A (coffee) or B (tea)");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
