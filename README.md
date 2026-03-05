# Verdict

**The last place ideas go before you build.**

Verdict is a decision engine that evaluates business ideas using a multi-model reasoning approach and a structured rubric. This repository contains the UI/UX skeleton - a runnable Next.js app with mocked data and no backend logic.

## Tech Stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Supabase** (installed/configured placeholder only; no usage yet)

## Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, how it works, try it section, what you get, pricing teaser |
| `/try` | Demo selector + evaluation viewer for 3 pre-evaluated ideas |
| `/evaluate` | Paid evaluation entry: idea form + pricing card + mock checkout |
| `/evaluating` | Loading/progress simulation screen |
| `/results` | Full verdict results page with upsells |
| `/pricing` | Pricing tiers + FAQ |
| `/about` | Product explanation |
| `/legal/terms` | Terms of service (placeholder) |
| `/legal/privacy` | Privacy policy (placeholder) |

## How to Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── (marketing)/     # Landing, about, pricing, legal
│   ├── (app)/           # Try, evaluate, evaluating, results
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/              # Button, Card, Badge, Modal
│   ├── layout/          # AppShell
│   ├── evaluation/      # ScoreHero, DimensionBars, BrutalTruthCallout, etc.
│   ├── demo/            # IdeaPicker, DemoEvaluationViewer
│   ├── pricing/         # PricingCards, PaywallUpsellCard
│   └── evaluate/        # IdeaForm
├── lib/
│   ├── mockData.ts      # demoIdeas, demoEvaluations, sampleUserEvaluation
│   └── supabase.ts      # Placeholder (no usage)
└── types/
    └── evaluation.ts    # EvaluationResult, Dimension, VerdictBand
```

## UI Only

This app is **UI only** - no backend logic, no real API calls, no Supabase auth, no payments, no database reads/writes. All data is mocked and stored in local state. The structure is designed for later wiring of payments, Supabase, and the evaluation pipeline.

## Domain

Product domain: [useverdict.co](https://useverdict.co)
