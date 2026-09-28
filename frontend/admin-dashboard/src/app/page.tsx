"use client";
import About from "@/components/layout/aboutus";
import AISection from "@/components/layout/aisection";
import FeaturesSection from "@/components/layout/featuresection";
import Footer from "@/components/layout/footer";
import { HeroSection } from "@/components/layout/herosection";
import HowWorklyticsWorks from "@/components/layout/howWorks";
import ProblemSection from "@/components/layout/problemsection";
import SolutionSection from "@/components/layout/solutionsection";
import UseCases from "@/components/layout/usecase";



export default function Home() {
  return (
    <div className="bg-grey-900">
      <main className="bg-grey-900">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <AISection />
        <UseCases />
        <About />
        <Footer />
      </main>
    </div>
  );
}
