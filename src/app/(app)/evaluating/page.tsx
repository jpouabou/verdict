"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const stages = [
  "Analyzing market demand…",
  "Evaluating competition…",
  "Running multi-model reasoning…",
  "Computing Verdict Score…",
];

export default function EvaluatingPage() {
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) =>
        prev < stages.length - 1 ? prev + 1 : prev
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[65vh] flex items-center justify-center py-24">
      <div className="container-narrow max-w-lg">
        <Card className="text-center py-14 px-10">
          <h1 className="font-display text-2xl font-normal text-[var(--foreground)] mb-10">
            Evaluating your idea
          </h1>
          <div className="space-y-5">
            {stages.map((stage, i) => (
              <div
                key={stage}
                className={`flex items-center justify-center gap-4 ${
                  i <= currentStage
                    ? "text-[var(--foreground)]"
                    : "text-[var(--muted)]"
                }`}
              >
                {i < currentStage ? (
                  <span className="text-[var(--accent)] font-semibold">—</span>
                ) : (
                  <span className="w-4 h-4 rounded-full border-2 border-current shrink-0" />
                )}
                <span className="text-sm font-medium">{stage}</span>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <Button as="link" href="/results" variant="primary">
              Reveal results
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
