"use client";

import {
  IconChart,
  IconCloud,
  IconUser,
  IconBuilding,
  IconStore,
  IconChip,
  IconShoppingCart,
} from "@/components/ui/Icons";

const categories = [
  { label: "SaaS", Icon: IconCloud },
  { label: "Consumer", Icon: IconUser },
  { label: "B2B", Icon: IconBuilding },
  { label: "Marketplaces", Icon: IconStore },
  { label: "AI / ML", Icon: IconChip },
  { label: "E-commerce", Icon: IconShoppingCart },
];

export function TrustedBySection() {
  return (
    <section className="py-12 bg-white border-b border-black/5">
      <div className="container-narrow">
        <p className="flex items-center justify-center gap-2 text-lg font-medium text-[var(--muted)] mb-10">
          <IconChart className="w-5 h-5 text-[var(--accent)]" />
          Idea types we verdict
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
          {categories.map(({ label, Icon }) => (
            <span
              key={label}
              className="flex items-center gap-2 text-[var(--muted)] font-medium hover:text-[var(--foreground)] transition-colors"
            >
              <span className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                <Icon className="w-4 h-4" />
              </span>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
