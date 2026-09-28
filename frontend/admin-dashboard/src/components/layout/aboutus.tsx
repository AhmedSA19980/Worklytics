"use client";

import { steps } from "@/data/steps";



export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-slate-200 bg-white py-24 dark:border-slate-800 dark:bg-slate-950"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100/70 blur-3xl dark:bg-slate-900/70" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
            The Worklytics philosophy
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
            Why{" "}
            <span className="text-slate-500 dark:text-slate-400">
              Worklytics?
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
            Organizations generate enormous amounts of workforce data. The
            challenge isn&apos;t simply collecting more data — it&apos;s turning
            that data into understanding and meaningful action.
          </p>
        </div>

        {/* Philosophy pipeline */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="group relative">
                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[calc(100%+0.5rem)] top-12 hidden w-4 items-center md:flex">
                      <div className="h-px w-full bg-slate-200 dark:bg-slate-800" />
                    </div>
                  )}

                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700 dark:hover:shadow-black/20">
                    {/* Number + icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-[0.2em] text-slate-400">
                        {step.number}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        <Icon size={19} strokeWidth={1.8} />
                      </div>
                    </div>

                    <h3 className="mt-7 text-lg font-semibold text-slate-950 dark:text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mx-auto mt-14 max-w-2xl text-center">
          <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
            Worklytics is built around a simple idea:
            <span className="font-medium text-slate-800 dark:text-slate-200">
              {" "}
              better understanding leads to better action.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
