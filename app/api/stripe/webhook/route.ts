// app/api/stripe/webhook/route.ts
import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature") as string;

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-10-16"
  });

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
      console.log("Payment completed:", event.data.object.id);
      break;

    case "customer.subscription.created":
      console.log("Subscription created:", event.data.object.id);
      break;

    case "customer.subscription.updated":
      console.log("Subscription updated:", event.data.object.id);
      break;

    case "customer.subscription.deleted":
      console.log("Subscription canceled:", event.data.object.id);
      break;

    default:
      console.log("Unhandled event:", event.type);
  }

  return NextResponse.json({ received: true });
}
