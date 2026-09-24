/** Small padlock for locked content. */
export function Lock({ label = "Locked" }: { label?: string }) {
  return (
    <svg className="lock" viewBox="0 0 11 13" role="img" aria-label={label}>
      <rect x="0.75" y="5.25" width="9.5" height="7" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.75 5.25V3.5a2.75 2.75 0 0 1 5.5 0v1.75" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
