"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/Badge";
import type { VerdictBand } from "@/types/evaluation";

interface ScoreHeroProps {
  score: number;
  band: VerdictBand;
  ideaTitle?: string;
}

const ANIMATION_DURATION_MS = 1200;

export function ScoreHero({ score, band, ideaTitle }: ScoreHeroProps) {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    setDisplayScore(0);
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / ANIMATION_DURATION_MS);
      const eased = 1 - Math.pow(1 - progress, 2);
      setDisplayScore(Math.round(eased * score));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDisplayScore(score);
      }
    };

    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [score]);

  return (
    <div className="text-center">
      {ideaTitle && (
        <h2 className="text-sm font-medium text-[var(--muted)] mb-3">{ideaTitle}</h2>
      )}
      <div className="score-animate flex flex-col items-center gap-4">
        <div
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-[var(--accent)]/30 bg-[var(--accent)]/5 flex items-center justify-center"
          aria-label={`Verdict score: ${score} out of 100`}
        >
          <span className="text-4xl sm:text-5xl font-bold tabular-nums text-[var(--accent)]">
            {displayScore}
          </span>
        </div>
        <Badge band={band} />
      </div>
    </div>
  );
}
