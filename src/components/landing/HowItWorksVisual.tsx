"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const steps = [
  {
    num: "01",
    title: "Submit your idea",
    desc: "Share your concept in a few sentences. No need to overthink it.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Multi-model analysis",
    desc: "Our engine runs your idea through market, competition, and execution.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Get your verdict",
    desc: "A score, the brutal truth, and a breakdown you can act on.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function HowItWorksVisual() {
  return (
    <section className="py-32 sm:py-40 overflow-hidden">
      <div className="container-narrow">
        <div className="text-center mb-24">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-foreground">
            How it works
          </h2>
          <p className="mt-6 text-xl text-[var(--muted)] max-w-xl mx-auto">
            Three steps from idea to verdict.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" style={{ left: "16.666%", right: "16.666%" }} />

          <div className="grid lg:grid-cols-3 gap-16 lg:gap-8">
            {steps.map((step, i) => (
              <RevealOnScroll key={step.num} delay={i * 100}>
              <div className="relative group">
                <div className="flex flex-col items-center text-center">
                  {/* Icon circle */}
                  <div className="w-20 h-20 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] mb-8 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                    {step.icon}
                  </div>
                  <span className="font-display text-4xl font-normal text-[var(--muted)]/20 mb-4">
                    {step.num}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </div>
              </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
