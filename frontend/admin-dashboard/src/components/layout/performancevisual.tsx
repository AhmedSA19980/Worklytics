
export function PerformanceVisual(){
     return (
       <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5">
         <div className="flex items-center justify-between">
           <div>
             <p className="text-xs text-white/40">TEAM PERFORMANCE</p>
             <p className="mt-1 text-2xl font-semibold text-white">84.6%</p>
           </div>

           <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300">
             +8.4%
           </div>
         </div>

         <div className="mt-8 flex h-28 items-end gap-2">
           {[35, 48, 42, 60, 55, 72, 66, 84, 76, 92, 86, 100].map(
             (height, index) => (
               <div
                 key={index}
                 className="flex-1 rounded-t-sm bg-white/10"
                 style={{ height: `${height}%` }}
               >
                 <div
                   className="h-full rounded-t-sm bg-cyan-400/60"
                   style={{
                     height: `${Math.min(100, height + 8)}%`,
                   }}
                 />
               </div>
             ),
           )}
         </div>

         <div className="mt-3 flex justify-between text-[10px] text-white/25">
           <span>JAN</span>
           <span>MAR</span>
           <span>JUN</span>
           <span>SEP</span>
         </div>
       </div>
     );
}