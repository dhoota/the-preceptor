/**
 * A simple Rasch model for the adaptive mock.
 *
 * Item difficulty comes from the writer's 1 to 5 rating, mapped to logits.
 * Nobody has calibrated these items on real candidates. So the estimate is a
 * rough guide, and the app never turns it into a chance of passing.
 *
 * Partial credit items enter as a fraction, earned / max. The estimate is a
 * posterior mode with a wide normal prior (SD 3 logits). The prior only keeps
 * the estimate finite before the first mixed pattern of right and wrong.
 */

export const PRIOR_SD = 3;
export const THETA_LIMIT = 6;

/** Writer rating 1 to 5 to logits: -1.6, -0.8, 0, 0.8, 1.6. */
export const logitOf = (difficulty: number) => (difficulty - 3) * 0.8;

export const prob = (theta: number, b: number) => 1 / (1 + Math.exp(-(theta - b)));

export interface Obs {
  b: number;
  /** Score as a fraction, 0 to 1. */
  x: number;
}

export interface Estimate {
  theta: number;
  se: number;
}

export function estimate(obs: Obs[]): Estimate {
  const v = PRIOR_SD * PRIOR_SD;
  let theta = 0;
  for (let i = 0; i < 100; i++) {
    let g = -theta / v;
    let h = -1 / v;
    for (const o of obs) {
      const p = prob(theta, o.b);
      g += o.x - p;
      h -= p * (1 - p);
    }
    const step = g / h;
    theta = Math.max(-THETA_LIMIT, Math.min(THETA_LIMIT, theta - step));
    if (Math.abs(step) < 1e-9) break;
  }
  let info = 1 / v;
  for (const o of obs) {
    const p = prob(theta, o.b);
    info += p * (1 - p);
  }
  return { theta, se: 1 / Math.sqrt(info) };
}

export type Band = "above" | "near" | "below";

/** Where the 95% interval sits against the passing standard. */
export function band(e: Estimate, standard = 0): Band {
  if (e.theta - 1.96 * e.se > standard) return "above";
  if (e.theta + 1.96 * e.se < standard) return "below";
  return "near";
}

/** Deterministic PRNG. */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hash(...xs: (number | string)[]): number {
  let h = 2166136261;
  for (const ch of xs.join("|")) {
    h ^= ch.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
