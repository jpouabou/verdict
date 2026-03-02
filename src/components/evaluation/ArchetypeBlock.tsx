interface ArchetypeBlockProps {
  archetype: string;
}

export function ArchetypeBlock({ archetype }: ArchetypeBlockProps) {
  return (
    <div className="rounded-xl border border-black/5 bg-[var(--card)] p-5">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-1">
        Archetype
      </h3>
      <p className="font-medium text-[var(--foreground)]">{archetype}</p>
    </div>
  );
}
