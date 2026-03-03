"use server";

import Stripe from "stripe";

export async function createBillingPortal(customerId: string) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-10-16"
  });

  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: process.env.STRIPE_SUCCESS_URL!
  });

  return { url: session.url };
}
