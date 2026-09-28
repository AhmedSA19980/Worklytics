import { problems } from "@/data/problems";


export  function ProblemsCard(){
    return (
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {problems.map((problem) => {
            const Icon = problem.icon;

            return (
              <div
                key={problem.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-950">
                  {problem.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
    )
}