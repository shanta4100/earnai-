// app/legal/privacy/page.tsx
export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-slate-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-slate-700 mb-4">
          This demo version does not collect, store, or process any personal
          data. Forms and inputs are local only and are not connected to any
          backend or database.
        </p>
        <p className="text-slate-700">
          In a production system, this page should describe what data is
          collected, how it is used, and how users can manage their privacy
          choices.
        </p>
      </div>
    </main>
  );
}
