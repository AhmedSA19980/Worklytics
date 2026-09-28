

export function FoundationVisual() {
    return (
      <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-medium text-white/40">
            ORGANIZATION
          </span>
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>

        <div className="space-y-3">
          {[
            ["Organization", "Acme Corporation"],
            ["Department", "Engineering"],
            ["Position", "Software Developer"],
          ].map(([label, value], index) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3"
            >
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/30">
                  {label}
                </p>
                <p className="mt-1 text-sm text-white/80">{value}</p>
              </div>

              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-xs text-white/40">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
    );
}