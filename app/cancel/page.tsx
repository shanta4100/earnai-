// app/cancel/page.tsx
import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900 px-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-2xl font-semibold text-slate-900 mb-2">
          Payment Canceled
        </h1>
        <p className="text-sm text-slate-600 mb-6">
          Your payment was not completed. You can try again anytime.
        </p>
        <Link
          href="/pricing"
          className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm"
        >
          Back to Pricing
        </Link>
      </div>
    </main>
  );
}
