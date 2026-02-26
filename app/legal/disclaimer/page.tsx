// app/legal/disclaimer/page.tsx
export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-slate-900 mb-4">
          Disclaimer
        </h1>
        <p className="text-slate-700 mb-4">
          This is a demo dashboard. All metrics, numbers, and examples shown in
          the interface are mock data and do not represent real financial,
          legal, or business advice.
        </p>
        <p className="text-slate-700">
          You are responsible for verifying any real decisions with qualified
          professionals. This interface is for demonstration and educational
          purposes only.
        </p>
      </div>
    </main>
  );
}
