import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: "button";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

interface ButtonAsLink extends ButtonBaseProps {
  as: "link";
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]",
  secondary: "border-2 border-black/10 text-[var(--foreground)] hover:border-black/20 hover:bg-black/[0.02]",
  ghost: "text-[var(--foreground)] hover:bg-black/[0.04]",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", children, className = "", disabled = false } = props;

  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  if (props.as === "link") {
    return <Link href={props.href} className={combinedClassName}>{children}</Link>;
  }

  return (
    <button type={props.type ?? "button"} onClick={props.onClick} disabled={disabled} className={combinedClassName}>
      {children}
    </button>
  );
}
