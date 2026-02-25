import Image from "next/image";
import Link from "next/link";

export default function PricingPage() {
  return (
    <main style={{ maxWidth: 920, margin: "0 auto", padding: 20 }}>
      <h1>Pricing</h1>
      <p>Three simple options. Pick one and checkout on Stripe.</p>

      <div style={{ margin: "18px 0" }}>
        <Image
          src="/earnai-plans.png"
          alt="EarnAI pricing plans"
          width={1000}
          height={700}
          style={{ width: "100%", height: "auto", borderRadius: 14, border: "1px solid #eee" }}
          priority
        />
      </div>

      <Link href="/order" style={{ textDecoration: "underline", fontWeight: 700 }}>
        Go to Order Page
      </Link>
    </main>
  );
}