import { PricingCards } from "@/components/pricing/PricingCards";

const faqs = [
  {
    q: "What does a Full Verdict include?",
    a: "A Verdict Score (0–100), verdict band, one-line interpretation, brutal truth analysis, dimension breakdown, and archetype classification.",
  },
  {
    q: "Can I add-ons later?",
    a: "Yes. Founder Fit and Playbook can be purchased as add-ons after your initial verdict.",
  },
  {
    q: "How long does it take?",
    a: "Typically a few minutes. You'll see progress as each dimension is assessed.",
  },
];

export default function PricingPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h1 className="font-display text-4xl sm:text-5xl font-normal tracking-tight text-[var(--foreground)]">
            Pricing
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Simple, one-time pricing. No subscriptions.
          </p>
        </div>

        <div className="mb-24">
          <PricingCards />
        </div>

        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-normal text-[var(--foreground)] mb-8">
            FAQ
          </h2>
          <dl className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-black/10 pb-8 last:border-0 last:pb-0">
                <dt className="font-semibold text-[var(--foreground)]">{faq.q}</dt>
                <dd className="mt-2 text-[var(--muted)] leading-relaxed">
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
