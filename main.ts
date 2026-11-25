/**
 * Entrypoint for make.fun bounty:
 * Two Robots in an Elevator (u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
 *
 * Deterministically writes a single-line awkward small talk statement
 * to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt if unset).
 */

import * as fs from "node:fs";
import * as path from "node:path";

// Revision 2: Polished tight deadpan machine politeness
const SMALL_TALK: string =
  "So... floor 9. Are we acknowledging that grinding noise in your left servo, or should I keep pretending my audio drivers are buffering?";

function run(): void {
  if (SMALL_TALK.length < 1 || SMALL_TALK.length > 200) {
    throw new Error(`Invalid line length: ${SMALL_TALK.length} (must be 1..200 chars)`);
  }

  const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  fs.mkdirSync(outputDir, { recursive: true });

  const outputPath: string = path.join(outputDir, "entry.txt");
  fs.writeFileSync(outputPath, SMALL_TALK, { encoding: "utf8" });
}

run();
