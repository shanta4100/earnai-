// 5) app/affiliate/page.tsx
export default function Page() {
  return (
    <main>
      <h1>EarnAI Affiliate Program</h1>
      <p style={{ maxWidth: 640, lineHeight: 1.6 }}>
        Share EarnAI with your audience and earn a commission on every completed purchase.
        This program is manual and human-reviewed to stay safe, simple, and compliant.
      </p>

      <section style={{ marginTop: 24 }}>
        <h2>Your referral link format</h2>
        <code>https://earnai.vercel.app/?ref=yourname</code>
        <p style={{ marginTop: 8 }}>
          Replace <code>yourname</code> with your chosen referral ID when you share links.
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Commission</h2>
        <p>
          <strong>20% per sale</strong>, paid manually after verification. Payouts are
          processed on a schedule you agree to with GNAIAAC LLC.
        </p>
      </section>
    </main>
  );
}
