"use client";

import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const beforeItems = [
  { label: "Google", desc: "Scattered threads" },
  { label: "Reddit", desc: "Mixed opinions" },
  { label: "Twitter", desc: "Hot takes" },
  { label: "ChatGPT", desc: "Generic advice" },
];

export function ProblemBlock() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-black/5">
      <div className="container-narrow">
        <RevealOnScroll>
          <h2 className="headline-section text-[var(--foreground)] text-center mb-4">
            Sound familiar?
          </h2>
          <p className="text-lg text-[var(--muted)] text-center max-w-2xl mx-auto mb-16">
            You&apos;ve asked ChatGPT &quot;Should I build this?&quot; Then pieced together
            answers from Google, Reddit, Twitter. Fragmented. Time-consuming. Unreliable.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          <RevealOnScroll delay={100}>
            <div className="rounded-2xl border-2 border-black/10 bg-[var(--card)] p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-black/15 hover:shadow-lg">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)] mb-6">
                Before
              </h3>
              <ul className="space-y-4">
                {beforeItems.map((item) => (
                  <li key={item.label} className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-[var(--muted)] text-sm font-medium shrink-0">
                      ?
                    </span>
                    <div>
                      <span className="font-medium text-[var(--foreground)]">{item.label}</span>
                      <span className="text-[var(--muted)] text-sm ml-2">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-[var(--muted)]">
                Hours of hunting. No clear answer.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <div className="rounded-2xl border-2 border-[var(--accent)]/30 bg-[var(--accent)]/5 p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:shadow-lg">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)] mb-6">
                With Verdict
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] text-sm font-semibold shrink-0">
                    1
                  </span>
                  <span className="font-medium text-[var(--foreground)]">One verdict</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] text-sm font-semibold shrink-0">
                    2
                  </span>
                  <span className="font-medium text-[var(--foreground)]">Two minutes</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] text-sm font-semibold shrink-0">
                    3
                  </span>
                  <span className="font-medium text-[var(--foreground)]">Proper evaluation</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-[var(--foreground)] font-medium">
                Cheaper than a ChatGPT subscription.
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Multi-model evaluation, not one AI opinion.
              </p>
              <Link
                href="/evaluate"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
              >
                Get your verdict
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
