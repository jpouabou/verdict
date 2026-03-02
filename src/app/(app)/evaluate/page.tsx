"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ProgressSteps } from "@/components/evaluation/ProgressSteps";
import { IdeaForm } from "@/components/evaluate/IdeaForm";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const steps = [
  { id: "idea", label: "Idea", status: "current" as const },
  { id: "checkout", label: "Checkout", status: "upcoming" as const },
  { id: "results", label: "Results", status: "upcoming" as const },
];

export default function EvaluatePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  const handleContinue = () => {
    if (currentStep === 0) {
      setCurrentStep(1);
    } else if (currentStep === 1) {
      router.push("/evaluating");
    }
  };

  const progressSteps = steps.map((s, i) => ({
    ...s,
    status:
      i < currentStep
        ? ("complete" as const)
        : i === currentStep
          ? ("current" as const)
          : ("upcoming" as const),
  }));

  return (
    <div className="py-20 sm:py-28">
      <div className="container-narrow max-w-2xl">
        <h1 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-[var(--foreground)] mb-12">
          Get your verdict
        </h1>

        <div className="mb-12">
          <ProgressSteps steps={progressSteps} />
        </div>

        {currentStep === 0 && (
          <div className="space-y-10">
            <Card>
              <h2 className="font-display text-xl font-normal text-[var(--foreground)] mb-6">
                Your idea
              </h2>
              <IdeaForm />
            </Card>
            <Card>
              <h2 className="font-display text-xl font-normal text-[var(--foreground)] mb-2">
                Full Verdict — $49
              </h2>
              <p className="text-sm text-[var(--muted)] mb-6">
                One-time verdict. Includes:
              </p>
              <ul className="text-sm text-[var(--foreground)] space-y-2 mb-8">
                <li className="flex gap-2">
                  <span className="text-[var(--accent)]">—</span>
                  Verdict Score & band
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)]">—</span>
                  Brutal Truth analysis
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)]">—</span>
                  Dimension breakdown
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)]">—</span>
                  Archetype classification
                </li>
              </ul>
              <Button onClick={handleContinue} variant="primary">
                Continue to checkout
              </Button>
              <p className="mt-5 text-xs text-[var(--muted)]">
                Payments coming next.
              </p>
            </Card>
          </div>
        )}

        {currentStep === 1 && (
          <Card>
            <h2 className="font-display text-xl font-normal text-[var(--foreground)] mb-4">
              Checkout
            </h2>
            <p className="text-sm text-[var(--muted)] mb-4">
              Full Verdict — $49
            </p>
            <p className="text-xs text-[var(--muted)] mb-8">
              This is a mock checkout. Payments coming next.
            </p>
            <Button onClick={handleContinue} variant="primary">
              Pay & get verdict
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}
