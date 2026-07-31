export type BillingPeriod = "monthly" | "yearly";

export type PricingPlan = {
  id: string;
  name: string;
  blurb: string;
  monthly: number;
  yearly: number;
  featured?: boolean;
  badge?: string;
  cta: string;
  features: string[];
  includesFrom?: string;
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "abs-pro",
    name: "ABS Pro",
    blurb: "Core CRM, conversations, and funnels to book and close.",
    monthly: 149,
    yearly: 1490,
    cta: "Start with Pro",
    features: [
      "2 Way Text & Email Conversation",
      "GMB Messaging",
      "Facebook Messenger",
      "Web Chat",
      "CRM",
      "Reputation Management",
      "Missed Call Text Back",
      "GMB Call Tracking",
      "Form Builder",
      "Survey Builder",
      "Funnels",
      "Email Marketing",
      "SMS & Email Templates",
      "Workflows",
      "Text To Pay",
      "Certificates",
      "Gokollab",
      "Launchpad",
    ],
  },
  {
    id: "smart-pro",
    name: "Smart Pro",
    blurb: "Pipeline, campaigns, and reporting for teams scaling outreach.",
    monthly: 249,
    yearly: 2899,
    featured: true,
    badge: "Most popular",
    cta: "Choose Smart Pro",
    features: [
      "2 Way Text & Email Conversation",
      "GMB Messaging",
      "Facebook Messenger",
      "Web Chat",
      "CRM",
      "Reputation Management",
      "Missed Call Text Back",
      "GMB Call Tracking",
      "Campaigns",
      "Workflows",
      "Triggers",
      "Opportunities",
      "Text To Pay",
      "All Reporting",
      "SMS & Email Templates",
      "Certificates",
      "Gokollab",
      "Launchpad",
    ],
  },
  {
    id: "abs-platinum",
    name: "ABS Platinum",
    blurb: "Full stack — sites, communities, and every growth channel.",
    monthly: 399,
    yearly: 3990,
    cta: "Go Platinum",
    includesFrom: "Everything in ABS Pro, plus:",
    features: [
      "Social Planner",
      "Opportunities",
      "Memberships",
      "Campaigns",
      "Documents & Contracts",
      "QR Codes",
      "Invoice",
      "Trigger Links",
      "All Reporting",
      "Blogs",
      "Communities",
      "Calendar",
      "Websites",
      "Triggers",
      "Affiliate Manager",
      "Quizzes",
    ],
  },
];

export function planPrice(plan: PricingPlan, period: BillingPeriod) {
  return period === "monthly" ? plan.monthly : plan.yearly;
}

export function yearlySavings(plan: PricingPlan) {
  return plan.monthly * 12 - plan.yearly;
}
