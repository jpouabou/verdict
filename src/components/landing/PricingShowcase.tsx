"use client";

import { PricingCards } from "@/components/pricing/PricingCards";
import { Button } from "@/components/ui/Button";

export function PricingShowcase() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-narrow">
        <div className="text-center mb-20">
          <h2 className="headline-section text-[var(--foreground)] mb-4">
            Simple pricing
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-6">
            Full Verdict from <span className="font-semibold text-[var(--accent)]">$9.99</span> (reg. $14.99). Know in 2 minutes. One-time, no recurring.
          </p>
          <div className="inline-flex items-center gap-6 px-6 py-3 rounded-xl bg-[var(--accent)]/5 border border-[var(--accent)]/20 text-sm">
            <span className="text-[var(--muted)]">ChatGPT Pro: $20/mo</span>
            <span className="text-[var(--muted)]">Claude: $20/mo</span>
            <span className="font-semibold text-[var(--accent)]">
              Verdict: <span className="text-[var(--muted)] line-through font-normal">$14.99</span> $9.99 once
            </span>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mb-16">
          <PricingCards />
        </div>
        <div className="text-center">
          <Button as="link" href="/pricing" variant="ghost" className="text-[var(--accent)] hover:bg-[var(--accent)]/5">
            View full pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
