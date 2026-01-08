import Stripe from "stripe";

let stripeInstance: Stripe | null = null;

export function getStripe(): Stripe {
  if (!stripeInstance) {
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2025-12-15.clover",
      typescript: true,
    });
  }
  return stripeInstance;
}

export const PLANS = {
  starter: {
    name: "Starter",
    price: 29,
    priceId: process.env.STRIPE_PRICE_ID_STARTER!,
    features: [
      "Up to 100 influencer searches/month",
      "3 active campaigns",
      "Basic analytics",
      "Email support",
    ],
    limits: {
      searches: 100,
      campaigns: 3,
      lists: 5,
    },
  },
  pro: {
    name: "Pro",
    price: 79,
    priceId: process.env.STRIPE_PRICE_ID_PRO!,
    features: [
      "Unlimited influencer searches",
      "Unlimited campaigns",
      "Advanced analytics & reports",
      "Priority support",
      "API access",
      "Team collaboration (up to 3)",
    ],
    limits: {
      searches: -1,
      campaigns: -1,
      lists: -1,
    },
  },
};
