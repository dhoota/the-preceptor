import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Guard rail for the owner's rule: the shipped app never calls a paid API or
 * any server. It fails CI if network code or an AI SDK sneaks in.
 * The only network activity allowed is inside the native RevenueCat SDK.
 */

const root = join(__dirname, "..");

function files(dir: string): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? files(p) : /\.(ts|tsx|js|jsx)$/.test(f) ? [p] : [];
  });
}

const FORBIDDEN = [
  /\bfetch\s*\(/,
  /XMLHttpRequest/,
  /new\s+WebSocket/,
  /EventSource/,
  /navigator\.sendBeacon/,
  /anthropic/i,
  /openai/i,
  /supabase/i,
  /stripe/i,
  /api_key|apiKey\s*:\s*process\.env/i,
];

describe("offline guarantee", () => {
  it("app source contains no network or AI calls", () => {
    const hits: string[] = [];
    for (const f of files(join(root, "src"))) {
      const text = readFileSync(f, "utf8");
      for (const re of FORBIDDEN) if (re.test(text)) hits.push(`${f.replace(root, "")} matches ${re}`);
    }
    expect(hits).toEqual([]);
  });

  it("no AI or backend SDK is a dependency", () => {
    const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
    const deps = Object.keys({ ...pkg.dependencies, ...pkg.devDependencies });
    const bad = deps.filter((d) => /anthropic|openai|langchain|supabase|stripe|firebase|axios|google-cloud|@ai-sdk/i.test(d));
    expect(bad).toEqual([]);
  });

  it("the web layer blocks outbound connections", () => {
    const html = readFileSync(join(root, "index.html"), "utf8");
    expect(html).toContain("connect-src 'self'");
  });
});
