"use client";

import {
  Users,
  BarChart3,
  BrainCircuit,
  Target,
  Building2,
  ShieldCheck,
  TrendingUp,
  BellRing,
  Sparkles,
  ClipboardCheck,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { CapabilityVisual } from "./capabilityvisual";
import { capabilities } from "@/data/capabilities";


export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#070b12] py-28 text-white"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/[0.04] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/[0.04] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="text-xs font-medium tracking-[0.18em] text-cyan-300/80">
              WORKLYTICS PLATFORM
            </span>
          </div>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Everything you need to understand
            <span className="block bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
              workforce performance.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
            Worklytics connects workforce structure, performance data,
            intelligence, and action into one continuous management system.
          </p>
        </div>

        {/* Capability flow */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* Connecting line */}
          <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-cyan-400/30 via-violet-400/20 to-emerald-400/30 md:block" />

          <div className="space-y-5">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.number}
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] transition duration-300 hover:border-white/[0.15] hover:bg-white/[0.04]"
                >
                  <div className="grid lg:grid-cols-[1fr_340px]">
                    {/* Content */}
                    <div className="relative p-7 sm:p-9 lg:p-10">
                      <div className="flex items-start gap-5">
                        {/* Number */}
                        <div className="hidden shrink-0 md:block">
                          <span className="text-xs font-medium tracking-[0.2em] text-white/20">
                            {capability.number}
                          </span>
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                              <Icon className="h-4.5 w-4.5 text-cyan-300" />
                            </div>

                            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                              {capability.title}
                            </h3>
                          </div>

                          <p className="mt-5 max-w-xl text-sm leading-6 text-white/45 sm:text-[15px]">
                            {capability.description}
                          </p>

                          {/* Feature pills */}
                          <div className="mt-7 flex flex-wrap gap-2">
                            {capability.features.map((feature) => {
                              const FeatureIcon = feature.icon;

                              return (
                                <div
                                  key={feature.label}
                                  className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-black/20 px-3 py-2"
                                >
                                  <FeatureIcon className="h-3.5 w-3.5 text-white/35" />
                                  <span className="text-xs text-white/55">
                                    {feature.label}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product visual */}
                    <div className="border-t border-white/[0.06] p-5 lg:border-l lg:border-t-0">
                      <CapabilityVisual type={ capability.visual } />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <p className="mt-10 text-sm leading-6 text-white/35">
            From defining your workforce structure to tracking improvement,
            Worklytics creates a continuous loop between{" "}
            <span className="text-white/60">data</span>,{" "}
            <span className="text-white/60">insight</span>, and{" "}
            <span className="text-white/60">action</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
