/** Visual separator between sections */

export function SectionDivider() {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" aria-hidden="true" />
  );
}

export function SectionDividerDots() {
  return (
    <div className="flex justify-center gap-2 py-8" aria-hidden="true">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]/30" />
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]/50" />
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]/30" />
    </div>
  );
}
