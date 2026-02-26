// app/login/page.tsx
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-semibold text-slate-900 mb-2">Login</h1>
        <p className="text-sm text-slate-600 mb-6">
          Access your EarnAI dashboard.
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
          />

          <button className="w-full bg-slate-900 text-white py-2 rounded-lg text-sm font-medium">
            Login
          </button>
        </form>

        <div className="mt-6 text-sm text-center text-slate-600">
          <Link href="/reset" className="text-slate-900 font-medium">
            Forgot password?
          </Link>
        </div>

        <div className="mt-4 text-sm text-center text-slate-600">
          Don’t have an account?{" "}
          <Link href="/register" className="text-slate-900 font-medium">
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
