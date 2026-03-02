"use client";

import Link from "next/link";
import { IconTrendingUp, IconCurrencyDollar, IconUsers, IconGlobe } from "@/components/ui/Icons";

const sampleDimensions = [
  { label: "Market Demand", score: 13, max: 15, Icon: IconTrendingUp },
  { label: "Monetization", score: 14, max: 15, Icon: IconCurrencyDollar },
  { label: "Competition", score: 10, max: 15, Icon: IconUsers },
  { label: "Distribution", score: 9, max: 15, Icon: IconGlobe },
];

interface EvaluationProductCardProps {
  variant?: "dark" | "light";
}

export function EvaluationProductCard({ variant = "light" }: EvaluationProductCardProps) {
  const isDark = variant === "dark";

  return (
    <div className="relative">
      {/* Glow */}
      {isDark ? (
        <div className="absolute -inset-4 bg-violet-300/20 rounded-3xl blur-2xl" />
      ) : (
        <div className="absolute -inset-8 bg-gradient-to-b from-[var(--accent)]/10 via-transparent to-transparent rounded-3xl blur-3xl" />
      )}
      
      {/* Card */}
      <div
        className={`relative rounded-2xl p-8 sm:p-10 shadow-2xl ${
          isDark
            ? "border border-white/10 bg-zinc-900/80 backdrop-blur-xl"
            : "border border-[var(--border)] bg-[var(--card)]"
        }`}
      >
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <p
              className={`text-xs font-medium uppercase tracking-widest mb-1 ${
                isDark ? "text-white/50" : "text-[var(--muted)]"
              }`}
            >
              B2B SaaS for HR
            </p>
            <h3
              className={`font-display text-2xl ${isDark ? "text-white" : "text-[var(--foreground)]"}`}
            >
              Strong Build
            </h3>
          </div>
          <div className="font-display text-5xl font-normal tabular-nums text-violet-300">
            78
          </div>
        </div>
        
        <p
          className={`text-sm leading-relaxed mb-8 ${
            isDark ? "text-white/70" : "text-[var(--muted)]"
          }`}
        >
          Proven category with clear willingness to pay. Execution and sales
          motion are the main risks.
        </p>

        <div className="space-y-4">
          {sampleDimensions.map((dim) => (
            <div key={dim.label} className="flex items-center gap-4">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  isDark ? "bg-white/5 text-violet-300" : "bg-[var(--accent)]/10 text-[var(--accent)]"
                }`}
              >
                <dim.Icon className="w-4 h-4" />
              </div>
              <span
                className={`text-xs w-24 shrink-0 ${
                  isDark ? "text-white/50" : "text-[var(--muted)]"
                }`}
              >
                {dim.label}
              </span>
              <div
                className={`flex-1 h-2 rounded-full overflow-hidden ${
                  isDark ? "bg-white/10" : "bg-[var(--border)]"
                }`}
              >
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    isDark ? "bg-violet-300" : "bg-[var(--accent)]"
                  }`}
                  style={{ width: `${(dim.score / dim.max) * 100}%` }}
                />
              </div>
              <span
                className={`text-xs tabular-nums w-8 text-right ${
                  isDark ? "text-white/60" : "text-[var(--muted)]"
                }`}
              >
                {dim.score}/{dim.max}
              </span>
            </div>
          ))}
        </div>

        <Link
          href="/try"
          className={`mt-8 inline-flex items-center gap-2 text-sm font-medium transition-colors ${
            isDark
              ? "text-violet-300 hover:text-violet-200"
              : "text-[var(--accent)] hover:text-[var(--accent-hover)]"
          }`}
        >
          See full verdict
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
