"use client";

import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 bg-black">
      <div className="container-narrow text-center">
        <h2
          className="text-white font-display font-semibold tracking-tight mb-6"
          style={{
            fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Ready for your verdict?
        </h2>
        <p className="text-xl text-white/70 max-w-xl mx-auto mb-10">
          Stop piecing together answers. One verdict in 2 minutes. Try free.
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
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-white/40 hover:bg-white/5 transition-all"
          >
            Get the verdict
          </Link>
        </div>
      </div>
    </section>
  );
}
