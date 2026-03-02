import { Card } from "@/components/ui/Card";
import { ScoreHero } from "@/components/evaluation/ScoreHero";
import { BrutalTruthCallout } from "@/components/evaluation/BrutalTruthCallout";
import { DimensionBars } from "@/components/evaluation/DimensionBars";
import { ArchetypeBlock } from "@/components/evaluation/ArchetypeBlock";
import { PaywallUpsellCard } from "@/components/pricing/PaywallUpsellCard";
import { sampleUserEvaluation } from "@/lib/mockData";

const guardrails = [
  "Don't ignore weak dimensions—they're usually the failure mode.",
  "The brutal truth is calibrated for founders who want honesty.",
  "Archetype informs strategy; it doesn't replace execution.",
];

export default function ResultsPage() {
  const evaluation = sampleUserEvaluation;

  return (
    <div className="py-20 sm:py-28">
      <div className="container-narrow max-w-3xl">
        <Card className="mb-10">
          <ScoreHero
            score={evaluation.verdictScore}
            band={evaluation.verdictBand}
            ideaTitle={evaluation.ideaTitle}
          />
        </Card>

        <p className="text-lg text-[var(--foreground)] mb-8 leading-relaxed">
          {evaluation.oneLine}
        </p>

        <div className="mb-10">
          <BrutalTruthCallout text={evaluation.brutalTruth} />
        </div>

        <Card className="mb-10">
          <DimensionBars dimensions={evaluation.dimensions} />
        </Card>

        <div className="mb-10">
          <ArchetypeBlock archetype={evaluation.archetype} />
        </div>

        <section className="mb-16">
          <h2 className="font-display text-xl font-normal text-[var(--foreground)] mb-6">
            If you ignore us
          </h2>
          <ul className="space-y-3 text-[var(--muted)] leading-relaxed">
            {guardrails.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-[var(--accent)] font-semibold">—</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-normal text-[var(--foreground)] mb-6">
            Go deeper
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <PaywallUpsellCard
              title="Founder Fit Multiplier"
              price="+$29"
              description="How well you fit this idea."
              features={[
                "Founder-idea alignment score",
                "Skill gap analysis",
                "Risk profile",
              ]}
            />
            <PaywallUpsellCard
              title="Playbook"
              price="+$39"
              description="Step-by-step execution guide."
              features={[
                "Prioritized action items",
                "First 90 days roadmap",
                "Key milestones",
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
