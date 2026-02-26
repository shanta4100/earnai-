// app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-slate-900 mb-4">
          About EarnAI
        </h1>
        <p className="text-slate-700 leading-relaxed mb-4">
          EarnAI is a modern business dashboard and earning hub designed to help
          creators, entrepreneurs, and small businesses track performance,
          manage orders, and understand their growth.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This platform is built with Next.js, Tailwind CSS, and a clean hybrid
          dashboard layout. No external services, no databases, and no complex
          integrations—just a fast, stable, and professional UI.
        </p>
        <p className="text-slate-700 leading-relaxed">
          As your business grows, this dashboard can expand with analytics,
          automation, and advanced reporting. For now, it provides a clean,
          functional foundation for your operations.
        </p>
      </div>
    </main>
  );
}
