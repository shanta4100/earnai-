export default function page() {
  const base = "https://earnai.vercel.app/?ref="

  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 16px" }}>
      <h1>earnai affiliate program</h1>
      <p>share your referral link and earn commission.</p>

      <p>
        example: <code>{base}yourname</code>
      </p>

      <p><a href="/">back home</a></p>
    </main>
  )
}