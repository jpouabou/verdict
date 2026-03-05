"use client";

import Link from "next/link";
import { demoIdeas, demoEvaluations } from "@/lib/mockData";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const features = [
  {
    title: "Cheaper than ChatGPT",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "2-minute verdict",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "8-dimension rubric",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      </svg>
    ),
  },
  {
    title: "Honest, no fluff",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

export function AboutAndFleet() {
  const showcaseIdeas = demoIdeas.slice(0, 3);

  return (
    <section className="py-24 sm:py-32">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <RevealOnScroll>
            <div>
              <h2 className="text-sm font-medium uppercase tracking-widest text-[var(--accent)] mb-4">
                About Us
              </h2>
              <h3 className="headline-section text-[var(--foreground)] mb-6">
                We know how to evaluate ideas. AI accelerates failure. We help you pause.
              </h3>
              <h4 className="text-sm font-semibold text-[var(--foreground)] mb-2 mt-8">
                The problem
              </h4>
              <p className="text-[var(--muted)] leading-relaxed mb-6">
                Every founder has asked &quot;Should I build this?&quot; You&apos;ve probably asked ChatGPT.
                The problem: fragmented answers from Google, Reddit, Twitter, and AI.
              </p>
              <h4 className="text-sm font-semibold text-[var(--foreground)] mb-2">
                The solution
              </h4>
              <p className="text-[var(--muted)] leading-relaxed mb-6">
                Verdict runs your idea through a structured rubric: market demand, competition,
                monetization, timing, execution. What takes hours of research takes 2 minutes.
                Rigorous. Repeatable. Cheaper than an AI subscription.
              </p>
              <h4 className="text-sm font-semibold text-[var(--foreground)] mb-2">
                Why Verdict, not ChatGPT?
              </h4>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                Mixed-model evaluation, calibrated to real success patterns, built by founders for founders.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
              >
                Learn how we&apos;re different
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <p className="text-[var(--muted)] leading-relaxed mt-8">
                Our goal: deliver an honest, actionable verdict before you invest.
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-16">
            <RevealOnScroll delay={100}>
              <div>
                <h2 className="text-lg font-semibold text-[var(--foreground)] mb-4">
                  Explore sample verdicts
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {showcaseIdeas.map((idea) => {
                    const eval_ = demoEvaluations[idea.id];
                    return (
                      <Link
                        key={idea.id}
                        href={`/try?idea=${idea.id}`}
                        className="group block rounded-xl border border-black/5 bg-white p-5 hover:border-[var(--accent)]/30 hover:shadow-md transition-all"
                      >
                        <div className="flex justify-between mb-2">
                          <h4 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)]">
                            {idea.title}
                          </h4>
                          {eval_ && (
                            <span className="font-semibold text-[var(--accent)] tabular-nums">
                              {eval_.verdictScore}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[var(--muted)] line-clamp-2">
                          {idea.oneLiner}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)]">
                          View
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div>
                <h2 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                  Why choose us
                </h2>
                <p className="text-sm text-[var(--muted)] mb-6">
                  One verdict. Two minutes. No more hunting.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {features.map((f) => (
                    <div
                      key={f.title}
                      className="rounded-xl border border-black/5 bg-white p-5 flex gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] shrink-0">
                        {f.icon}
                      </div>
                      <p className="text-sm font-medium text-[var(--foreground)]">{f.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
