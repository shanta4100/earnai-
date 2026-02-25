// 2) app/page.tsx
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>EarnAI – QuickEarn Hub</h1>
      <p style={{ maxWidth: 640, lineHeight: 1.6 }}>
        EarnAI gives you ready-made script bundles, affiliate tools, and automation-friendly
        assets so you can start earning online faster—without coding, without subscriptions,
        and with clear records for accounting and SSDI-safe tracking on your side.
      </p>

      <div style={{ display: "flex", gap: 16, marginTop: 24, flexWrap: "wrap" }}>
        <Link
          href="/pricing"
          style={{
            padding: "10px 18px",
            background: "#2563eb",
            color: "#f9fafb",
            borderRadius: 6,
            textDecoration: "none",
          }}
        >
          View Pricing & Packages
        </Link>
        <Link
          href="/affiliate"
          style={{
            padding: "10px 18px",
            border: "1px solid #4b5563",
            borderRadius: 6,
            textDecoration: "none",
            color: "#e5e7eb",
          }}
        >
          Join Affiliate Program
        </Link>
      </div>

      <section style={{ marginTop: 40 }}>
        <h2>What you get with EarnAI</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Script bundles for content, ads, and offers</li>
          <li>Affiliate-ready links and landing copy</li>
          <li>Simple, manual-friendly recordkeeping on your side</li>
          <li>Stripe-powered payments (global, secure)</li>
        </ul>
      </section>
    </>
  );
}
