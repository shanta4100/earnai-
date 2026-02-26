"use client";

import { useEffect, useState } from "react";

export default function AffiliatePage() {
  const base = "https://earnai.vercel.app/?ref=";
  const [link, setLink] = useState(base + "yourname");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");
    if (ref) setLink(base + ref);
  }, []);

  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 16px" }}>
      <h1>earnai affiliate program</h1>

      <p>share your referral link and earn commission.</p>

      <h3>your link:</h3>
      <pre style={{ background: "#f6f6f6", padding: 12, borderRadius: 10, overflow: "auto" }}>
        {link}
      </pre>

      <p><strong>commission:</strong> 20% per sale (manual payout)</p>

      <p>example:</p>
      <ul>
        <li><code>https://earnai.vercel.app/?ref=yourname</code></li>
      </ul>

      <p>
        <a href="/">back home</a>
      </p>
    </main>
  );
}