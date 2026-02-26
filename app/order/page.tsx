// app/order/page.tsx
export default function OrderPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-slate-900 mb-4">
          Orders
        </h1>
        <p className="text-slate-700 mb-6">
          View and manage your recent orders.
        </p>

        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">No orders found.</p>
        </div>
      </div>
    </main>
  );
}
