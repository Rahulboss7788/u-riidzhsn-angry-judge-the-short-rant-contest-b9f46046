import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TEXT =
  "Our office printer only jams on the one page that matters. Ten blank forms? Flawless. My promotion letter? It eats it like a shredder with stage fright, flashes 'PC LOAD LETTER' like that's a diagnosis, then hums smugly while I reprint it a fourth time. I'm convinced it waits for the deadline, then chokes on purpose.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

// Read-back verification: the gate requires 1-400 characters, not only whitespace.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== TEXT) throw new Error("entry.txt does not match the rant text exactly");
if (back.length < 1 || back.length > 400) {
  throw new Error(`entry length ${back.length} is outside the 1-400 character gate`);
}
if (!back.trim()) throw new Error("entry is only whitespace");
console.log(`Wrote ${back.length} characters to /output/entry.txt`);
