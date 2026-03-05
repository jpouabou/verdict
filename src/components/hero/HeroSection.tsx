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
            className="flex items-center gap-2 text-sm font-medium text-teal-300 mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <IconScale className="w-4 h-4" />
            Stop asking ChatGPT. Get a real verdict.
          </p>
          <div
            className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16 mb-10 animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="lg:flex-1 lg:min-w-0">
              <h1
                className="text-white animate-fade-in font-display font-semibold tracking-tight"
                style={{
                  animationDelay: "0.15s",
                  fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                The last place ideas go before you build.
              </h1>
              <p
                className="text-xl text-white/70 max-w-xl mt-4 leading-relaxed animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                You&apos;ve asked ChatGPT &quot;Should I build this?&quot; We get it. Stop piecing
                together Google, Reddit, and AI. One verdict. Two minutes. Before you invest time or capital.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 mt-6 animate-fade-in"
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
                className="mt-5 text-sm text-white/50 animate-fade-in"
                style={{ animationDelay: "0.35s" }}
              >
                For founders who pause before they build.
              </p>
            </div>
            <div
              className="mt-10 lg:mt-0 lg:flex-shrink-0 lg:w-[380px] xl:w-[420px] lg:translate-x-[20%] animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <p className="text-xs font-medium uppercase tracking-wide text-white/50 mb-3">
                Sample Verdict
              </p>
              <EvaluationProductCard variant="dark" />
            </div>
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
