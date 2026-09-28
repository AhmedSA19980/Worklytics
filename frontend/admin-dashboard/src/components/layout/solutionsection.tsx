import {
  Activity,
  Check,
} from "lucide-react";
import { Pipeline } from "./pipeline";

export default function SolutionSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300">
            <Activity className="h-4 w-4" />
            Workforce Intelligence
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            From workforce data to{" "}
            <span className="text-blue-400">meaningful action.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            Worklytics transforms scattered workforce activity and performance
            data into measurable KPIs, meaningful insights, and actionable
            management decisions.
          </p>
        </div>

        {/* Pipeline */}
        <Pipeline />

        {/* Core message */}
        <div className="mx-auto mt-24 max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-sm sm:p-10">
            {/* Accent */}
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500" />

            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-blue-400">
                  The Worklytics approach
                </p>

                <p className="mt-3 text-lg leading-8 text-slate-300">
                  Instead of asking managers to search through disconnected
                  data, Worklytics creates a continuous path from{" "}
                  <span className="font-medium text-white">
                    what is happening
                  </span>{" "}
                  to{" "}
                  <span className="font-medium text-white">
                    what should happen next.
                  </span>
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10">
                <Check className="h-6 w-6 text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-slate-500">
            DATA{" "}
            <span className="mx-2 text-slate-700">→</span>
            PERFORMANCE{" "}
            <span className="mx-2 text-slate-700">→</span>
            INSIGHT{" "}
            <span className="mx-2 text-slate-700">→</span>
            ACTION
          </p>
        </div>
      </div>
    </section>
  );
}

