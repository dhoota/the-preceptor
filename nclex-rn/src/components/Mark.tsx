/** The Preceptor mark: concentric rings with a gold centre. */
export function Mark({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} aria-hidden="true">
      <circle cx="100" cy="100" r="88" fill="none" stroke="var(--gold)" strokeWidth="14" />
      <circle cx="100" cy="100" r="56" fill="none" stroke="var(--navy)" strokeWidth="12" />
      <circle cx="100" cy="100" r="22" fill="var(--gold)" />
    </svg>
  );
}
