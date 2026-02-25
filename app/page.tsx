export default function Page() {
  return (
    <main
      style={{
        maxWidth: 900,
        margin: "40px auto",
        padding: "0 16px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>EarnAI</h1>

      <p>
        Welcome to EarnAI — QuickEarn Hub storefront operated by GNAIAAAC LLC.
      </p>

      <p>
        Delivery promise: <strong>48 hours</strong>
      </p>

      <hr style={{ margin: "30px 0" }} />

      <nav style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <a href="/pricing">Pricing</a>
        <a href="/affiliate">Affiliate</a>
        <a href="/order">Order</a>
      </nav>
    </main>
  );
}