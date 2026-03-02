"use client";

const features = [
  {
    title: "Verdict Score",
    desc: "A 0–100 score with a clear band: Strong Build, Build with Caution, High Risk, or Do Not Build.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Brutal Truth",
    desc: "The unvarnished assessment you need to hear before you commit.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Breakdown",
    desc: "Dimension-by-dimension scores: Market Demand, Competition, Monetization, and more.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: "Archetype",
    desc: "How your idea fits known patterns: Wedge Play, Feature Race, Lifestyle Business.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-32 sm:py-40 overflow-hidden">
      <div className="container-narrow">
        <div className="text-center mb-24">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-foreground">
            What you get
          </h2>
          <p className="mt-6 text-xl text-[var(--muted)] max-w-xl mx-auto">
            A complete assessment, not a generic report.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 transition-all duration-300 hover:shadow-xl hover:border-[var(--accent)]/20"
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-6 group-hover:bg-[var(--accent)]/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
