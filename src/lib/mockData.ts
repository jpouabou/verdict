import type { DemoIdea, EvaluationResult } from "@/types/evaluation";

export const demoIdeas: DemoIdea[] = [
  {
    id: "meal-planner",
    title: "AI-powered meal planner",
    oneLiner: "Personalized weekly meal plans based on dietary preferences and grocery budget.",
    category: "Consumer / Health",
  },
  {
    id: "hr-saas",
    title: "B2B SaaS for HR",
    oneLiner: "All-in-one HR platform for SMBs: payroll, onboarding, performance reviews.",
    category: "B2B / SaaS",
  },
  {
    id: "coffee-sub",
    title: "Local coffee subscription",
    oneLiner: "Curated local roasters delivered weekly. Support neighborhood cafés.",
    category: "Consumer / E-commerce",
  },
];

export const demoEvaluations: Record<string, EvaluationResult> = {
  "meal-planner": {
    ideaTitle: "AI-powered meal planner",
    verdictScore: 62,
    verdictBand: "Build with Caution",
    oneLine: "Strong demand signal, but crowded space. Differentiation on UX and personalization will matter.",
    brutalTruth:
      "Everyone and their mother has tried a meal-planning app. The winners will be those that nail retention through habit loops and reduce decision fatigue-not just recommend recipes.",
    archetype: "Feature Race",
    dimensions: [
      { key: "market-demand", label: "Market Demand", score: 12, max: 15, weightHint: "15" },
      { key: "market-ceiling", label: "Market Ceiling", score: 7, max: 10, weightHint: "10" },
      { key: "competition", label: "Competition & Saturation", score: 6, max: 15, weightHint: "15" },
      { key: "monetization", label: "Monetization Clarity", score: 9, max: 15, weightHint: "15" },
      { key: "timing", label: "Timing & Tailwinds", score: 8, max: 10, weightHint: "10" },
      { key: "capital-intensity", label: "Capital Intensity", score: 7, max: 10, weightHint: "10" },
      { key: "build-complexity", label: "Build Complexity", score: 6, max: 10, weightHint: "10" },
      { key: "distribution", label: "Distribution Difficulty", score: 6, max: 15, weightHint: "15" },
    ],
  },
  "hr-saas": {
    ideaTitle: "B2B SaaS for HR",
    verdictScore: 78,
    verdictBand: "Strong Build",
    oneLine: "Proven category with clear willingness to pay. Execution and sales motion are the main risks.",
    brutalTruth:
      "HR buyers are slow and risk-averse. You need a wedge-one workflow you dominate-before expanding. Generic 'all-in-one' out of the gate rarely wins.",
    archetype: "Wedge Play",
    dimensions: [
      { key: "market-demand", label: "Market Demand", score: 13, max: 15, weightHint: "15" },
      { key: "market-ceiling", label: "Market Ceiling", score: 9, max: 10, weightHint: "10" },
      { key: "competition", label: "Competition & Saturation", score: 10, max: 15, weightHint: "15" },
      { key: "monetization", label: "Monetization Clarity", score: 14, max: 15, weightHint: "15" },
      { key: "timing", label: "Timing & Tailwinds", score: 8, max: 10, weightHint: "10" },
      { key: "capital-intensity", label: "Capital Intensity", score: 8, max: 10, weightHint: "10" },
      { key: "build-complexity", label: "Build Complexity", score: 7, max: 10, weightHint: "10" },
      { key: "distribution", label: "Distribution Difficulty", score: 9, max: 15, weightHint: "15" },
    ],
  },
  "coffee-sub": {
    ideaTitle: "Local coffee subscription",
    verdictScore: 41,
    verdictBand: "High Risk",
    oneLine: "Niche appeal with strong margins, but unit economics and distribution are hard at scale.",
    brutalTruth:
      "Subscription coffee is a logistics play. You're competing with Amazon Fresh and direct roaster D2C. 'Local' is a nice story but doesn't scale without serious ops.",
    archetype: "Lifestyle Business",
    dimensions: [
      { key: "market-demand", label: "Market Demand", score: 8, max: 15, weightHint: "15" },
      { key: "market-ceiling", label: "Market Ceiling", score: 5, max: 10, weightHint: "10" },
      { key: "competition", label: "Competition & Saturation", score: 5, max: 15, weightHint: "15" },
      { key: "monetization", label: "Monetization Clarity", score: 7, max: 15, weightHint: "15" },
      { key: "timing", label: "Timing & Tailwinds", score: 5, max: 10, weightHint: "10" },
      { key: "capital-intensity", label: "Capital Intensity", score: 4, max: 10, weightHint: "10" },
      { key: "build-complexity", label: "Build Complexity", score: 6, max: 10, weightHint: "10" },
      { key: "distribution", label: "Distribution Difficulty", score: 1, max: 15, weightHint: "15" },
    ],
  },
};

