// app/success/page.tsx
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900 px-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-2xl font-semibold text-slate-900 mb-2">
          Payment Successful
        </h1>
        <p className="text-sm text-slate-600 mb-6">
          Your subscription is active. Welcome to EarnAI Business.
        </p>
        <Link
          href="/dashboard"
          className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm"
        >
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}
