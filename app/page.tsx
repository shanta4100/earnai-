// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-2xl w-full px-6 py-10 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          EarnAI Business Dashboard
        </h1>
        <p className="text-slate-200 mb-8">
          A clean, hybrid dashboard experience for tracking revenue, users, and orders—without any external services.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/dashboard"
            className="px-4 py-2.5 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/pricing"
            className="px-4 py-2.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
          >
            View Pricing
          </Link>
          <Link
            href="/login"
            className="px-4 py-2.5 rounded-lg border border-white/30 text-white hover:bg-white/10 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
