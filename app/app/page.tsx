export default function HomePage() {
  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 16px" }}>
      <h1>EarnAI</h1>
      <p>YouTube Shorts Scripts Delivered in 48 Hours</p>

      <p style={{ display: "flex", gap: 20 }}>
        <a href="/pricing">View Packages</a>
        <a href="/affiliate">Affiliate Program</a>
      </p>
    </main>
  );
}