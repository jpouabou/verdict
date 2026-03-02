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
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Full Verdict from $49. Add Founder Fit or Playbook for deeper insights.
          </p>
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
