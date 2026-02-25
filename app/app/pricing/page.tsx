const STRIPE_LINKS = {
  basic: "https://buy.stripe.com/bJe8w01Mn9HAe2Gfk557w03",
  standard: "https://buy.stripe.com/fZufZggHh4ng0bQ4Fr57w04",
  pro: "https://buy.stripe.com/3cI4gydv53jc2jY2xj57w05",
};

export default function PricingPage() {
  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 16px" }}>
      <h1>EarnAI Packages</h1>

      <ul>
        <li>
          <strong>EarnAI Basic — $50</strong>
          <div>15 scripts • 2 hooks/script</div>
          <a href={STRIPE_LINKS.basic}>Pay Basic</a>
        </li>
        <br />
        <li>
          <strong>EarnAI Standard — $100</strong>
          <div>30 scripts • 3 hooks/script</div>
          <a href={STRIPE_LINKS.standard}>Pay Standard</a>
        </li>
        <br />
        <li>
          <strong>EarnAI Pro — $150</strong>
          <div>45 scripts • 4 hooks/script</div>
          <a href={STRIPE_LINKS.pro}>Pay Pro</a>
        </li>
      </ul>

      <p>
        <a href="/">Back Home</a>
      </p>
    </main>
  );
}