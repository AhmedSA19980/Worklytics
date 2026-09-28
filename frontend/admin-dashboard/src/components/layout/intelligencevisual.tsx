import { BellRing, Sparkles } from "lucide-react";

export function IntelligenceVisual(){

     return (
       <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5">
         <div className="flex items-center gap-2">
           <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-400/10">
             <Sparkles className="h-4 w-4 text-violet-300" />
           </div>

           <div>
             <p className="text-xs font-medium text-white/70">
               Performance Insight
             </p>
             <p className="text-[10px] text-white/30">AI analysis</p>
           </div>
         </div>

         <div className="mt-5 rounded-xl border border-violet-400/10 bg-violet-400/[0.04] p-4">
           <div className="flex items-start gap-3">
             <div className="mt-1 h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.6)]" />

             <div>
               <p className="text-sm font-medium text-white/80">
                 Meaningful change detected
               </p>

               <p className="mt-2 text-xs leading-5 text-white/40">
                 Team response time decreased by 18% compared with the previous
                 period.
               </p>
             </div>
           </div>
         </div>

         <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-3">
           <BellRing className="h-4 w-4 text-white/30" />
           <span className="text-xs text-white/50">
             Manager notification generated
           </span>
         </div>

         <div className="absolute -bottom-20 -right-10 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
       </div>
     );
}