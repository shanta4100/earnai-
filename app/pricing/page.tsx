export default function PricingPage() {
  const basic = "https://buy.stripe.com/4gM4gy9eP3jcbUy4Fr57W00";
  const standard = "https://buy.stripe.com/aFafZg76H6vo5wa9ZL57W01";
  const pro = "https://buy.stripe.com/3cI4gydv53jc2jY2xj57W05";

  const card: React.CSSProperties = {
    border: "1px solid #ddd",
    borderRadius: 12,
    padding: 18,
    width: "100%",
    maxWidth: 420,
    margin: "12px auto",
    fontFamily: "Arial",
  };

  const btn: React.CSSProperties = {
    display: "inline-block",
    marginTop: 12,
    padding: "10px 14px",
    borderRadius: 10,
    border: "1px solid #111",
    textDecoration: "none",
    color: "white",
    background: "#111",
  };

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ textAlign: "center" }}>EarnAI Pricing</h1>

      <div style={card}>
        <h2>EarnAI Basic</h2>
        <p>1 YouTube Shorts script (48h delivery)</p>
        <a style={btn} href={basic} target="_blank" rel="noreferrer">Buy Basic</a>
      </div>

      <div style={card}>
        <h2>EarnAI Standard</h2>
        <p>3 scripts bundle (48h delivery)</p>
        <a style={btn} href={standard} target="_blank" rel="noreferrer">Buy Standard</a>
      </div>

      <div style={card}>
        <h2>EarnAI Pro</h2>
        <p>5 scripts + hooks + CTA pack (48h delivery)</p>
        <a style={btn} href={pro} target="_blank" rel="noreferrer">Buy Pro</a>
      </div>
    </main>
  );
}