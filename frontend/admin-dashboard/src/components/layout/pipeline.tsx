import { pipeline } from "@/data/pipeline";
import { ArrowRight } from "lucide-react";

export function Pipeline(){
    return (
      <div className="mt-20">
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="absolute left-[10%] right-[10%] top-14 hidden h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent lg:block" />

          <div className="grid gap-5 lg:grid-cols-5 lg:gap-0">
            {pipeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative flex items-center lg:flex-col"
                >
                  {/* Node */}
                  <div className="relative z-10 flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 shadow-xl shadow-black/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-400/60 group-hover:shadow-blue-500/10">
                    {/* Inner glow */}
                    <div className="absolute inset-2 rounded-xl bg-blue-500/5 transition-colors group-hover:bg-blue-500/10" />

                    <Icon className="relative h-8 w-8 text-blue-400 transition-transform duration-300 group-hover:scale-110" />

                    {/* Step number */}
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-xs font-semibold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Arrow - desktop */}
                  {index < pipeline.length - 1 && (
                    <ArrowRight className="absolute right-[-12px] top-[45px] z-20 hidden h-5 w-5 text-slate-600 lg:block" />
                  )}

                  {/* Content */}
                  <div className="ml-6 lg:ml-0 lg:mt-7 lg:max-w-[190px] lg:text-center">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow - mobile */}
                  {index < pipeline.length - 1 && (
                    <div className="absolute -bottom-7 left-[54px] flex lg:hidden">
                      <div className="h-7 w-px bg-slate-700" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
}