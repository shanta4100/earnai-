export const metadata = {
  title: "Pricing | EarnAI",
};

const PACKAGES = [
  {
    name: "EarnAI Basic",
    price: "$50",
    features: ["15 scripts", "2 hooks per script", "Delivery in 48 hours"],
    // replace with your real Stripe Payment Link
    href: "https://buy.stripe.com/xxxxx",
  },
  {
    name: "EarnAI Standard",
    price: "$100",
    features: ["30 scripts", "3 hooks per script", "Delivery in 48 hours"],
    href: "https://buy.stripe.com/yyyyy",
  },
  {
    name: "EarnAI Pro",
    price: "$150",
    features: ["45 scripts", "4 hooks per script", "Delivery in 48 hours"],
    href: "https://buy.stripe.com/zzzzz",
  },
];

export default function PricingPage() {
  return (
    <main style={{ maxWidth: 980, margin: "40px auto", padding: "0 16px" }}>
      <h1 style={{ fontSize: 34, marginBottom: 8 }}>EarnAI Pricing</h1>
      <p style={{ opacity: 0.8, marginBottom: 24 }}>
        Choose your package. After purchase, email <strong>ssgpt6@aol.com</strong> with your niche + topic.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
        }}
      >
        {PACKAGES.map((p) => (
          <div
            key={p.name}
            style={{
              border: "1px solid rgba(0,0,0,0.12)",
              borderRadius: 12,
              padding: 16,
            }}
          >
            <h2 style={{ margin: "0 0 6px 0" }}>{p.name}</h2>
            <div style={{ fontSize: 28, fontWeight: 700, marginBottom: 10 }}>{p.price}</div>

            <ul style={{ paddingLeft: 18, marginTop: 0 }}>
              {p.features.map((f) => (
                <li key={f} style={{ marginBottom: 6 }}>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={p.href}
              style={{
                display: "inline-block",
                marginTop: 10,
                padding: "12px 14px",
                borderRadius: 10,
                border: "1px solid rgba(0,0,0,0.2)",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>

      <p style={{ marginTop: 22 }}>
        <a href="/">← Back Home</a>
      </p>
    </main>
  );
}