/** Idea-specific expert analysis per rubric (simulation; AI-powered in future) */
export const rubricAnalysesByIdea: Record<
  string,
  Record<string, { title: string; analysis: string }>
> = {
  "meal-planner": {
    "market-demand": {
      title: "Market Demand",
      analysis:
        "Strong validated demand. Search volume for meal planning, diet apps, and grocery optimization is consistently high. Consumers actively seek solutions to reduce decision fatigue around food-this is a real, recurring pain. The dietary-preference angle (keto, vegan, allergies) adds urgency. However, many users have tried and churned from existing apps, so demand is proven but fickle. Your 12/15 reflects real pull; the gap is retention, not awareness.",
    },
    "market-ceiling": {
      title: "Market Ceiling",
      analysis:
        "Moderate ceiling. The health and wellness app market is large, but meal planning specifically is a subset with natural limits. Most users won't pay more than $5–15/month. Adjacent expansion (grocery delivery, nutrition coaching) could lift TAM, but you'd be competing in those categories too. Realistic outcome: a solid $10–50M ARR business if you win a segment. Not venture-scale unless you capture a much broader 'food + health' platform position.",
    },
    "competition": {
      title: "Competition & Saturation",
      analysis:
        "Crowded and fragmented. Meal-planning apps are a dime a dozen-Yummly, Mealime, Eat This Much, and dozens of niche players. Many have failed; a few have scaled. Differentiation is the bottleneck: AI personalization helps, but so many are adding it that it's becoming table stakes. Your 6/15 reflects real saturation. Winning requires a sharp wedge-e.g., a specific diet, a specific workflow, or a distribution hook (grocery partnership, employer wellness) that others don't have.",
    },
    "monetization": {
      title: "Monetization Clarity",
      analysis:
        "Clear but contested. Subscription is the obvious model; consumers pay for fitness and diet apps. The grocery-budget angle could support a freemium tier (free plans, paid for advanced features). Challenge: price sensitivity. Users compare you to free alternatives (Pinterest, blogs, ChatGPT). $9.99/month is the ceiling for most. Premium tiers (dietitian access, custom plans) can push ARPU higher. Your 9/15: the path exists, but you'll need to prove conversion and retention.",
    },
    "timing": {
      title: "Timing & Tailwinds",
      analysis:
        "Favorable timing. AI has made personalized meal planning technically feasible at low cost-LLMs can generate plans, handle constraints, and adapt to feedback. The 'health tech' narrative is strong post-pandemic. Grocery e-commerce adoption has normalized delivery and pickup. The risk: AI meal planning is becoming commoditized quickly. ChatGPT and Perplexity can do basic meal planning for free. Your window is now-before AI assistants absorb this use case entirely.",
    },
    "capital-intensity": {
      title: "Capital Intensity",
      analysis:
        "Moderately capital-light. You can build an MVP with off-the-shelf AI APIs and ship without heavy infra. The main costs: user acquisition and content (recipes, nutrition data). No physical inventory, no supply chain. The catch: to win in a crowded space, you may need to spend on brand and retention features (habit loops, social, integrations). Bootstrappable to validation; scaling likely requires funding. Your 7/10: not capital-intensive, but not trivial either.",
    },
    "build-complexity": {
      title: "Build Complexity",
      analysis:
        "Moderate complexity. Core product-AI-generated meal plans with constraints-is buildable with current tools. The hard parts: (1) nutrition accuracy and liability, (2) grocery integration (APIs, partnerships), (3) habit-forming UX that drives retention. Many apps ship a v1 quickly but struggle with the 'stickiness' layer. You'll need strong product and possibly dietitian input for credibility. Your 6/10: achievable, but the bar for 'good enough' is higher than it looks.",
    },
    "distribution": {
      title: "Distribution Difficulty",
      analysis:
        "Tough consumer distribution. App Store and Play Store are crowded; SEO for 'meal planner' is competitive. Paid acquisition (Meta, Google) is expensive and CAC often exceeds LTV for subscription apps. Your best bets: content marketing (recipes, diet guides), partnerships (gyms, employers, insurers), or a viral loop (share plans, invite friends). None are easy. The 'grocery budget' angle could open employer wellness or SNAP-adjacent channels. Your 6/15 reflects real distribution headwind.",
    },
  },
  "hr-saas": {
    "market-demand": {
      title: "Market Demand",
      analysis:
        "Strong, validated demand. SMBs are actively looking for HR tools-payroll, onboarding, compliance are non-negotiable pain points. Search and intent data show consistent pull. HR buyers have budgets and procurement processes; they're used to buying software. The 'all-in-one' promise resonates with SMBs who don't want to juggle multiple vendors. Your 13/15: demand is real and buyers are in-market. The gap is differentiation and trust, not awareness.",
    },
    "market-ceiling": {
      title: "Market Ceiling",
      analysis:
        "Large, proven ceiling. The SMB HR software market is multi-billion and growing. Payroll alone is a massive category; add onboarding, performance, and benefits, and TAM expands. SMBs are underserved relative to enterprise-incumbents like Workday and SAP are overkill. Your 9/10 reflects real upside. The constraint: you're going after a segment (SMB) that has many players (Gusto, Rippling, BambooHR). Winning a wedge (e.g., specific vertical, specific workflow) can still yield $50M+ ARR.",
    },
    "competition": {
      title: "Competition & Saturation",
      analysis:
        "Competitive but winnable. Gusto, Rippling, BambooHR, and others have proven the category. The 'all-in-one' positioning is crowded - you'll be compared to incumbents from day one. The opportunity: incumbents are complex, sales-led, and often overbuilt for true SMBs (1–50 employees). A focused wedge - e.g., onboarding-first, or payroll for a specific vertical - can win before expanding. Your 10/15: competition exists, but there's room for a better wedge. Don't lead with 'all-in-one'; lead with one workflow you dominate.",
    },
    "monetization": {
      title: "Monetization Clarity",
      analysis:
        "Excellent monetization clarity. SMBs pay $5–15/employee/month for HR software; willingness to pay is proven. Pricing is transparent in the category. You can land with a core module (e.g., payroll) and expand with add-ons (onboarding, performance). Your 14/15: this is a known, rational purchase. The main risk is sales efficiency - CAC and time-to-close - not willingness to pay. Land-and-expand is the play.",
    },
    "timing": {
      title: "Timing & Tailwinds",
      analysis:
        "Strong timing. Remote work and distributed teams have increased demand for digital HR tools. Compliance complexity (state laws, labor regs) keeps SMBs needing help. The shift to 'people ops' and employee experience has created budget for modern tools. AI can augment HR workflows (drafting job descriptions, answering policy questions)-tailwind for product. Your 8/10: the market is ready. Execution and sales motion are the variables, not timing.",
    },
    "capital-intensity": {
      title: "Capital Intensity",
      analysis:
        "Moderate capital needs. You can build an MVP and land early customers without huge burn. But scaling in B2B SaaS typically requires sales and marketing spend-SMBs don't self-serve at scale. Payroll has regulatory and compliance overhead that may require expertise or partnerships. Your 8/10: capital-efficient to start, but expect to raise for growth. Unit economics (LTV/CAC) matter more than absolute burn.",
    },
    "build-complexity": {
      title: "Build Complexity",
      analysis:
        "Moderate to high complexity. Payroll is regulated and state-specific; onboarding and performance are more straightforward. Integrating with existing systems (accounting, benefits) adds scope. The 'all-in-one' promise means you're building multiple products. Recommendation: start with one workflow (e.g., onboarding or performance), nail it, then expand. Your 7/10: buildable, but scope creep is the risk. A narrow v1 is the path.",
    },
    "distribution": {
      title: "Distribution Difficulty",
      analysis:
        "Predictable but expensive. B2B distribution for SMB HR is well-understood: outbound sales, partnerships (accountants, PEOs), and some inbound (SEO, content). CAC is known; sales cycles are 2–6 months. The wedge matters: if you own a specific workflow, you can get referrals and expand within accounts. Your 9/15: distribution is hard but not mysterious. The main risk is competing with well-funded incumbents on sales capacity.",
    },
  },
  "coffee-sub": {
    "market-demand": {
      title: "Market Demand",
      analysis:
        "Niche demand. There's a segment of consumers who care about local roasters, freshness, and supporting small businesses. But it's a subset of coffee drinkers-many are happy with grocery-store beans or Starbucks. Search and intent for 'local coffee subscription' are modest. The 'support neighborhood cafés' angle is emotionally appealing but doesn't translate to large, urgent demand. Your 8/15: real interest exists, but it's not mass-market. You're serving enthusiasts.",
    },
    "market-ceiling": {
      title: "Market Ceiling",
      analysis:
        "Limited ceiling. Subscription coffee is a defined category - Trade, Atlas, and direct roaster D2C have shown the model works at modest scale. But 'local' as a differentiator constrains you: you can't scale local without becoming national, and national undermines the local story. Realistic outcome: a lifestyle business or regional player. $1–5M ARR is plausible; $50M+ would require a different thesis (e.g., national curation, not local). Your 5/10: upside is capped by the local premise.",
    },
    "competition": {
      title: "Competition & Saturation",
      analysis:
        "Heavy competition. You're up against Amazon Fresh, Trade, Atlas Coffee Club, and every roaster's own D2C subscription. 'Local' is a positioning, not a moat-roasters can sell direct. Grocery and Amazon have logistics and scale advantages. Your 5/15: the space is contested, and incumbents have distribution and brand. Winning requires a reason to choose you over ordering from a favorite roaster or adding coffee to an existing subscription.",
    },
    "monetization": {
      title: "Monetization Clarity",
      analysis:
        "Moderate clarity. Consumers pay for coffee subscriptions; Trade and others have proven that. Margins can be decent if you're curating rather than roasting. But price sensitivity is real - coffee is a commodity in many minds. Premium positioning ('local,' 'curated') can support higher prices, but you're competing with $15–20/bag options. Your 7/15: people will pay, but ARPU and retention are open questions. Unit economics at scale are the unknown.",
    },
    "timing": {
      title: "Timing & Tailwinds",
      analysis:
        "Mixed timing. Subscription fatigue is a headwind-consumers are cutting recurring charges. 'Local' and 'support small business' resonate post-pandemic, but that narrative may fade. Coffee consumption is stable, not growing dramatically. On the plus side, D2C and subscription are normalized. Your 5/10: no major tailwind, and some headwinds. Timing isn't against you, but it's not lifting you either.",
    },
    "capital-intensity": {
      title: "Capital Intensity",
      analysis:
        "Capital-intensive for logistics. Subscription coffee is a physical product-inventory, fulfillment, shipping. You need warehouse space, packaging, and reliable delivery. Cold-chain or freshness requirements add cost. Unit economics depend on volume; early days will be cash-negative. Your 4/10: this is not a capital-light idea. You're building ops, not just software. Bootstrapping to scale is hard.",
    },
    "build-complexity": {
      title: "Build Complexity",
      analysis:
        "Moderate build, heavy ops. The product (website, subscription management) is straightforward. The complexity is operational: sourcing from multiple roasters, managing inventory, fulfillment, and delivery. Quality control and consistency across roasters are non-trivial. Your 6/10: the tech is manageable; the ops are the real build. Expect to spend more time on supply chain than on product.",
    },
    "distribution": {
      title: "Distribution Difficulty",
      analysis:
        "Severe distribution challenge. You have no built-in audience. Customer acquisition means paid ads, influencers, or partnerships - all expensive for a physical product with thin margins. CAC for subscription coffee is often $50–100+; LTV depends on retention, which is uncertain. Amazon and grocery have existing traffic. Your 1/15: distribution is the critical weakness. 'Local' doesn't help you acquire customers - it's a positioning, not a channel. You'll need a creative, low-CAC acquisition strategy to make this work.",
    },
  },
};

