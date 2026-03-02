"use client";

import {
  IconTrendingUp,
  IconUsers,
  IconCurrencyDollar,
  IconClock,
  IconPuzzle,
} from "@/components/ui/Icons";
import type { Dimension } from "@/types/evaluation";

interface DimensionBarsProps {
  dimensions: Dimension[];
}

const DIMENSION_GROUPS: { theme: string; keys: string[]; Icon: React.ComponentType<{ className?: string }> }[] = [
  { theme: "Market", keys: ["market-demand", "market-ceiling"], Icon: IconTrendingUp },
  { theme: "Competition", keys: ["competition"], Icon: IconUsers },
  { theme: "Monetization", keys: ["monetization"], Icon: IconCurrencyDollar },
  { theme: "Timing", keys: ["timing"], Icon: IconClock },
  {
    theme: "Execution",
    keys: ["capital-intensity", "build-complexity", "distribution"],
    Icon: IconPuzzle,
  },
];

function getBarColor(percentage: number): string {
  if (percentage >= 75) return "bg-emerald-500";
  if (percentage >= 50) return "bg-amber-500";
  return "bg-red-500";
}

function DimensionRow({ dimension }: { dimension: Dimension }) {
  const percentage = Math.min(100, (dimension.score / dimension.max) * 100);
  const barColor = getBarColor(percentage);

  return (
    <div className="py-2">
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium text-[var(--foreground)] truncate">{dimension.label}</span>
        <span className="tabular-nums text-[var(--muted)] shrink-0 ml-2">
          {dimension.score}/{dimension.max}
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-black/5 overflow-hidden">
        <div
          className={`h-full rounded-full ${barColor} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={dimension.score}
          aria-valuemin={0}
          aria-valuemax={dimension.max}
          aria-label={`${dimension.label}: ${dimension.score} out of ${dimension.max}`}
        />
      </div>
    </div>
  );
}

export function DimensionBars({ dimensions }: DimensionBarsProps) {
  const dimMap = Object.fromEntries(dimensions.map((d) => [d.key, d]));

  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-6">
        Breakdown
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {DIMENSION_GROUPS.map(({ theme, keys, Icon }) => {
          const groupDims = keys
            .map((k) => dimMap[k])
            .filter(Boolean) as Dimension[];

          if (groupDims.length === 0) return null;

          return (
            <div
              key={theme}
              className="rounded-xl border border-black/5 bg-[var(--card)] p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-[var(--foreground)]">{theme}</h4>
              </div>
              <div className="space-y-1">
                {groupDims.map((dim) => (
                  <DimensionRow key={dim.key} dimension={dim} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
