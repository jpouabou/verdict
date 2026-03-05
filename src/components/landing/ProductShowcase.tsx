"use client";

import { EvaluationProductCard } from "@/components/hero/EvaluationProductCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ProductShowcase() {
  return (
    <section className="relative py-32 sm:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--background)]" />
      
      <div className="container-narrow relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-foreground">
              Your idea. Our verdict.
            </h2>
            <p className="mt-6 text-xl text-[var(--muted)] max-w-2xl mx-auto">
              A complete assessment in minutes: score, brutal truth, and breakdown.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <div className="flex justify-center">
            <div className="w-full max-w-lg transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl">
              <EvaluationProductCard />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
