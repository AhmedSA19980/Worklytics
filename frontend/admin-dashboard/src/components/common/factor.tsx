import { FactorProps } from "@/types/factorprops";

export function Factor({ icon: Icon, text }: FactorProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800">
        <Icon className="h-3.5 w-3.5 text-slate-400" />
      </div>

      <span className="text-sm text-slate-300">{text}</span>
    </div>
  );
}
