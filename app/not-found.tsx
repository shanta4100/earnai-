// app/not-found.tsx
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900 px-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-3xl font-semibold text-slate-900 mb-2">404</h1>
        <p className="text-sm text-slate-600 mb-4">
          This page doesn’t exist in the EarnAI universe (yet).
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
