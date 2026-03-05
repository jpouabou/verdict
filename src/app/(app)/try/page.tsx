"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import { IdeaPicker } from "@/components/demo/IdeaPicker";
import { DemoEvaluationViewer } from "@/components/demo/DemoEvaluationViewer";
import { Card } from "@/components/ui/Card";
import { demoIdeas, demoEvaluations } from "@/lib/mockData";

const VERDICT_STAGES = [
  "Analyzing market demand…",
  "Assessing market ceiling…",
  "Checking competition & saturation…",
  "Running multi-model reasoning…",
  "Computing Verdict Score…",
];

const SIMULATION_DURATION_MS = 4500;
const STAGE_INTERVAL_MS = SIMULATION_DURATION_MS / VERDICT_STAGES.length;

function TryContent() {
  const searchParams = useSearchParams();
  const ideaId = searchParams.get("idea");
  const selectedId =
    ideaId && demoIdeas.some((i) => i.id === ideaId) ? ideaId : null;
  const evaluation = selectedId ? demoEvaluations[selectedId] ?? null : null;

  const [isRunning, setIsRunning] = useState(true);
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    if (!selectedId) return;
    setIsRunning(true);
    setCurrentStage(0);

    const stageInterval = setInterval(() => {
      setCurrentStage((prev) =>
        prev < VERDICT_STAGES.length - 1 ? prev + 1 : prev
      );
    }, STAGE_INTERVAL_MS);

    const doneTimeout = setTimeout(() => setIsRunning(false), SIMULATION_DURATION_MS);

    return () => {
      clearInterval(stageInterval);
      clearTimeout(doneTimeout);
    };
  }, [selectedId]);

  return (
    <div>
      {/* Hero - bold background with idea boxes */}
      <section className="bg-black py-16 sm:py-20">
        <div className="container-narrow max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-white mb-3">
              See a sample verdict
            </h1>
            <p className="text-white/70">
              Pick an idea. See what a proper evaluation looks like, in 2 minutes.
            </p>
          </div>
          <IdeaPicker ideas={demoIdeas} selectedId={selectedId} variant="dark" />
        </div>
      </section>

      {/* Content - light background */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="container-narrow max-w-4xl">
          {/* Verdict area */}
          <div className="min-h-[320px]">
            {!selectedId ? (
              <Card className="py-16 px-8 sm:px-12 text-center">
                <p className="text-lg text-[var(--muted)] mb-2">
                  Choose an idea above to see its verdict.
                </p>
                <p className="text-sm text-[var(--muted-foreground)]">
                  No ChatGPT. No Reddit. One verdict.
                </p>
              </Card>
            ) : isRunning ? (
              <Card className="py-12 px-8 sm:px-12">
                <h2 className="text-base font-semibold text-[var(--foreground)] mb-8 text-center">
                  Running verdict…
                </h2>
                <div className="space-y-4 max-w-sm mx-auto">
                  {VERDICT_STAGES.map((stage, i) => (
                    <div
                      key={stage}
                      className={`flex items-center gap-4 ${
                        i <= currentStage
                          ? "text-[var(--foreground)]"
                          : "text-[var(--muted)]"
                      }`}
                    >
                      {i < currentStage ? (
                        <span className="text-[var(--accent)] shrink-0 font-semibold">•</span>
                      ) : (
                        <span className="w-4 h-4 rounded-full border-2 border-current shrink-0" />
                      )}
                      <span className="text-sm font-medium">{stage}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ) : (
              <DemoEvaluationViewer evaluation={evaluation} ideaId={selectedId} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TryPage() {
  return (
    <Suspense
      fallback={
        <div className="container-narrow py-24 text-[var(--muted)] text-center">
          Loading…
        </div>
      }
    >
      <TryContent />
    </Suspense>
  );
}
