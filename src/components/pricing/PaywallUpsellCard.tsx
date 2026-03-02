import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface PaywallUpsellCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
}

export function PaywallUpsellCard({ title, price, description, features }: PaywallUpsellCardProps) {
  return (
    <Card className="relative overflow-hidden opacity-75">
      <div className="absolute top-4 right-4">
        <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-[var(--muted)]">
          Locked
        </span>
      </div>
      <h3 className="text-lg font-semibold text-[var(--foreground)] pr-20">{title}</h3>
      <p className="mt-2 text-xl font-bold text-[var(--foreground)]">{price}</p>
      <p className="mt-2 text-sm text-[var(--muted)]">{description}</p>
      <ul className="mt-6 space-y-2">
        {features.map((f) => (
          <li key={f} className="text-sm text-[var(--muted)] flex items-center gap-2">
            <span className="text-[var(--muted-foreground)]">—</span>
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button variant="secondary" disabled>
          Unlock
        </Button>
      </div>
    </Card>
  );
}
