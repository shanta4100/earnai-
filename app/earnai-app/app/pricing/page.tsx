export default function Page() {
  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 16px" }}>
      <h1>pricing</h1>

      <div style={{ display: "grid", gap: 16 }}>
        <section style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
          <h2>earnai basic — $50</h2>
          <p>15 scripts, 2 hooks per script</p>
          <a href="https://buy.stripe.com/xxxxx">buy basic</a>
        </section>

        <section style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
          <h2>earnai standard — $100</h2>
          <p>30 scripts, 3 hooks per script</p>
          <a href="https://buy.stripe.com/yyyyy">buy standard</a>
        </section>

        <section style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
          <h2>earnai pro — $150</h2>
          <p>45 scripts, 4 hooks per script</p>
          <a href="https://buy.stripe.com/zzzzz">buy pro</a>
        </section>
      </div>

      <p style={{ marginTop: 24 }}><a href="/">back home</a></p>
    </main>
  );
}