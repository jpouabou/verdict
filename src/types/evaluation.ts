export type VerdictBand =
  | "Strong Build"
  | "Build with Caution"
  | "High Risk"
  | "Do Not Build";

export interface Dimension {
  key: string;
  label: string;
  score: number;
  max: number;
  weightHint?: string;
}

export interface EvaluationResult {
  ideaTitle: string;
  verdictScore: number;
  verdictBand: VerdictBand;
  oneLine: string;
  brutalTruth: string;
  archetype: string;
  dimensions: Dimension[];
}

export interface DemoIdea {
  id: string;
  title: string;
  oneLiner: string;
  category: string;
}
