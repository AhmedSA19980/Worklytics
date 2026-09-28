

export function ActionVisual(){
    return (
      <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-white/40">IMPROVEMENT PLAN</p>
            <p className="mt-1 text-sm font-medium text-white/80">
              Response Time
            </p>
          </div>

          <span className="rounded-lg bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300">
            Active
          </span>
        </div>

        <div className="space-y-4">
          {[
            ["Define target", true],
            ["Manager action", true],
            ["Monitor progress", false],
          ].map(([label, completed], index) => (
            <div key={String(label)} className="flex items-center gap-3">
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full border ${
                  completed
                    ? "border-emerald-400/30 bg-emerald-400/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {completed ? (
                  <span className="text-xs text-emerald-300">✓</span>
                ) : (
                  <span className="text-[10px] text-white/30">{index + 1}</span>
                )}
              </div>

              <div className="flex-1">
                <p className="text-xs text-white/60">{label}</p>
                <div className="mt-1 h-1 rounded-full bg-white/5">
                  <div
                    className={`h-full rounded-full ${
                      completed
                        ? "w-full bg-emerald-400/50"
                        : "w-1/2 bg-white/10"
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>
    );
}