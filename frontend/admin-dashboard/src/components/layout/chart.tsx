export function PerformanceChart() {
  return (
    <div className="relative h-40">
      {/* Grid */}
      <div className="absolute inset-0 flex flex-col justify-between">
        <span className="border-t border-white/5" />
        <span className="border-t border-white/5" />
        <span className="border-t border-white/5" />
        <span className="border-t border-white/5" />
      </div>

      <svg
        viewBox="0 0 500 150"
        className="absolute inset-0 h-full w-full overflow-visible"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="chartGradient"
            x1="0"
            x2="0"
            y1="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="rgb(96 165 250)"
              stopOpacity="0.25"
            />

            <stop
              offset="100%"
              stopColor="rgb(96 165 250)"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        {/* Area */}
        <path
          d="M0 120 C60 110 75 95 125 100 C175 105 185 65 235 72 C285 80 300 55 345 60 C390 65 410 30 455 40 C475 45 490 30 500 25 L500 150 L0 150 Z"
          fill="url(#chartGradient)"
        />

        {/* Line */}
        <path
          d="M0 120 C60 110 75 95 125 100 C175 105 185 65 235 72 C285 80 300 55 345 60 C390 65 410 30 455 40 C475 45 490 30 500 25"
          fill="none"
          stroke="rgb(96 165 250)"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        />

        {/* Current point */}
        <circle
          cx="500"
          cy="25"
          r="5"
          fill="rgb(96 165 250)"
        />

        <circle
          cx="500"
          cy="25"
          r="9"
          fill="rgb(96 165 250)"
          opacity="0.15"
        />
      </svg>

      {/* Labels */}
      <div className="absolute -bottom-5 left-0 right-0 flex justify-between text-[10px] text-slate-600">
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
        <span>Jul</span>
        <span>Aug</span>
        <span>Sep</span>
      </div>
    </div>
  );
}