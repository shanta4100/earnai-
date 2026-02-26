// app/ai/page.tsx
export default function AIEnginePage() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 border border-slate-700 rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-semibold text-white mb-3">
          EarnAI Core Engine
        </h1>
        <p className="text-slate-200 text-sm mb-6">
          This is the placeholder for your automated, black‑box AI control
          center—where routing, scoring, and orchestration logic will live.
          Right now it’s a calm, empty chamber, ready for future models,
          agents, and workflows.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="rounded-xl border border-emerald-500/40 bg-slate-900/60 p-4">
            <p className="text-emerald-300 font-semibold mb-1">
              Sleeping Agent
            </p>
            <p className="text-slate-300">
              Monitors routes, states, and configs. Wakes only when rules say
              so.
            </p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/60 p-4">
            <p className="text-cyan-300 font-semibold mb-1">
              Command Network
            </p>
            <p className="text-slate-300">
              Future home for decision graphs, scoring layers, and safe
              automation flows.
            </p>
          </div>
          <div className="rounded-xl border border-violet-500/40 bg-slate-900/60 p-4">
            <p className="text-violet-300 font-semibold mb-1">
              Signal Space
            </p>
            <p className="text-slate-300">
              Where events, metrics, and “galactic frequencies” will be logged
              and tuned.
            </p>
          </div>
        </div>

        <p className="mt-6 text-[11px] text-slate-400">
          All logic here is currently static and safe. When you’re ready, this
          page can connect to real ML services, queues, or agents—on your
          terms, at your pace.
        </p>
      </div>
    </main>
  );
}
