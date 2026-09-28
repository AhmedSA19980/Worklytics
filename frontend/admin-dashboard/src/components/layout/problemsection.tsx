import {
  AlertTriangle,
  BarChart3,
  Database,
  Search,
  Sparkles,
  ArrowDown,
  CircleHelp,
} from "lucide-react";
import { ProblemsCard } from "./problemcard";


export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-slate-100/70 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-600">
            <CircleHelp className="h-4 w-4" />
            Why Worklytics
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Managing workforce performance{" "}
            <span className="text-slate-400">shouldn't be guesswork.</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
            Organizations already have valuable workforce data. The challenge is
            turning that data into a clear understanding of what is happening,
            why it matters, and what to do next.
          </p>
        </div>

        {/* Problems */}
        <ProblemsCard />
        
        {/* Connection */}
        <div className="flex flex-col items-center">
          <div className="my-8 flex flex-col items-center text-slate-300">
            <div className="h-8 w-px bg-slate-300" />
            <ArrowDown className="h-5 w-5" />
          </div>

          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 p-8 text-center shadow-xl sm:p-10">
            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                <Sparkles className="h-5 w-5 text-white" />
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-white">
                Worklytics connects the picture together.
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
                Bring workforce information, performance signals, and
                organizational context together so managers can understand what
                is happening instead of simply looking at numbers.
              </p>
            </div>
          </div>
        </div>

        {/* Insight gap */}
        <div className="mt-28 grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              The insight gap
            </span>

            <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A performance number is only the beginning.
            </h3>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              Knowing that an employee's performance score is 68% tells you
              something changed. It doesn't necessarily tell you what changed or
              what action should come next.
            </p>
          </div>

          {/* Right — visual flow */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            {/* Metric */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">
                  Employee performance
                </span>

                <AlertTriangle className="h-5 w-5 text-slate-400" />
              </div>

              <div className="mt-3 flex items-end gap-2">
                <span className="text-4xl font-bold text-slate-950">68%</span>

                <span className="mb-1 text-sm text-slate-500">
                  current score
                </span>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[68%] rounded-full bg-slate-900" />
              </div>
            </div>

            {/* Questions */}
            <div className="mt-4 space-y-2">
              {[
                "Why did the score change?",
                "What changed?",
                "What may have caused the change?",
                "Who needs attention?",
                "What should the manager do?",
              ].map((question, index) => (
                <div
                  key={question}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-semibold text-slate-500">
                    {index + 1}
                  </span>

                  <span className="text-sm font-medium text-slate-700">
                    {question}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final statement */}
        <div className="mx-auto mt-20 max-w-3xl text-center">
          <div className="mx-auto mb-5 h-px w-16 bg-slate-300" />

          <p className="text-xl font-semibold leading-8 text-slate-900 sm:text-2xl">
            Worklytics goes beyond reporting performance.
          </p>

          <p className="mt-3 text-base leading-7 text-slate-600">
            It helps turn performance signals into context, insights, and
            actionable improvement plans.
          </p>
        </div>
      </div>
    </section>
  );
}
