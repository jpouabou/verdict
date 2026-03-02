export default function AboutPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="container-narrow max-w-2xl">
        <h1 className="font-display text-4xl sm:text-5xl font-normal tracking-tight text-[var(--foreground)]">
          About Verdict
        </h1>
        <div className="mt-12 space-y-8 text-[var(--muted)] leading-relaxed">
          <p className="text-lg">
            Verdict is a decision engine that delivers verdicts on business ideas
            using a multi-model reasoning approach and a structured rubric.
          </p>
          <p>
            We analyze ideas across dimensions like market demand, competition,
            monetization clarity, timing, capital intensity, build complexity,
            and distribution difficulty. Each dimension is weighted and scored
            to produce a Verdict Score and band.
          </p>
          <p>
            Our goal is to give founders an honest, actionable assessment before
            they invest time and money. We don&apos;t claim proprietary datasets
            or magic—just a rigorous, repeatable framework.
          </p>
        </div>
      </div>
    </div>
  );
}
