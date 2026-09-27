/** The Preceptor mark, drawn in ink: a collection tube cap seen from above. */
export function Mark({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} aria-hidden="true">
      <circle cx="100" cy="100" r="88" fill="none" stroke="var(--ink)" strokeWidth="18" />
      <circle cx="100" cy="100" r="54" fill="none" stroke="var(--ink)" strokeWidth="8" />
      <circle cx="100" cy="100" r="24" fill="var(--ink)" />
    </svg>
  );
}
