import { StatCard } from "@/components/common/statcard";
import { ReactNode } from "react";

export const DashboardContent = ():ReactNode => {
  return (
    <main className=" h-full space-y-8 p-8">
      {/* Hero */}

      <section className="rounded-xl bg-blue-600 p-8 text-white">
        <h1 className="text-3xl font-bold">Welcome Back, Ahmed 👋</h1>

        <p className="mt-3 text-blue-100">
          Here's what's happening with your business today.
        </p>
      </section>

      {/* KPI */}

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Revenue" value="$82,530" change="+12%" />

        <StatCard title="Orders" value="354" change="+7%" />

        <StatCard title="Customers" value="1,245" change="+18%" />

        <StatCard title="Products" value="526" change="+4%" />
      </section>

      {/* Grid */}

      <section className="grid gap-6 lg:grid-cols-3">
        {/* Activity */}

        <div className="rounded-xl bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="mb-5 text-xl font-semibold">Recent Activity</h2>

          <div className="space-y-4">
            <p>✅ Ahmed approved Invoice #204</p>
            <p>📦 Sarah added Product "MacBook Pro"</p>
            <p>💳 Payment received from John</p>
            <p>👤 New customer registered</p>
          </div>
        </div>

        {/* Quick Actions */}

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-semibold">Quick Actions</h2>

          <div className="space-y-3">
            <button className="w-full rounded-lg bg-blue-600 py-3 text-white">
              Add Customer
            </button>

            <button className="w-full rounded-lg bg-green-600 py-3 text-white">
              Create Invoice
            </button>

            <button className="w-full rounded-lg bg-purple-600 py-3 text-white">
              Add Product
            </button>
          </div>
        </div>
      </section>

      {/* Bottom */}

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-semibold">System Status</h2>

          <div className="space-y-3">
            <p>🟢 API Server Healthy</p>
            <p>🟢 Database Connected</p>
            <p>🟡 Storage 78%</p>
            <p>🟢 Queue Running</p>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-semibold">Upcoming Tasks</h2>

          <div className="space-y-3">
            <p>10:00 Team Meeting</p>
            <p>01:00 Review Orders</p>
            <p>03:30 Client Presentation</p>
            <p>05:00 Daily Backup</p>
          </div>
        </div>
      </section>
    </main>
  );
}
