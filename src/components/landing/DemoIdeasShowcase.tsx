"use client";

import Link from "next/link";
import { demoIdeas } from "@/lib/mockData";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function DemoIdeasShowcase() {
  return (
    <section className="py-32 sm:py-40 bg-[var(--card)] overflow-hidden">
      <div className="container-narrow">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-foreground">
            Try it free
          </h2>
          <p className="mt-6 text-xl text-[var(--muted)] max-w-2xl mx-auto">
            See what a Verdict looks like. Pick one of these sample verdicts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {demoIdeas.map((idea, i) => (
            <RevealOnScroll key={idea.id} delay={i * 80}>
            <Link
              key={idea.id}
              href={`/try?idea=${idea.id}`}
              className="group block"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-full rounded-3xl border border-[var(--border)] bg-[var(--background)] p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[var(--accent)]/30">
                {/* Accent bar */}
                <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                  {idea.category}
                </span>
                <h3 className="mt-4 font-display text-2xl font-normal text-foreground group-hover:text-[var(--accent)] transition-colors">
                  {idea.title}
                </h3>
                <p className="mt-4 text-[var(--muted)] leading-relaxed line-clamp-2">
                  {idea.oneLiner}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                  View verdict
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
