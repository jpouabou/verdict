import { HeroSection } from "@/components/hero/HeroSection";
import { ProblemBlock } from "@/components/landing/ProblemBlock";
import { AboutAndFleet } from "@/components/landing/AboutAndFleet";
import { HowToGetVerdict } from "@/components/landing/HowToGetVerdict";
import { PricingShowcase } from "@/components/landing/PricingShowcase";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { SectionDivider, SectionDividerDots } from "@/components/landing/SectionDivider";

export default function LandingPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ProblemBlock />
      <SectionDividerDots />
      <HowToGetVerdict />
      <div className="bg-[#f5f5f5]">
        <SectionDivider />
        <AboutAndFleet />
      </div>
      <div className="bg-white">
        <SectionDivider />
        <PricingShowcase />
      </div>
      <div className="bg-[#f5f5f5]">
        <SectionDivider />
        <FinalCTA />
      </div>
    </div>
  );
}
