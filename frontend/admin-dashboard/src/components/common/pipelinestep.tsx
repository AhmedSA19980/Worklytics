import { PipelineStepsProps } from "@/types/pipelinestepsprops";
import { ChevronRight, Sparkles } from "lucide-react";

export function PipelineStep({
  label,
  active = false,
}: PipelineStepsProps) {
  return (
    <div className="relative flex items-center justify-center">
      
      <div
        className={`relative z-10 flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium ${active ? "border-indigo-400/30 bg-indigo-400/10 text-indigo-300" : "border-slate-800 bg-slate-900 text-slate-500"}`}
      >
        
        {active && <Sparkles className="h-3.5 w-3.5" />} {label}
      </div>
      <ChevronRight className="absolute -right-3 hidden h-4 w-4 text-slate-700 sm:block" />
    </div>
  );
}
