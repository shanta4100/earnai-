// FILE: app/order/page.tsx

export default function OrderPage() {
  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: 16 }}>
      <h1>EarnAI Order</h1>

      <p style={{ margin: "10px 0 0 0", opacity: 0.85 }}>
        After payment, email your details to:
      </p>

      <div
        style={{
          marginTop: 14,
          padding: 14,
          border: "1px solid rgba(0,0,0,0.12)",
          borderRadius: 12,
        }}
      >
        <p style={{ margin: 0 }}>
          <strong>ssgpt6@aol.com</strong>
        </p>

        <p style={{ margin: "8px 0 0 0", opacity: 0.85 }}>
          Include: your niche, topic, audience, tone/style, and any examples you
          want us to follow.
        </p>
      </div>

      <p style={{ marginTop: 18 }}>
        Delivery promise: <strong>48 hours</strong>
      </p>

      <p style={{ marginTop: 22 }}>
        <a href="/pricing">View Pricing</a> • <a href="/">Back to Home</a>
      </p>

      <p style={{ marginTop: 30 }}>
        <a
          href="/pricing"
          style={{
            display: "inline-block",
            padding: "12px 20px",
            backgroundColor: "#000",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "8px",
          }}
        >
          Choose a Package
        </a>
      </p>
    </main>
  );
}