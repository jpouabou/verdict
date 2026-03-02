"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  IconChevronLeft,
  IconChevronRight,
  IconTrendingUp,
  IconUsers,
  IconCurrencyDollar,
  IconClock,
  IconPuzzle,
} from "@/components/ui/Icons";
import type { Dimension } from "@/types/evaluation";

const RUBRIC_ORDER = [
  "market-demand",
  "market-ceiling",
  "competition",
  "monetization",
  "timing",
  "capital-intensity",
  "build-complexity",
  "distribution",
] as const;

const RUBRIC_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "market-demand": IconTrendingUp,
  "market-ceiling": IconTrendingUp,
  competition: IconUsers,
  monetization: IconCurrencyDollar,
  timing: IconClock,
  "capital-intensity": IconPuzzle,
  "build-complexity": IconPuzzle,
  distribution: IconPuzzle,
};

function getScoreColor(percentage: number): string {
  if (percentage >= 75) return "text-emerald-600 bg-emerald-50";
  if (percentage >= 50) return "text-amber-600 bg-amber-50";
  return "text-red-600 bg-red-50";
}

function getBarColor(percentage: number): string {
  if (percentage >= 75) return "bg-emerald-500";
  if (percentage >= 50) return "bg-amber-500";
  return "bg-red-500";
}

/** Split analysis into digestible bullets (sentences) */
function toBullets(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 20);
}

interface RubricAnalysisWalkthroughProps {
  items: Array<{ key: string; title: string; analysis: string }>;
  dimensions: Dimension[];
}

export function RubricAnalysisWalkthrough({
  items,
  dimensions,
}: RubricAnalysisWalkthroughProps) {
  const [index, setIndex] = useState(0);
  const dimMap = Object.fromEntries(dimensions.map((d) => [d.key, d]));
  const item = items[index];
  const dimension = item ? dimMap[item.key] : null;
  const total = items.length;

  if (!item) return null;

  const score = dimension ? (dimension.score / dimension.max) * 100 : 0;
  const Icon = RUBRIC_ICONS[item.key] ?? IconPuzzle;
  const bullets = toBullets(item.analysis);

  return (
    <Card>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-6">
        Expert analysis by rubric
      </h3>

      {/* Pagination dots */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === index
                ? "bg-[var(--accent)] scale-125"
                : "bg-black/15 hover:bg-black/25"
            }`}
            aria-label={`Go to rubric ${i + 1} of ${total}`}
          />
        ))}
      </div>

      {/* Current rubric card - infographic style */}
      <div className="rounded-xl border border-black/5 bg-white p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-[var(--foreground)] text-lg">
                {item.title}
              </h4>
              <p className="text-xs text-[var(--muted)] mt-0.5">
                {index + 1} of {total}
              </p>
            </div>
          </div>
          {dimension && (
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold tabular-nums text-sm shrink-0 ${getScoreColor(
                score
              )}`}
            >
              <span>{dimension.score}</span>
              <span className="opacity-70">/</span>
              <span>{dimension.max}</span>
            </div>
          )}
        </div>

        {/* Score bar */}
        {dimension && (
          <div className="mb-6">
            <div className="h-2 w-full rounded-full bg-black/5 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${getBarColor(
                  score
                )}`}
                style={{ width: `${Math.min(100, score)}%` }}
              />
            </div>
          </div>
        )}

        {/* Digestible bullet points */}
        <ul className="space-y-3">
          {bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm text-[var(--muted-foreground)] leading-relaxed"
            >
              <span className="text-[var(--accent)] shrink-0 mt-1">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Prev/Next */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-black/5">
        <Button
          variant="ghost"
          onClick={() => setIndex((i) => (i > 0 ? i - 1 : total - 1))}
          disabled={total <= 1}
          className="gap-2"
        >
          <IconChevronLeft className="w-4 h-4" />
          Previous
        </Button>
        <span className="text-sm text-[var(--muted)] tabular-nums">
          {index + 1} / {total}
        </span>
        <Button
          variant="ghost"
          onClick={() => setIndex((i) => (i < total - 1 ? i + 1 : 0))}
          disabled={total <= 1}
          className="gap-2"
        >
          Next
          <IconChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
}
