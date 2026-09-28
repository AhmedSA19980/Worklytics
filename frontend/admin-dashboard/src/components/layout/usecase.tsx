// components/sections/UseCases.tsx

import { useCases } from "@/data/usecases";
import {
  ArrowUpRight,
} from "lucide-react";

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="relative overflow-hidden bg-slate-950 py-28 text-white"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Built for different roles
          </span>

          <h2 className="mt-7 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            One platform.
            <br />
            <span className="text-slate-400">Different perspectives.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Worklytics gives every role the visibility they need to understand
            workforce performance and take meaningful action.
          </p>
        </div>

        {/* Role cards */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;

            return (
              <article
                key={useCase.role}
                className={`group relative overflow-hidden rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                  useCase.featured
                    ? "border-cyan-400/30 bg-cyan-400/[0.07] shadow-2xl shadow-cyan-950/30"
                    : "border-white/10 bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.055]"
                }`}
              >
                {/* Card glow */}
                {useCase.featured && (
                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
                )}

                <div className="relative">
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
                        useCase.featured
                          ? "border-cyan-300/20 bg-cyan-300/10 text-cyan-300"
                          : "border-white/10 bg-white/[0.05] text-slate-300"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="text-xs font-semibold tracking-[0.18em] text-slate-500">
                      {useCase.role}
                    </span>
                  </div>

                  {/* Content */}
                  <p className="mt-10 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">
                    {useCase.label}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                    {useCase.title}
                  </h3>

                  <p className="mt-4 min-h-[84px] text-sm leading-6 text-slate-400">
                    {useCase.description}
                  </p>

                  {/* Capabilities */}
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="mb-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      What they use
                    </p>

                    <ul className="space-y-3">
                      {useCase.capabilities.map((capability) => (
                        <li
                          key={capability}
                          className="flex items-center gap-3 text-sm text-slate-300"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow */}
                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors group-hover:text-cyan-300">
                    Explore this perspective
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom relationship visual */}
        <div className="mt-10 hidden items-center justify-center gap-4 text-xs text-slate-600 lg:flex">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-white/10" />

          <span className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-slate-500">
            Shared workforce intelligence
          </span>

          <div className="h-px w-24 bg-gradient-to-l from-transparent to-white/10" />
        </div>
      </div>
    </section>
  );
}
