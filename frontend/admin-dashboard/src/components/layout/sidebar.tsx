import { hasPermission } from "@/features/permission/checkpermission";
import { Permission } from "@/features/permission/permissions"
import { sidebaritems } from "@/features/permission/sidebar";
import Link from "next/link";


export const SideBar = () =>{
 
    const permissions = 19 ;//*storetotal permission value from auth
    return (
      <aside className=" h-screen w-64 bg-slate-900 text-white">
        <div className="box-border border-b border-slate-700 p-6">
          <div className="flex justify-center -space-x-2 mt-18 mr-5  overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              className="inline-block size-20 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
            />
          </div>
          <div className="mt-3 mr-6">
            <p className=" text-center text-2xl font-bold text-400">user</p>
          </div>
        </div>

        <nav className="mt-6 px-3">
          {sidebaritems
            .filter((item) => hasPermission(permissions, item.permission))
            .map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="mb-1 block rounded-lg px-4 py-3 text-lg font-medium text-400 transition hover:bg-slate-800"
              >
                {item.title}
              </Link>
            ))}
        </nav>
      </aside>
    );
    
}