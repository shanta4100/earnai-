// app/legal/terms/page.tsx
export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-slate-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-slate-700 mb-4">
          By using this demo interface, you agree that all content is provided
          “as is” with no guarantees. This environment is for testing and
          demonstration only.
        </p>
        <p className="text-slate-700">
          In a production system, this page should define acceptable use,
          limitations of liability, and user responsibilities.
        </p>
      </div>
    </main>
  );
}
