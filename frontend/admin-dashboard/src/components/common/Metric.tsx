import { MetricProps } from "@/types/metricprops";

export function Metric({
  label,
  value,
  change,
  negative = false,
}: MetricProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
      
      <p className="truncate text-[10px] text-slate-500">{label}</p>
      <div className="mt-2 flex items-end justify-between gap-1">
  
        <p className="text-base font-semibold text-white">{value}</p>
        <span
          className={`text-[10px] font-medium ${negative ? "text-red-400" : "text-emerald-400"}`}
        >
          
          {change}
        </span>
      </div>
    </div>
  );
}
