"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/try", label: "Try" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/evaluate", label: "Get verdict" },
];

const footerLinks = [
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/about", label: "About" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-black/5">
        <nav
          className="container-narrow flex h-16 items-center justify-between gap-4"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="text-lg font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
          >
            Verdict
          </Link>

          <div className="flex items-center gap-6 lg:gap-8">
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/evaluate"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors"
            >
              Get the verdict
            </Link>
            <button
              type="button"
              className="md:hidden p-2 -m-2 text-[var(--muted)] hover:text-[var(--foreground)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-black/5 bg-white py-4">
            <div className="container-narrow flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] py-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-black/5 bg-[var(--card)] py-16">
        <div className="container-narrow">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            <div>
              <Link href="/" className="text-lg font-semibold text-[var(--foreground)] hover:text-[var(--accent)]">
                Verdict
              </Link>
              <p className="mt-3 text-sm text-[var(--muted)] max-w-xs">
                Stop asking ChatGPT. Get a verdict.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">Legal</h3>
                <ul className="space-y-3">
                  {footerLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-[var(--foreground)] hover:text-[var(--accent)] transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">Product</h3>
                <ul className="space-y-3">
                  <li><Link href="/try" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)] transition-colors">Try</Link></li>
                  <li><Link href="/pricing" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)] transition-colors">Pricing</Link></li>
                  <li><Link href="/evaluate" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)] transition-colors">Get verdict</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-black/5">
            <p className="text-xs text-[var(--muted)]">© {new Date().getFullYear()} Verdict. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
