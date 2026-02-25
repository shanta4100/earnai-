// 3) app/pricing/page.tsx
export default function Page() {
  return (
    <>
      <h1>EarnAI Pricing</h1>
      <p style={{ maxWidth: 640, lineHeight: 1.6 }}>
        Choose the script bundle that matches your current energy and capacity. All packages
        are delivered within 48 hours to your email after successful payment.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24,
          marginTop: 32,
        }}
      >
        <div style={{ border: "1px solid #374151", borderRadius: 8, padding: 16 }}>
          <h2>Basic – $50</h2>
          <p>15 scripts · 2 hooks per script</p>
          <a
            href="https://buy.stripe.com/xxxxx"
            style={{
              display: "inline-block",
              marginTop: 12,
              padding: "8px 14px",
              background: "#2563eb",
              color: "#f9fafb",
              borderRadius: 6,
              textDecoration: "none",
              fontSize: 14,
            }}
          >
            Buy Basic
          </a>
        </div>

        <div style={{ border: "1px solid #4b5563", borderRadius: 8, padding: 16 }}>
          <h2>Standard – $100</h2>
          <p>30 scripts · 3 hooks per script</p>
          <a
            href="https://buy.stripe.com/yyyyy"
            style={{
              display: "inline-block",
              marginTop: 12,
              padding: "8px 14px",
              background: "#16a34a",
              color: "#f9fafb",
              borderRadius: 6,
              textDecoration: "none",
              fontSize: 14,
            }}
          >
            Buy Standard
          </a>
        </div>

        <div style={{ border: "1px solid #6b7280", borderRadius: 8, padding: 16 }}>
          <h2>Pro – $150</h2>
          <p>45 scripts · 4 hooks per script</p>
          <a
            href="https://buy.stripe.com/zzzzz"
            style={{
              display: "inline-block",
              marginTop: 12,
              padding: "8px 14px",
              background: "#a855f7",
              color: "#f9fafb",
              borderRadius: 6,
              textDecoration: "none",
              fontSize: 14,
            }}
          >
            Buy Pro
          </a>
        </div>
      </div>
    </>
  );
}
