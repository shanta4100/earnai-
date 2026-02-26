// app/legal/page.tsx
export default function LegalPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-slate-900 mb-4">
          Legal & Policies
        </h1>
        <p className="text-slate-700 mb-4">
          This page contains placeholder legal text. Replace with your real
          Terms of Service and Privacy Policy when ready.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-2">
          Terms of Service
        </h2>
        <p className="text-slate-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-2">
          Privacy Policy
        </h2>
        <p className="text-slate-700">
          We do not collect or store any personal data in this demo version.
        </p>
      </div>
    </main>
  );
}
