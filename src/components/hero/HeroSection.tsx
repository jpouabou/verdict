"use client";

import Link from "next/link";
import { TickerBar } from "./TickerBar";
import { EvaluationProductCard } from "./EvaluationProductCard";
import { IconScale } from "@/components/ui/Icons";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Hero */}
      <div className="min-h-[90vh] flex flex-col justify-center pt-24 pb-16">
        <div className="container-narrow px-6">
          <p
            className="flex items-center gap-2 text-sm font-medium text-violet-300 mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <IconScale className="w-4 h-4" />
            Decision engine for founders
          </p>
          <h1
            className="headline-hero text-white mb-6 animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            The last place ideas go before you build.
          </h1>
          <p
            className="text-xl text-white/70 max-w-2xl mb-10 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Stop betting on ideas you shouldn&apos;t build. Verdict delivers your
            verdict in minutes — before you invest time or capital.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              href="/try"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-8 py-4 text-base font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors"
            >
              See a sample Verdict
            </Link>
            <Link
              href="/evaluate"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-white/40 hover:bg-white/5 transition-all"
            >
              Get the verdict
            </Link>
          </div>
          <p
            className="mt-5 text-sm text-white/50 text-center animate-fade-in"
            style={{ animationDelay: "0.35s" }}
          >
            For founders who don&apos;t build blindly.
          </p>
          <div
            className="mt-16 max-w-xl animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <p className="text-xs font-medium uppercase tracking-wide text-white/50 mb-3">
              Sample Verdict
            </p>
            <EvaluationProductCard variant="dark" />
          </div>
        </div>
      </div>

      {/* Ticker - Framer style */}
      <TickerBar />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
