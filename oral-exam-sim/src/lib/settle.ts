/**
 * Resolves with the promise's value, or with the fallback if it throws or has
 * not settled within `ms`. Never rejects and never waits longer than `ms`.
 * Use it for anything on the launch path that the app must not wait on.
 */
export function settle<T>(work: Promise<T> | (() => Promise<T>), fallback: T, ms: number): Promise<T> {
  return new Promise<T>((resolve) => {
    let done = false;
    const finish = (v: T) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      resolve(v);
    };
    const timer = setTimeout(() => finish(fallback), ms);
    try {
      const p = typeof work === "function" ? work() : work;
      Promise.resolve(p).then(finish, () => finish(fallback));
    } catch {
      finish(fallback);
    }
  });
}
