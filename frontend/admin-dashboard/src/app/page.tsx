"use client";
import { AboutUs } from "@/components/layout/aboutus";
import { HeroSection } from "@/components/layout/herosection";
import { WorkFlow } from "@/components/layout/workflow";
import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-grey-900">
      <main className="bg-grey-900">
        <HeroSection />
        <WorkFlow />
        <AboutUs  />
      </main>
    </div>
  );
}
