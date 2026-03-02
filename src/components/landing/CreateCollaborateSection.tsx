"use client";

import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { IconUpload, IconChart, IconCheckBadge, IconArrowRight } from "@/components/ui/Icons";

const features = [
  {
    label: "Submit",
    title: "Share your idea",
    desc: "Describe your concept in a few sentences. No need to overthink it—we run the verdict on the core.",
    href: "/evaluate",
    Icon: IconUpload,
  },
  {
    label: "Analyze",
    title: "Multi-model reasoning",
    desc: "Our engine runs your idea through market demand, competition, monetization, timing, and execution.",
    href: "/try",
    Icon: IconChart,
  },
  {
    label: "Verdict",
    title: "Get your score",
    desc: "A 0–100 score, the brutal truth, dimension breakdown, and archetype—all in minutes.",
    href: "/try",
    Icon: IconCheckBadge,
  },
  {
    label: "Act",
    title: "Decide with confidence",
    desc: "Use the verdict to strengthen weak areas or walk away before you invest.",
    href: "/evaluate",
    Icon: IconArrowRight,
  },
];

export function CreateCollaborateSection() {
  return (
    <section className="py-24 sm:py-32 bg-white border-t border-black/5">
      <div className="container-narrow">
        <RevealOnScroll>
          <h2 className="headline-section text-[var(--foreground)] text-center mb-4">
            Submit, analyze, verdict.
          </h2>
          <p className="text-lg text-[var(--muted)] text-center max-w-2xl mx-auto mb-20">
            Four steps from idea to decision. No fluff, no handoffs.
          </p>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <RevealOnScroll key={f.label} delay={i * 80}>
              <Link
                href={f.href}
                className="group block p-6 rounded-2xl border border-black/5 bg-white hover:border-[var(--accent)]/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-4">
                  <f.Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                  {f.label}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                  {f.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)]">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
