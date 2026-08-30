import { Searchbar } from "@/components/common/search";
import { SideBar } from "@/components/layout/sidebar";
import { DashboardContent } from "@/features/dashboard/dashboardcontent";


export default function Dashboard(){

    return (
      <div className="grid min-h-screen grid-cols-[16rem_1fr] bg-slate-100">
        <div>
          <SideBar />
        </div>

        <div className="ml-20 flex min-h-screen flex-col">
          
          <div className="flex-1 p-6">
            <DashboardContent />
          </div>
        </div>
      </div>
    );
}