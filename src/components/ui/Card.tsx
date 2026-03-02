import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${className}`.trim()}
    >
      {children}
    </div>
  );
}
