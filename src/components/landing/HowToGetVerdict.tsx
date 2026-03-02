"use client";

import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { IconLightbulb, IconZap, IconCheckBadge } from "@/components/ui/Icons";

const steps = [
  {
    num: "01",
    title: "Choose your idea",
    desc: "Pick from demos or submit your own. No lengthy forms—just the core.",
    href: "/try",
    Icon: IconLightbulb,
  },
  {
    num: "02",
    title: "Get your verdict",
    desc: "Our engine runs your idea through a rigorous decision framework in minutes.",
    href: "/evaluate",
    Icon: IconZap,
  },
  {
    num: "03",
    title: "Act on it",
    desc: "Score, brutal truth, dimension breakdown, archetype—decide with confidence.",
    href: "/results",
    Icon: IconCheckBadge,
  },
];

export function HowToGetVerdict() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-narrow">
        <RevealOnScroll>
          <h2 className="headline-section text-[var(--foreground)] text-center mb-4">
            How to get your verdict
          </h2>
          <p className="text-lg text-[var(--muted)] text-center max-w-xl mx-auto mb-20">
            Three steps from idea to decision. No fluff, no handoffs.
          </p>
        </RevealOnScroll>

        {/* Timeline flow */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div
            className="hidden lg:block absolute top-24 left-[16.666%] right-[16.666%] h-0.5 bg-gradient-to-r from-[var(--accent)]/20 via-[var(--accent)]/40 to-[var(--accent)]/20"
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <RevealOnScroll key={step.num} delay={i * 100}>
                <Link
                  href={step.href}
                  className="group relative block"
                >
                  <div className="relative rounded-2xl border-2 border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[var(--accent)]/30 hover:shadow-xl hover:-translate-y-1">
                    {/* Step icon */}
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-6">
                      <step.Icon className="w-6 h-6" />
                    </div>
                    {/* Step number - large, decorative */}
                    <span
                      className="absolute -top-4 left-8 text-5xl font-bold text-[var(--accent)]/15 select-none"
                      aria-hidden="true"
                    >
                      {step.num}
                    </span>
                    <div className="relative">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                        Step {step.num}
                      </span>
                      <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-[var(--muted)] leading-relaxed">
                        {step.desc}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] group-hover:gap-3 transition-all">
                        {i < steps.length - 1 ? "Next step" : "See results"}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <RevealOnScroll delay={300}>
          <div className="mt-20 text-center">
            <Link
              href="/evaluate"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-10 py-4 text-base font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors shadow-lg shadow-[var(--accent)]/25 hover:shadow-[var(--accent)]/30"
            >
              Get the verdict
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
