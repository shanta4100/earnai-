export default function HomePage() {
  return (
    <main style={{ maxWidth: 980, margin: "40px auto", padding: "0 16px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ margin: 0 }}>earnai</h1>
          <p style={{ marginTop: 8 }}>
            quickearn hub storefront — youtube shorts scripts delivered in <strong>48 hours</strong>
          </p>
          <p style={{ marginTop: 4 }}>
            operator: <strong>gnaiaaac llc</strong> • contact: <strong>ssgpt6@aol.com</strong>
          </p>
        </div>

        <nav style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a href="/pricing">pricing</a>
          <a href="/affiliate">affiliate</a>
          <a href="/order">order</a>
        </nav>
      </header>

      <section style={{ marginTop: 28, padding: 18, border: "1px solid #ddd", borderRadius: 12 }}>
        <h2 style={{ marginTop: 0 }}>what you get</h2>
        <ul>
          <li>high-retention shorts scripts</li>
          <li>hooks + fast pacing + strong CTA</li>
          <li>delivery in 48 hours</li>
        </ul>
        <p style={{ marginBottom: 0 }}>
          start here: <a href="/pricing">view packages</a>
        </p>
      </section>
    </main>
  );
}