"use client";

import Link from "next/link";
import { STRIPE_LINKS } from "@/lib/stripeLinks";
import { getSavedRef } from "../components/RefTracker";

function withRef(url: string) {
  const ref = getSavedRef();
  if (!ref) return url;

  // Stripe Payment Links support query params. We’ll add a tracking id.
  const u = new URL(url);
  u.searchParams.set("client_reference_id", ref);
  return u.toString();
}

export default function OrderPage() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: 20 }}>
      <h1>Choose your EarnAI plan</h1>
      <p>48-hour delivery. Scripts delivered by email.</p>

      <div style={{ display: "grid", gap: 14 }}>
        <a href={withRef(STRIPE_LINKS.basic)} style={btn}>
          EarnAI Basic — $50
        </a>

        <a href={withRef(STRIPE_LINKS.standard)} style={btn}>
          EarnAI Standard — $100
        </a>

        <a href={withRef(STRIPE_LINKS.pro)} style={btn}>
          EarnAI Pro — $150
        </a>
      </div>

      <p style={{ marginTop: 18 }}>
        <Link href="/pricing">See pricing details</Link> ·{" "}
        <Link href="/affiliate">Affiliate link builder</Link>
      </p>
    </main>
  );
}

const btn: React.CSSProperties = {
  display: "block",
  padding: "14px 16px",
  borderRadius: 12,
  textAlign: "center",
  textDecoration: "none",
  border: "1px solid #ddd",
  fontWeight: 700,
};