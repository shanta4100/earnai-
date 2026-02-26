// app/dashboard/page.tsx
import Link from "next/link";

type StatCardProps = {
  label: string;
  value: string;
  change: string;
  positive?: boolean;
};

function StatCard({ label, value, change, positive = true }: StatCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
      <p
        className={`mt-1 text-xs font-medium ${
          positive ? "text-emerald-600" : "text-rose-600"
        }`}
      >
        {positive ? "▲" : "▼"} {change}
      </p>
    </div>
  );
}

function OrdersTable() {
  const rows = [
    { id: "#1023", customer: "Acme Corp", amount: "$1,200", status: "Paid" },
    { id: "#1022", customer: "Nova Labs", amount: "$890", status: "Pending" },
    { id: "#1021", customer: "BlueSky LLC", amount: "$2,430", status: "Paid" },
    { id: "#1020", customer: "Orbit Media", amount: "$640", status: "Failed" }
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-slate-900">Recent Orders</h2>
        <span className="text-xs text-slate-500">Last 7 days</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-500 border-b border-slate-100">
              <th className="py-2 pr-4">Order ID</th>
              <th className="py-2 pr-4">Customer</th>
              <th className="py-2 pr-4">Amount</th>
              <th className="py-2 pr-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-slate-50 last:border-0">
                <td className="py-2 pr-4 font-medium text-slate-900">{row.id}</td>
                <td className="py-2 pr-4 text-slate-700">{row.customer}</td>
                <td className="py-2 pr-4 text-slate-900">{row.amount}</td>
                <td className="py-2 pr-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      row.status === "Paid"
                        ? "bg-emerald-50 text-emerald-700"
                        : row.status === "Pending"
                        ? "bg-amber-50 text-amber-700"
                        : "bg-rose-50 text-rose-700"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SimpleChart() {
  const points = [30, 55, 45, 70, 65, 90, 80];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-slate-900">Revenue (Mock)</h2>
        <span className="text-xs text-slate-500">Last 7 days</span>
      </div>
      <div className="h-32 flex items-end gap-2">
        {points.map((p, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md bg-emerald-500/80"
            style={{ height: `${p}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* Sidebar (dark) */}
      <aside className="hidden md:flex w-64 flex-col bg-slate-950 text-slate-100">
        <div className="px-5 py-4 border-b border-slate-800">
          <span className="text-sm font-semibold tracking-wide text-emerald-400">
            EARNAI
          </span>
          <p className="text-xs text-slate-400 mt-1">
            Business Control Center
          </p>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 text-sm">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-lg px-3 py-2 bg-slate-800 text-slate-50"
          >
            <span>📊</span>
            <span>Dashboard</span>
          </Link>
          <Link
            href="/pricing"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            <span>💳</span>
            <span>Pricing</span>
          </Link>
          <Link
            href="/order"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            <span>📦</span>
            <span>Orders</span>
          </Link>
          <Link
            href="/affiliate"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            <span>🤝</span>
            <span>Affiliate</span>
          </Link>
          <Link
            href="/legal"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            <span>⚖️</span>
            <span>Legal</span>
          </Link>
        </nav>
        <div className="px-4 py-4 border-t border-slate-800 text-xs text-slate-400">
          <p>Logged in as</p>
          <p className="font-medium text-slate-200">demo@earnai.local</p>
        </div>
      </aside>

      {/* Main content (light) */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-slate-200 bg-white">
          <div>
            <h1 className="text-lg font-semibold text-slate-900">
              Dashboard
            </h1>
            <p className="text-xs text-slate-500">
              Overview of your mock business metrics.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-xs text-slate-600 hover:text-slate-900"
            >
              Switch account
            </Link>
            <button className="rounded-full bg-slate-900 text-white text-xs px-3 py-1.5">
              Export
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-4 md:px-6 py-4 space-y-4">
          {/* Stats */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatCard label="MRR" value="$12,430" change="+8.2%" positive />
            <StatCard label="Active Users" value="1,284" change="+3.1%" positive />
            <StatCard label="Churn Rate" value="2.4%" change="-0.4%" positive={false} />
            <StatCard label="Avg. Order Value" value="$86.20" change="+1.9%" positive />
          </section>

          {/* Chart + Table */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <SimpleChart />
            </div>
            <div>
              <OrdersTable />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
"use client";

import { createBillingPortal } from "../actions/createBillingPortal";

export default function BillingButton() {
  async function openPortal() {
    const session = await createBillingPortal("cus_123"); // temporary
    if (session?.url) window.location.href = session.url;
  }

  return (
    <button
      onClick={openPortal}
      className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm"
    >
      Manage Billing
    </button>
  );
}
