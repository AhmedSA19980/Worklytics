import Link from "next/link"
import { PerformanceDashboard } from "./dashboardpreivew";


export const HeroSection = () =>{
    return (

       <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-200px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute right-[-200px] top-[300px] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        {/* Grid background */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-8 lg:pb-32 lg:pt-16">
          {/* Navigation */}
         

          {/* Hero content */}
          <div className="mx-auto mt-24 grid max-w-6xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Left */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-medium tracking-wide text-blue-300">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                WORKFORCE PERFORMANCE INTELLIGENCE
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Turn workforce data into{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  better decisions.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
                Worklytics helps organizations understand employee
                performance, identify meaningful changes, and turn insights
                into actionable improvement plans.
              </p>

              {/* CTA */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#platform"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  Explore the platform

                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14m-6-6 6 6-6 6"
                    />
                  </svg>
                </Link>

                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  See how it works
                </Link>
              </div>

              {/* Small trust statement */}
              <div className="mt-10 flex items-center gap-3 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  <div className="h-7 w-7 rounded-full border-2 border-slate-950 bg-slate-700" />
                  <div className="h-7 w-7 rounded-full border-2 border-slate-950 bg-slate-600" />
                  <div className="h-7 w-7 rounded-full border-2 border-slate-950 bg-slate-500" />
                </div>

                <span>Built for data-driven organizations</span>
              </div>
            </div>

            {/* Right - Dashboard visual */}
            <div className="relative">
              {/* Decorative glow */}
              <div className="absolute -inset-10 -z-10 rounded-full bg-blue-500/10 blur-3xl" />

              <PerformanceDashboard />
            </div>
          </div>
        </div>
      </section>
    </main>
    );
  
}