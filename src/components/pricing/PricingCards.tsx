import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const tiers = [
  {
    name: "Single Verdict",
    price: "$49",
    description: "One full verdict for your idea.",
    features: ["Verdict Score (0–100)", "Brutal Truth analysis", "Dimension breakdown", "Archetype classification"],
    cta: "Get your verdict",
    highlighted: true,
  },
  {
    name: "Founder Fit add-on",
    price: "+$29",
    description: "How well you fit this idea.",
    features: ["Founder-idea alignment score", "Skill gap analysis", "Risk profile"],
  },
  {
    name: "Playbook add-on",
    price: "+$39",
    description: "Step-by-step execution guide.",
    features: ["Prioritized action items", "First 90 days roadmap", "Key milestones"],
  },
];

export function PricingCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tiers.map((tier) => (
        <Card
          key={tier.name}
          className={tier.highlighted ? "ring-2 ring-[var(--accent)] border-[var(--accent)]/20" : ""}
        >
          <h3 className="text-lg font-semibold text-[var(--foreground)]">{tier.name}</h3>
          <p className="mt-2 text-2xl font-bold text-[var(--foreground)]">{tier.price}</p>
          <p className="mt-2 text-sm text-[var(--muted)]">{tier.description}</p>
          <ul className="mt-6 space-y-3">
            {tier.features.map((f) => (
              <li key={f} className="text-sm text-[var(--foreground)] flex items-center gap-2">
                <span className="text-[var(--accent)]">—</span>
                {f}
              </li>
            ))}
          </ul>
          {tier.cta && (
            <div className="mt-8">
              <Button as="link" href="/evaluate" variant="primary">
                {tier.cta}
              </Button>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
