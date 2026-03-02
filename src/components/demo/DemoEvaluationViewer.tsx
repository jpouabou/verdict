import { Card } from "@/components/ui/Card";
import { ScoreHero } from "@/components/evaluation/ScoreHero";
import { BrutalTruthCallout } from "@/components/evaluation/BrutalTruthCallout";
import { DimensionBars } from "@/components/evaluation/DimensionBars";
import { ArchetypeBlock } from "@/components/evaluation/ArchetypeBlock";
import { Button } from "@/components/ui/Button";
import { RubricAnalysisWalkthrough } from "@/components/demo/RubricAnalysisWalkthrough";
import { rubricAnalysesByIdea } from "@/lib/mockData";
import type { EvaluationResult } from "@/types/evaluation";

const RUBRIC_ORDER = [
  "market-demand",
  "market-ceiling",
  "competition",
  "monetization",
  "timing",
  "capital-intensity",
  "build-complexity",
  "distribution",
] as const;

interface DemoEvaluationViewerProps {
  evaluation: EvaluationResult | null;
  ideaId?: string | null;
}

export function DemoEvaluationViewer({ evaluation, ideaId }: DemoEvaluationViewerProps) {
  if (!evaluation) {
    return (
      <Card className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <p className="text-[var(--muted)]">Select an idea to see its verdict.</p>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      <Card>
        <ScoreHero
          score={evaluation.verdictScore}
          band={evaluation.verdictBand}
          ideaTitle={evaluation.ideaTitle}
        />
      </Card>
      <p className="text-lg text-[var(--foreground)] leading-relaxed">{evaluation.oneLine}</p>
      <BrutalTruthCallout text={evaluation.brutalTruth} />
      <Card>
        <DimensionBars dimensions={evaluation.dimensions} />
      </Card>
      {ideaId && rubricAnalysesByIdea[ideaId] && (
        <RubricAnalysisWalkthrough
          items={RUBRIC_ORDER.flatMap((key) => {
            const item = rubricAnalysesByIdea[ideaId][key];
            return item ? [{ key, title: item.title, analysis: item.analysis }] : [];
          })}
          dimensions={evaluation.dimensions}
        />
      )}
      <ArchetypeBlock archetype={evaluation.archetype} />
      <div className="pt-4">
        <Button as="link" href="/evaluate" variant="primary">
          Get the verdict
        </Button>
      </div>
    </div>
  );
}
