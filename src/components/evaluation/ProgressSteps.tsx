interface Step {
  id: string;
  label: string;
  status: "complete" | "current" | "upcoming";
}

interface ProgressStepsProps {
  steps: Step[];
}

export function ProgressSteps({ steps }: ProgressStepsProps) {
  return (
    <nav aria-label="Progress">
      <ol className="flex items-center gap-2 sm:gap-4 flex-wrap">
        {steps.map((step, index) => (
          <li key={step.id} className="flex items-center" aria-current={step.status === "current" ? "step" : undefined}>
            <div
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                step.status === "complete"
                  ? "bg-[var(--accent)] text-white"
                  : step.status === "current"
                    ? "border-2 border-[var(--accent)] text-[var(--accent)]"
                    : "text-[var(--muted)]"
              }`}
            >
              <span className="hidden sm:inline">{index + 1}.</span>
              {step.label}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`mx-1 sm:mx-2 h-0.5 w-4 sm:w-8 flex-shrink-0 rounded ${
                  step.status === "complete" ? "bg-[var(--accent)]" : "bg-black/10"
                }`}
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
