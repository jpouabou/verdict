import Link from "next/link";

const dimensions = [
  "Market Demand",
  "Market Ceiling",
  "Competition & Saturation",
  "Monetization Clarity",
  "Timing & Tailwinds",
  "Capital Intensity",
  "Build Complexity",
  "Distribution Difficulty",
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero - distinct from landing: focus on methodology, not pitch */}
      <section className="bg-black py-24 sm:py-32">
        <div className="container-narrow max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-white/50 mb-6">
            About
          </p>
          <h1
            className="text-white font-display font-semibold tracking-tight mb-8"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Rigorous evaluation. No magic.
          </h1>
          <p className="text-xl sm:text-2xl text-white/70 leading-relaxed">
            We built Verdict because founders deserve a proper framework to evaluate ideas,
            not scattered opinions or generic AI advice.
          </p>
        </div>
      </section>

      {/* Methodology - what makes us different */}
      <section className="py-20 sm:py-28 bg-white border-b border-black/5">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)] mb-4">
            Our framework
          </h2>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--foreground)] mb-6 tracking-tight">
            Eight dimensions. One verdict.
          </h3>
          <p className="text-lg text-[var(--muted)] leading-relaxed mb-12">
            Every idea is scored across the same dimensions investors and operators use:
            market demand, ceiling, competition, monetization, timing, capital intensity,
            build complexity, and distribution. Each dimension is weighted and combined
            into a Verdict Score and band.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {dimensions.map((dim) => (
              <li
                key={dim}
                className="flex items-center gap-3 text-[var(--foreground)] font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                {dim}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why not just use AI? */}
      <section className="py-20 sm:py-28 bg-[var(--card)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)] mb-4">
            Why not just use AI?
          </h2>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--foreground)] mb-8 tracking-tight">
            Because one AI gives one opinion. We give you a verdict.
          </h3>
          <div className="space-y-6 text-[var(--muted)] leading-relaxed">
            <p className="text-base">
              Verdict runs your idea through a mixed-model framework: multiple models,
              cross-checked, so you get a calibrated verdict, not a single chatbot&apos;s take.
            </p>
            <p className="text-base">
              Our dimensions and scoring are tuned to signals from real successful products.
              We&apos;ve studied what actually works. And we built this as founders who&apos;ve
              shipped and killed ideas. We know what matters before you invest.
            </p>
            <p className="text-base font-medium text-[var(--foreground)]">
              No prompt engineering. No piecing together threads. One run. One verdict.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)] mb-4">
            Our philosophy
          </h2>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--foreground)] mb-8 tracking-tight">
            AI accelerates failure. We help you pause.
          </h3>
          <div className="space-y-6 text-[var(--muted)] leading-relaxed">
            <p className="text-base">
              The faster you can build, the faster you can waste time on the wrong idea.
              Verdict runs your idea through a calibrated framework in minutes, so you get
              an honest assessment before you invest.
            </p>
            <p className="text-base font-medium text-[var(--foreground)]">
              Our goal: an honest, actionable verdict before you commit.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container-narrow text-center max-w-xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-wider text-[var(--muted)] mb-4">
            Ready?
          </p>
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[var(--foreground)] mb-6">
            Get your verdict in 2 minutes.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/evaluate"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-8 py-4 text-base font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors"
            >
              Get your verdict
            </Link>
            <Link
              href="/try"
              className="inline-flex items-center justify-center rounded-lg border-2 border-black/10 px-8 py-4 text-base font-semibold text-[var(--foreground)] hover:border-black/20 transition-all"
            >
              Try a sample
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
