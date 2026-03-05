"use client";

const items = [
  "Should I build this?",
  "ChatGPT",
  "Strong Build",
  "Build with Caution",
  "High Risk",
  "Do Not Build",
  "Verdict Score",
  "Brutal Truth",
  "Dimension Breakdown",
  "Archetype",
  "Market Demand",
  "Monetization",
  "Competition",
  "Distribution",
];

export function TickerBar() {
  const duplicated = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-black py-4">
      <div className="flex animate-ticker gap-12 whitespace-nowrap">
        {duplicated.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-sm font-medium text-white/60"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
