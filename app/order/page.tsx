export const metadata = {
  title: "Order | EarnAI",
};

export default function OrderPage() {
  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 16px" }}>
      <h1 style={{ fontSize: 34 }}>Order / Thank You</h1>
      <p style={{ opacity: 0.85 }}>
        ✅ Payment received (or in progress). To start your delivery, email:
      </p>

      <div
        style={{
          marginTop: 12,
          padding: 14,
          border: "1px solid rgba(0,0,0,0.12)",
          borderRadius: 12,
        }}
      >
        <p style={{ margin: 0 }}>
          <strong>ssgpt6@aol.com</strong>
        </p>
        <p style={{ margin: "8px 0 0 0", opacity: 0.85 }}>
          Include: your niche, topic, audience, tone, and any examples you like.
        </p>
      </div>

      <p style={{ marginTop: 18 }}>
        Delivery promise: <strong>48 hours</strong>
      </p>

      <p style={{ marginTop: 22 }}>
        <a href="/pricing">View Pricing</a> • <a href="/">Back Home</a>
      </p>
    </main>
  );
}
<p style={{ marginTop: "30px" }}>
  <a
    href="/order"
    style={{
      display: "inline-block",
      padding: "12px 20px",
      backgroundColor: "#000",
      color: "#fff",
      textDecoration: "none",
      borderRadius: "8px",
    }}
  >
    Go to Order Page
  </a>
</p>