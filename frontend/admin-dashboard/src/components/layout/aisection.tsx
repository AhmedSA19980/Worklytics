"use client";
import {
  ArrowRight,
  BrainCircuit,
  Check,
  ChevronRight,
  TrendingDown,
  Users,
  Target,
  Activity,
  Sparkles,
} from "lucide-react";
import { Metric } from "../common/Metric";
import { Factor } from "../common/factor";
import { Action } from "../common/action";
import { PipelineStep } from "../common/pipelinestep";

export default function AISection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
    
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[140px]" />{" "}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
        
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-sm font-medium text-indigo-300">
          
            <Sparkles className="h-4 w-4" /> AI-Powered Performance
            Intelligence{" "}
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
           
            Don't just see the numbers.
            <span className="mt-2 block text-indigo-400">
             
              Understand them.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            
            Worklytics analyzes workforce performance data to identify
            meaningful changes, explain what may be driving them, and turn
            insights into actionable improvement plans.{" "}
          </p>
        </div>
        {/* Main AI visualization */}
        <div className="relative mx-auto mt-16 max-w-6xl">
      
          {/* Connection line */}
          <div className="absolute left-1/2 top-1/2 hidden h-px w-24 -translate-y-1/2 bg-gradient-to-r from-slate-700 via-indigo-400/70 to-indigo-400 lg:block" />{" "}
          <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          
            {/* Dashboard */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6">
        
              {/* Window header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                
                <div>
              
                  <p className="text-sm font-semibold text-white">
                  
                    Performance Dashboard
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                
                    Sales Department · Last 30 days{" "}
                  </p>
                </div>
                <div className="flex gap-1.5">
                
                  <span className="h-2 w-2 rounded-full bg-slate-700" />
                  <span className="h-2 w-2 rounded-full bg-slate-700" />
                  <span className="h-2 w-2 rounded-full bg-slate-700" />
                </div>
              </div>
              {/* Metrics */}
              <div className="mt-5 grid grid-cols-3 gap-3">
          
                <Metric
                  label="Performance"
                  value="72%"
                  change="-14%"
                  negative
                />
                <Metric label="Productivity" value="84%" change="+8%" />
                <Metric
                  label="KPI Score"
                  value="68%"
                  change="-9%"
                  negative
                />
              </div>
              {/* Chart */}
              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                
                <div className="mb-4 flex items-center justify-between">
                  
                  <p className="text-xs font-medium text-slate-400">
                    
                    Performance trend
                  </p>
                  <span className="flex items-center gap-1 text-xs text-red-400">
                    
                    <TrendingDown className="h-3.5 w-3.5" /> 14%
                  </span>
                </div>
                <div className="relative h-32">
                  
                  {/* Grid */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    
                    {[1, 2, 3, 4].map((line) => (
                      <div
                        key={line}
                        className="border-t border-slate-800/80"
                      />
                    ))}
                  </div>
                  {/* SVG chart */}
                  <svg
                    viewBox="0 0 500 130"
                    className="absolute inset-0 h-full w-full overflow-visible"
                    preserveAspectRatio="none"
                  >
                    
                    <defs>
                      
                      <linearGradient
                        id="performanceFill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        
                        <stop
                          offset="0%"
                          stopColor="currentColor"
                          stopOpacity="0.2"
                        />
                        <stop
                          offset="100%"
                          stopColor="currentColor"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 35 C60 30, 80 40, 125 45 S185 40, 225 58 S280 52, 320 70 S385 65, 425 92 S465 88, 500 105 V130 H0 Z"
                      fill="url(#performanceFill)"
                      className="text-indigo-500"
                    />
                    <path
                      d="M0 35 C60 30, 80 40, 125 45 S185 40, 225 58 S280 52, 320 70 S385 65, 425 92 S465 88, 500 105"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="text-indigo-400"
                    />
                  </svg>
                </div>
                <div className="mt-3 flex justify-between text-[10px] text-slate-600">
                  
                  <span>3 weeks ago</span> <span>2 weeks ago</span>
                  <span>This week</span>
                </div>
              </div>
              {/* Detected change */}
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-red-400/10 bg-red-400/5 p-3">
                
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-400/10">
                  
                  <TrendingDown className="h-4 w-4 text-red-400" />
                </div>
                <div>
                  
                  <p className="text-xs font-medium text-white">
                    
                    Significant change detected
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    
                    Performance dropped beyond the expected range.
                  </p>
                </div>
              </div>
            </div>
            {/* AI connector */}
            <div className="relative z-10 flex justify-center lg:block">
              
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-400/30 bg-indigo-500/15 shadow-lg shadow-indigo-500/20">
                
                <BrainCircuit className="h-6 w-6 text-indigo-300" />
              </div>
              <div className="absolute left-1/2 top-full h-8 w-px -translate-x-1/2 bg-gradient-to-b from-indigo-400/60 to-transparent lg:hidden" />
            </div>
            {/* AI Insight */}
            <div className="relative overflow-hidden rounded-2xl border border-indigo-400/25 bg-gradient-to-br from-indigo-950/70 via-slate-900 to-slate-900 p-5 shadow-2xl shadow-indigo-950/30 sm:p-6">
              
              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/15 blur-3xl" />
              <div className="relative">
                
                {/* Header */}
                <div className="flex items-center gap-3">
                  
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-400/10 ring-1 ring-indigo-400/20">
                    
                    <Sparkles className="h-5 w-5 text-indigo-300" />
                  </div>
                  <div>
                    
                    <p className="text-sm font-semibold text-white">
                      
                      AI Insight
                    </p>
                    <p className="text-xs text-indigo-300/70">
                      
                      Performance analysis
                    </p>
                  </div>
                </div>
                {/* Insight */}
                <div className="mt-6">
                  
                  <p className="text-lg font-semibold leading-7 text-white">
                    
                    Sales performance decreased
                    <span className="text-red-400">14%</span> over the last 3
                    weeks.
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    
                    Worklytics identified a meaningful deviation from the
                    department&apos;s recent performance trend.
                  </p>
                </div>
                {/* Factors */}
                <div className="mt-6">
                  
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    
                    Possible factors
                  </p>
                  <div className="mt-3 space-y-2.5">
                    
                    <Factor icon={Activity} text="Activity decline" />
                    <Factor icon={Target} text="KPI completion decrease" />
                    <Factor icon={Users} text="Team workload change" />
                  </div>
                </div>
                {/* Recommended actions */}
                <div className="mt-6 border-t border-slate-800 pt-5">
                  
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    
                    Recommended actions
                  </p>
                  <div className="mt-3 space-y-2.5">
                    
                    <Action text="Review workload" />
                    <Action text="Schedule manager check-in" />
                    <Action text="Review current targets" />
                  </div>
                </div>
                {/* CTA */}
                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">
                  
                  Create Action Plan <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Intelligence pipeline */}
        <div className="mx-auto mt-20 max-w-4xl">
          
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 sm:gap-0">
            
            <PipelineStep label="Data" /> <PipelineStep label="AI" active />
            <PipelineStep label="Explanation" />
            <PipelineStep label="Recommendation" />
            <PipelineStep label="Action" />
          </div>
        </div>
        {/* Bottom statement */}
        <div className="mx-auto mt-14 max-w-2xl text-center">
          
          <p className="text-sm leading-6 text-slate-500">
            
            Instead of forcing managers to interpret dashboards manually,
            Worklytics turns performance signals into understandable insights
            and actionable next steps.
          </p>
        </div>
      </div>
    </section>
  );
}
