"use client";

interface IdeaFormProps {
  onSubmit?: (data: Record<string, string>) => void;
}

export function IdeaForm({ onSubmit }: IdeaFormProps) {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = {
          title: (form.elements.namedItem("title") as HTMLInputElement)?.value ?? "",
          description: (form.elements.namedItem("description") as HTMLTextAreaElement)?.value ?? "",
          targetCustomer: (form.elements.namedItem("targetCustomer") as HTMLInputElement)?.value ?? "",
          pricingIdea: (form.elements.namedItem("pricingIdea") as HTMLInputElement)?.value ?? "",
        };
        onSubmit?.(data);
      }}
    >
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-[var(--foreground)] mb-2">
          Idea title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="e.g. AI-powered meal planner"
          className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-shadow"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-[var(--foreground)] mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Describe your idea in a few sentences..."
          className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent resize-none transition-shadow"
        />
      </div>
      <div>
        <label htmlFor="targetCustomer" className="block text-sm font-medium text-[var(--foreground)] mb-2">
          Target customer
        </label>
        <input
          id="targetCustomer"
          name="targetCustomer"
          type="text"
          placeholder="e.g. Busy professionals who meal prep"
          className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-shadow"
        />
      </div>
      <div>
        <label htmlFor="pricingIdea" className="block text-sm font-medium text-[var(--foreground)] mb-2">
          Pricing idea
        </label>
        <input
          id="pricingIdea"
          name="pricingIdea"
          type="text"
          placeholder="e.g. $9.99/month subscription"
          className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-shadow"
        />
      </div>
    </form>
  );
}
