import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

/**
 * GHSA-rvm3-566m-v7fv / CVE-2026-103922 (CVSS 9.3). Capacitor's navigation
 * guard checked only host and scheme, so a frame navigation to
 * /_capacitor_http_interceptor_ could load a remote URL at the app's origin.
 * Fixed in 7.6.9 (7.x line) and 8.5.1 (8.5.x line). @capacitor/android is
 * compiled into the AAB via capacitor.settings.gradle and @capacitor/ios into
 * the IPA via the Podfile, so the resolved version is what ships.
 */
const FIXED: Record<number, [number, number, number]> = { 7: [7, 6, 9], 8: [8, 5, 1] };
const parse = (v: string) => v.split(".").map((n) => parseInt(n, 10)) as [number, number, number];
const atLeast = (v: string) => {
  const [maj, min, pat] = parse(v);
  const fix = FIXED[maj];
  if (!fix) return maj > 8;
  return min > fix[1] || (min === fix[1] && pat >= fix[2]);
};

const lock = JSON.parse(readFileSync(new URL("../package-lock.json", import.meta.url), "utf8")).packages;
const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));

describe("Capacitor is on a release with the GHSA-rvm3-566m-v7fv fix", () => {
  for (const name of ["@capacitor/android", "@capacitor/ios", "@capacitor/core"]) {
    it(`${name} resolves to a fixed version in package-lock.json`, () => {
      const v = lock[`node_modules/${name}`]?.version;
      expect(v, `${name} missing from the lockfile`).toBeTruthy();
      expect(atLeast(v), `${name} ${v} is vulnerable; need >= 7.6.9 (7.x) or >= 8.5.1 (8.5.x)`).toBe(true);
    });
    it(`${name} range in package.json cannot resolve below the fix`, () => {
      const range: string = pkg.dependencies?.[name] ?? pkg.devDependencies?.[name];
      expect(range).toMatch(/^[\^~]?\d+\.\d+\.\d+$/);
      expect(atLeast(range.replace(/^[\^~]/, "")), `${name} range ${range} allows a vulnerable version`).toBe(true);
    });
  }
  it("flags the vulnerable versions", () => {
    expect(atLeast("7.6.8")).toBe(false);
    expect(atLeast("7.5.0")).toBe(false);
    expect(atLeast("8.5.0")).toBe(false);
    expect(atLeast("7.6.9")).toBe(true);
    expect(atLeast("8.5.1")).toBe(true);
  });
});
