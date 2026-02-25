export default function OrderPage() {
  return (
    <main style={{ padding: 24, fontFamily: "Arial", maxWidth: 720, margin: "0 auto" }}>
      <h1>Thank you — your order is received ✅</h1>
      <p>To start your script, email us:</p>
      <h3>ssgpt6@aol.com</h3>

      <h2>Send these 5 items</h2>
      <ol>
        <li>Your YouTube niche (example: fitness, finance, motivation)</li>
        <li>Target audience (beginner, advanced, kids, adults)</li>
        <li>Topic keywords (3–5)</li>
        <li>Tone (funny, serious, dramatic, inspirational)</li>
        <li>Any link/channel reference (optional)</li>
      </ol>

      <p><b>Delivery:</b> within 48 hours.</p>
      <p><a href="/">Return to homepage</a></p>
    </main>
  );
}