// app/affiliate/page.tsx
export default function AffiliatePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-slate-900 mb-4">
          Affiliate Program
        </h1>
        <p className="text-slate-700 mb-4">
          Earn commissions by sharing EarnAI with your audience. Our affiliate
          program is simple, transparent, and designed to help you grow your
          income.
        </p>

        <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
          <p className="text-sm text-slate-600 mb-2">Your referral link:</p>
          <div className="flex items-center justify-between bg-white border border-slate-300 rounded-lg px-3 py-2">
            <span className="text-xs text-slate-700">
              https://earnai.local/ref/arifur
            </span>
            <button className="text-xs px-2 py-1 bg-slate-900 text-white rounded">
              Copy
            </button>
          </div>
        </div>

        <p className="text-slate-700 mt-6">
          Track your referrals, commissions, and payouts directly from your
          dashboard.
        </p>
      </div>
    </main>
  );
}
