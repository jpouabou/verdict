import { HeroSection } from "@/components/hero/HeroSection";
import { TrustedBySection } from "@/components/landing/TrustedBySection";
import { CreateCollaborateSection } from "@/components/landing/CreateCollaborateSection";
import { AboutAndFleet } from "@/components/landing/AboutAndFleet";
import { HowToGetVerdict } from "@/components/landing/HowToGetVerdict";
import { PricingShowcase } from "@/components/landing/PricingShowcase";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { SectionDivider, SectionDividerDots } from "@/components/landing/SectionDivider";

export default function LandingPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <TrustedBySection />
      <SectionDividerDots />
      <CreateCollaborateSection />
      <div className="bg-[#f5f5f5]">
        <SectionDivider />
        <AboutAndFleet />
      </div>
      <div className="bg-[#fafafa]">
        <SectionDivider />
        <HowToGetVerdict />
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
