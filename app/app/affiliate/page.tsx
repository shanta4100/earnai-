"use client";

import { useEffect, useState } from "react";

export default function AffiliatePage() {
  const base = "https://earnai.vercel.app/?ref=";
  const [link, setLink] = useState(base + "YOURNAME");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");
    if (ref) setLink(base + ref);
  }, []);

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
          overflow: "auto",
        }}
      >
        {link}
      </pre>

      <p>Example:</p>
      <ul>
        <li>
          <code>https://earnai.vercel.app/?ref=YOURNAME</code>
        </li>
      </ul>

      <p>
        <strong>Commission:</strong> 20% per sale (manual payout)
      </p>

      <p>
        When someone buys through your link, the referral code stays saved and is
        attached during checkout.
      </p>

      <p>
        <a href="/">Back Home</a>
      </p>
    </main>
  );
}
