import type { VerdictBand } from "@/types/evaluation";

interface BadgeProps {
  band: VerdictBand;
  className?: string;
}

const bandStyles: Record<VerdictBand, string> = {
  "Strong Build": "bg-emerald-400/20 text-emerald-700 border-emerald-300/50",
  "Build with Caution": "bg-amber-400/20 text-amber-700 border-amber-300/50",
  "High Risk": "bg-red-400/20 text-red-700 border-red-300/50",
  "Do Not Build": "bg-red-500/20 text-red-800 border-red-400/50",
};

export function Badge({ band, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3.5 py-1 text-xs font-semibold uppercase tracking-wider ${bandStyles[band]} ${className}`.trim()}
    >
      {band}
    </span>
  );
}
