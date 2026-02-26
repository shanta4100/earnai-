export default function PricingPage() {
  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 16px" }}>
      <h1>EarnAI Pricing</h1>
      <p>Choose a package. Delivery: within 48 hours.</p>

      <ul>
        <li>
          <strong>Basic — $50</strong> (15 scripts, 2 hooks/script){" "}
          <a href="https://buy.stripe.com/xxxxx">Buy</a>
        </li>
        <li>
          <strong>Standard — $100</strong> (30 scripts, 3 hooks/script){" "}
          <a href="https://buy.stripe.com/yyyyy">Buy</a>
        </li>
        <li>
          <strong>Pro — $150</strong> (45 scripts, 4 hooks/script){" "}
          <a href="https://buy.stripe.com/zzzzz">Buy</a>
        </li>
      </ul>

      <p>
        After payment, email your topic + niche to <strong>ssgpt6@aol.com</strong>.
      </p>

      <p>
        <a href="/order">Go to Order page</a>
      </p>
    </main>
  );
}