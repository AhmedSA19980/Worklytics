import { Check } from "lucide-react";

export function Action({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
     
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/10">
       
        <Check className="h-3.5 w-3.5 text-emerald-400" />
      </div>
      <span className="text-sm text-slate-300">{text}</span>
    </div>
  );
}