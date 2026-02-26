export default function page() {
  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 16px" }}>
      <h1>pricing</h1>

      <div style={{ marginBottom: 30 }}>
        <h2>earnai basic — $50</h2>
        <p>15 scripts, 2 hooks per script</p>
        <a href="https://buy.stripe.com/xxxxx">
          <button>buy basic</button>
        </a>
      </div>

      <div style={{ marginBottom: 30 }}>
        <h2>earnai standard — $100</h2>
        <p>30 scripts, 3 hooks per script</p>
        <a href="https://buy.stripe.com/yyyyy">
          <button>buy standard</button>
        </a>
      </div>

      <div>
        <h2>earnai pro — $150</h2>
        <p>45 scripts, 4 hooks per script</p>
        <a href="https://buy.stripe.com/zzzzz">
          <button>buy pro</button>
        </a>
      </div>

      <p style={{ marginTop: 40 }}>
        <a href="/">back home</a>
      </p>
    </main>
  );
}