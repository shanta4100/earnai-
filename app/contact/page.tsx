// app/contact/page.tsx
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-semibold text-slate-900 mb-4">
          Contact Us
        </h1>
        <p className="text-slate-700 mb-6">
          Have questions? Send us a message and we’ll get back to you.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
          />
          <textarea
            placeholder="Your message"
            rows={5}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
          ></textarea>

          <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