export const sampleUserEvaluation: EvaluationResult = {
  ideaTitle: "AI-powered meal planner",
  verdictScore: 62,
  verdictBand: "Build with Caution",
  oneLine:
    "Strong demand signal, but crowded space. Differentiation on UX and personalization will matter.",
  brutalTruth:
    "Everyone and their mother has tried a meal-planning app. The winners will be those that nail retention through habit loops and reduce decision fatigue-not just recommend recipes.",
  archetype: "Feature Race",
  dimensions: [
    { key: "market-demand", label: "Market Demand", score: 12, max: 15, weightHint: "15" },
    { key: "market-ceiling", label: "Market Ceiling", score: 7, max: 10, weightHint: "10" },
    { key: "competition", label: "Competition & Saturation", score: 6, max: 15, weightHint: "15" },
    { key: "monetization", label: "Monetization Clarity", score: 9, max: 15, weightHint: "15" },
    { key: "timing", label: "Timing & Tailwinds", score: 8, max: 10, weightHint: "10" },
    { key: "capital-intensity", label: "Capital Intensity", score: 7, max: 10, weightHint: "10" },
    { key: "build-complexity", label: "Build Complexity", score: 6, max: 10, weightHint: "10" },
    { key: "distribution", label: "Distribution Difficulty", score: 6, max: 15, weightHint: "15" },
  ],
};
