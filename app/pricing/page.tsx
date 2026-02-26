// app/pricing/page.tsx
"use client";

import { useTransition } from "react";
import { createCheckoutSession } from "../../actions/createCheckoutSession";

export default function PricingPage() {
  const [loading, startTransition] = useTransition();

  const plans = [
    {
      name: "Starter",
      price: "$9/mo",
      stripe: process.env.NEXT_PUBLIC_PRICE_STARTER,
      features: ["Basic dashboard", "Email support", "1 user"]
    },
    {
      name: "Pro",
      price: "$29/mo",
      stripe: process.env.NEXT_PUBLIC_PRICE_PRO,
      features: ["Advanced dashboard", "Priority support", "5 users"]
    },
    {
      name: "Business",
      price: "$99/mo",
      stripe: process.env.NEXT_PUBLIC_PRICE_BUSINESS,
      features: ["Full analytics", "Dedicated support", "Unlimited users"]
    }
  ];

  async function handleCheckout(priceId: string) {
    startTransition(async () => {
      const session = await createCheckoutSession(priceId);
      if (session?.url) window.location.href = session.url;
    });
  }

  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold text-slate-900 mb-6">
          Pricing Plans
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                {plan.name}
              </h2>
              <p className="text-3xl font-bold text-slate-900 mb-4">
                {plan.price}
              </p>
              <ul className="space-y-2 text-slate-700 text-sm">
                {plan.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>

              <button
                onClick={() => handleCheckout(plan.stripe!)}
                disabled={loading}
                className="mt-6 w-full px-4 py-2 bg-slate-900 text-white rounded-lg text-sm"
              >
                {loading ? "Processing..." : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
