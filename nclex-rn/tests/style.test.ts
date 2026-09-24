import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { styleProblems } from "@/engine/style";

/**
 * House style lint for everything a person reads: docs, store listing,
 * launch guide and the UI copy in screens. Item strings are linted by the
 * bank gates. No em or en dashes, no semicolons, no smart quotes, no filler,
 * short sentences. And never the phrase "NCLEX Practice Exam".
 */

const root = join(__dirname, "..");
const walk = (dir: string, ext: RegExp): string[] =>
  existsSync(dir) ? readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? walk(join(dir, f), ext) : ext.test(f) ? [join(dir, f)] : [])) : [];

/** Prose from markdown: drop code blocks, inline code, tables and URLs. */
function prose(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]*`/g, "code")
    .replace(/https?:\/\/\S+/g, "url")
    .split("\n")
    .filter((l) => !l.trim().startsWith("|"))
    .join("\n");
}

/** Visible copy from a screen: JSX text and string literals with spaces. */
function uiCopy(src: string): string {
  const jsx = [...src.matchAll(/>\s*([^<>{}=;()]*[A-Za-z][^<>{}=;()]*)\s*</g)].map((m) => m[1].trim());
  const strs = [...src.matchAll(/"([^"\n]* [^"\n]*)"/g)].map((m) => m[1]).filter((s) => /[A-Za-z]{3}/.test(s) && !/^[a-z-]+( [a-z-]+)*$/.test(s));
  return [...jsx, ...strs].join("\n");
}

const docs = [...walk(join(root, "docs"), /\.md$/), ...walk(join(root, "store"), /\.md$/), ...["LAUNCH.md", "README.md"].map((f) => join(root, f)).filter(existsSync)];
const screens = [...walk(join(root, "src", "screens"), /\.tsx$/), ...walk(join(root, "src", "components"), /\.tsx$/), join(root, "src", "App.tsx"), join(root, "src", "lib", "constants.ts")].filter(existsSync);

describe("house style", () => {
  for (const f of docs)
    it(f.replace(root, ""), () => {
      expect(styleProblems(prose(readFileSync(f, "utf8")), { sentenceWords: 60 })).toEqual([]);
    });
  for (const f of screens)
    it(f.replace(root, ""), () => {
      expect(styleProblems(uiCopy(readFileSync(f, "utf8")))).toEqual([]);
    });
  it("never says NCLEX Practice Exam anywhere in the app folder", () => {
    // style.ts holds the banned phrase as its own rule.
    const files = [...walk(join(root, "src"), /\.(ts|tsx|json)$/).filter((f) => !f.endsWith("style.ts")), ...docs, join(root, "index.html"), join(root, "capacitor.config.json")];
    const hits = files.filter((f) => /NCLEX practice exam/i.test(readFileSync(f, "utf8")));
    expect(hits.map((f) => f.replace(root, ""))).toEqual([]);
  });
});
