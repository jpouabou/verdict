interface BrutalTruthCalloutProps {
  text: string;
}

export function BrutalTruthCallout({ text }: BrutalTruthCalloutProps) {
  return (
    <div className="rounded-xl border-l-4 border-[var(--accent)] bg-[var(--accent)]/5 p-5">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2">
        The brutal truth
      </h3>
      <p className="text-sm text-[var(--foreground)] leading-relaxed">{text}</p>
    </div>
  );
}
