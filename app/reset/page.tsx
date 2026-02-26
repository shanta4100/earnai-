// app/reset/page.tsx
import Link from "next/link";

export default function ResetPasswordPage() {
  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-semibold text-slate-900 mb-2">
          Reset Password
        </h1>
        <p className="text-sm text-slate-600 mb-6">
          Enter your email and we’ll send reset instructions.
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
          />

          <button className="w-full bg-slate-900 text-white py-2 rounded-lg text-sm font-medium">
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-sm text-center text-slate-600">
          Remember your password?{" "}
          <Link href="/login" className="text-slate-900 font-medium">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
