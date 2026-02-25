export default function AffiliatePage() {
  const base = "https://earnai.vercel.app/?ref=";

  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 16px" }}>
      <h1>EarnAI Affiliate Program</h1>
      <p>Share your referral link and earn commission.</p>

      <h3>Your Link:</h3>
      <pre
        style={{
          background: "#f6f6f6",
          padding: 12,
          borderRadius: 10,
        }}
      >
        {base}YOURNAME
      </pre>

      <p>
        <strong>Commission:</strong> 20% per sale
      </p>
    </main>
  );
}