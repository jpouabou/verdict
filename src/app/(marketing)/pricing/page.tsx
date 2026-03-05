import { PricingCards } from "@/components/pricing/PricingCards";

const faqs = [
  {
    q: "What does a Full Verdict include?",
    a: "A Verdict Score (0–100), verdict band, one-line interpretation, brutal truth analysis, dimension breakdown, and archetype classification. Proper evaluation in about 2 minutes.",
  },
  {
    q: "Can I add add-ons later?",
    a: "Yes. Founder Fit (+$29) and Playbook (+$29) can be purchased after your verdict. Add both for $49 and save $9.",
  },
  {
    q: "How long does it take?",
    a: "About 2 minutes. You'll see progress as each dimension is assessed. No more hunting across Google, Reddit, or ChatGPT.",
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
            One-time pricing. Verdict $9.99 (reg. $14.99). No subscriptions.
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
