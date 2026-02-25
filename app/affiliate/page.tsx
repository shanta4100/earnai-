"use client";

import { withRef, getRef } from "../../lib/affiliate";

const links = [
  { name: "Vercel Hosting", url: "https://vercel.com" },
  { name: "Cloudflare DNS", url: "https://www.cloudflare.com" },
  { name: "Stripe Payments", url: "https://stripe.com" },
];

export default function AffiliatePage() {
  const ref = getRef();

  return (
    <main style={{ padding: 24, fontFamily: "Arial" }}>
      <h1>Affiliate Hub</h1>
      <p>
        Your referral code: <b>{ref || "none"}</b>
      </p>

      <p>Share this link:</p>
      <div style={{ padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
        <code>{`https://earnai.vercel.app/?ref=${ref || "YOURNAME"}`}</code>
      </div>

      <h2 style={{ marginTop: 24 }}>Tools We Recommend</h2>
      <ul>
        {links.map((l) => (
          <li key={l.name} style={{ margin: "10px 0" }}>
            <a href={withRef(l.url)} target="_blank" rel="noreferrer">
              {l.name}
            </a>
          </li>
        ))}
      </ul>

      <p style={{ marginTop: 24, fontSize: 12, opacity: 0.8 }}>
        Disclosure: Links may be affiliate links.
      </p>
    </main>
  );
}