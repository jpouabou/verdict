"use client";

import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-narrow text-center">
        <h2 className="headline-section text-[var(--foreground)] mb-6">
          Ready for your verdict?
        </h2>
        <p className="text-xl text-[var(--muted)] max-w-xl mx-auto mb-10">
          Get a complete assessment in minutes. No commitment to try.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/try"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-8 py-4 text-base font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors"
          >
            Try Verdict free
          </Link>
          <Link
            href="/evaluate"
            className="inline-flex items-center justify-center rounded-lg border-2 border-black/10 px-8 py-4 text-base font-semibold text-[var(--foreground)] hover:border-black/20 hover:bg-black/[0.02] transition-all"
          >
            Get the verdict
          </Link>
        </div>
      </div>
    </section>
  );
}
