"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ProgressSteps } from "@/components/evaluation/ProgressSteps";
import { IdeaForm } from "@/components/evaluate/IdeaForm";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { IconCheckBadge, IconLightbulb } from "@/components/ui/Icons";

const steps = [
  { id: "idea", label: "Idea", status: "current" as const },
  { id: "checkout", label: "Checkout", status: "upcoming" as const },
  { id: "results", label: "Results", status: "upcoming" as const },
];

const verdictIncludes = [
  "Verdict Score & band",
  "Brutal Truth analysis",
  "Dimension breakdown",
  "Archetype classification",
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
    <div>
      {/* Hero */}
      <section className="bg-black py-16 sm:py-20">
        <div className="container-narrow">
          <h1
            className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-white mb-3"
            style={{ letterSpacing: "-0.02em" }}
          >
            Get your verdict
          </h1>
          <p className="text-white/70 max-w-xl">
            One verdict. Two minutes. Under $10.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="container-narrow max-w-4xl">
          <div className="mb-10">
            <ProgressSteps steps={progressSteps} />
          </div>

          {currentStep === 0 && (
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Form - 3 cols */}
              <div className="lg:col-span-3">
                <Card className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                      <IconLightbulb className="w-5 h-5" />
                    </div>
                    <h2 className="font-display text-xl font-normal text-[var(--foreground)]">
                      Your idea
                    </h2>
                  </div>
                  <IdeaForm />
                </Card>
              </div>

              {/* Pricing card - 2 cols */}
              <div className="lg:col-span-2">
                <Card className="p-8 border-2 border-[var(--accent)]/20 bg-[var(--accent)]/[0.02] h-fit">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)]">
                      <IconCheckBadge className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-normal text-[var(--foreground)]">
                        Full Verdict
                      </h2>
                      <p className="text-2xl font-bold text-[var(--accent)]">
                        <span className="text-lg font-normal text-[var(--muted)] line-through mr-2">$14.99</span>
                        $9.99
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--muted)] mb-6">
                    One-time. Under $10.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {verdictIncludes.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-[var(--foreground)]">
                        <span className="w-5 h-5 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] text-xs font-semibold shrink-0">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button onClick={handleContinue} variant="primary" className="w-full">
                    Continue to checkout
                  </Button>
                  <p className="mt-4 text-xs text-[var(--muted)] text-center">
                    Payments coming next.
                  </p>
                </Card>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="max-w-xl">
              <Card className="p-8">
                <h2 className="font-display text-xl font-normal text-[var(--foreground)] mb-2">
                  Checkout
                </h2>
                <p className="text-2xl font-bold text-[var(--accent)] mb-2">
                  Full Verdict - <span className="line-through text-[var(--muted)] font-normal text-lg">$14.99</span> $9.99
                </p>
                <p className="text-sm text-[var(--muted)] mb-8">
                  This is a mock checkout. Payments coming next.
                </p>
                <Button onClick={handleContinue} variant="primary" className="w-full">
                  Pay & get verdict
                </Button>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
