"use client";

import Link from "next/link";
import type { DemoIdea } from "@/types/evaluation";

interface IdeaPickerProps {
  ideas: DemoIdea[];
  selectedId: string | null;
  variant?: "light" | "dark";
}

export function IdeaPicker({ ideas, selectedId, variant = "light" }: IdeaPickerProps) {
  const isDark = variant === "dark";

  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {ideas.map((idea, index) => {
        const isSelected = selectedId === idea.id;

        return (
          <Link key={idea.id} href={`/try?idea=${idea.id}`}>
            <div
              className={`relative rounded-xl border-2 p-5 transition-all ${
                isDark
                  ? isSelected
                    ? "border-[var(--accent)] bg-white/10 shadow-lg"
                    : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]"
                  : isSelected
                    ? "border-[var(--accent)] bg-[var(--accent)]/5 shadow-md"
                    : "border-black/5 bg-white hover:border-[var(--accent)]/20 hover:shadow-sm"
              }`}
            >
              <span
                className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-semibold mb-3 ${
                  isDark
                    ? "bg-white/10 text-white/80"
                    : "bg-[var(--accent)]/10 text-[var(--accent)]"
                }`}
              >
                {index + 1}
              </span>
              <h3
                className={`font-semibold ${isDark ? "text-white" : "text-[var(--foreground)]"}`}
              >
                {idea.title}
              </h3>
              <p
                className={`mt-2 text-sm line-clamp-2 leading-relaxed ${
                  isDark ? "text-white/70" : "text-[var(--muted)]"
                }`}
              >
                {idea.oneLiner}
              </p>
              <span
                className={`mt-3 inline-block text-xs font-medium uppercase tracking-wider ${
                  isDark ? "text-white/50" : "text-[var(--muted-foreground)]"
                }`}
              >
                {idea.category}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
