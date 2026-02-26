const links = {
  basic: "https://buy.stripe.com/REPLACE_BASIC",
  standard: "https://buy.stripe.com/REPLACE_STANDARD",
  pro: "https://buy.stripe.com/REPLACE_PRO",
};

export default function PricingPage() {
  return (
    <main style={{ maxWidth: 980, margin: "40px auto", padding: "0 16px" }}>
      <h1>pricing</h1>
      <p>choose your package — delivery in <strong>48 hours</strong></p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginTop: 16 }}>
        <Plan
          title="earnai basic"
          price="$50"
          bullets={["15 scripts", "2 hooks per script", "48-hour delivery"]}
          href={links.basic}
        />
        <Plan
          title="earnai standard"
          price="$100"
          bullets={["30 scripts", "3 hooks per script", "48-hour delivery"]}
          href={links.standard}
        />
        <Plan
          title="earnai pro"
          price="$150"
          bullets={["45 scripts", "4 hooks per script", "48-hour delivery"]}
          href={links.pro}
        />
      </div>

      <p style={{ marginTop: 20 }}>
        <a href="/">back home</a>
      </p>
    </main>
  );
}

function Plan({
  title,
  price,
  bullets,
  href,
}: {
  title: string;
  price: string;
  bullets: string[];
  href: string;
}) {
  return (
    <section style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      <p style={{ fontSize: 22, margin: "8px 0" }}><strong>{price}</strong></p>
      <ul>
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <a
        href={href}
        style={{
          display: "inline-block",
          marginTop: 8,
          padding: "10px 14px",
          borderRadius: 10,
          border: "1px solid #111",
          textDecoration: "none",
        }}
      >
        pay with stripe
      </a>
    </section>
  );
}