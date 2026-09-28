import { PerformanceChart } from "./chart";

export function PerformanceDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Main dashboard */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 shadow-2xl shadow-black/40 backdrop-blur-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-sm font-semibold text-white">
              Performance Overview
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Organization · This month
            </p>
          </div>

          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-slate-700" />
            <span className="h-2 w-2 rounded-full bg-slate-700" />
            <span className="h-2 w-2 rounded-full bg-slate-700" />
          </div>
        </div>

        {/* Score */}
        <div className="grid gap-5 p-5 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Overall Score
            </p>

            <div className="mt-4 flex items-end gap-3">
              <span className="text-4xl font-semibold tracking-tight">87%</span>

              <span className="mb-1 flex items-center gap-1 text-sm font-medium text-emerald-400">
                ↗ 8%
              </span>
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Compared with previous period
            </p>
          </div>

          {/* KPI */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Active KPIs
            </p>

            <div className="mt-4 flex items-end gap-3">
              <span className="text-4xl font-semibold tracking-tight">24</span>

              <span className="mb-1 text-sm text-slate-500">tracked</span>
            </div>

            <p className="mt-2 text-xs text-slate-500">Across 6 departments</p>
          </div>
        </div>

        {/* Chart */}
        <div className="px-5 pb-5">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-200">
                  Performance Trend
                </p>

                <p className="mt-1 text-xs text-slate-500">Last 6 months</p>
              </div>

              <span className="rounded-md bg-emerald-400/10 px-2 py-1 text-xs font-medium text-emerald-400">
                +8.4%
              </span>
            </div>

            <PerformanceChart />
          </div>
        </div>

        {/* AI Insight */}
        <div className="border-t border-white/10 p-5">
          <div className="rounded-xl border border-blue-400/10 bg-blue-400/[0.05] p-4">
            <div className="flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-400/10 text-blue-300">
                ✦
              </div>

              <div>
                <p className="text-sm font-semibold text-white">AI Insight</p>

                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Sales performance dropped{" "}
                  <span className="font-medium text-white">12%</span> over the
                  last period.
                </p>

                <button className="mt-3 text-xs font-medium text-blue-300 transition hover:text-blue-200">
                  View analysis →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating insight card */}
      <div className="absolute -bottom-7 -left-8 hidden w-52 rounded-xl border border-white/10 bg-slate-900/95 p-4 shadow-xl backdrop-blur-xl sm:block">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500">Change detected</span>

          <span className="h-2 w-2 rounded-full bg-amber-400" />
        </div>

        <p className="mt-2 text-sm font-medium text-white">Sales Department</p>

        <p className="mt-1 text-xs text-slate-500">Requires attention</p>
      </div>
      
    </div>
  );
}
