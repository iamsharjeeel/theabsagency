export const SITE = {
  name: "The A.B.S. Agency",
  wordmark: "THE A.B.S. AGENCY",
  tagline: "Precision growth for ambitious brands.",
  description:
    "A boutique sales & marketing agency in Phoenix, AZ. We help small businesses and sales professionals generate leads, book appointments, and scale revenue.",
  founder: "Joshua Mayes",
  location: "Phoenix, AZ",
  phone: "(602) 555-0148",
  email: "hello@theabsagency.com",
  url: "https://theabsagency.com",
  social: {
    instagram: "https://instagram.com/theabsagency",
    linkedin: "https://linkedin.com/company/theabsagency",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/services#contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    teaser:
      "Campaigns engineered to attract qualified leads and fill your pipeline with buyers ready to talk.",
    summary:
      "Paid and organic campaigns built to put qualified buyers on your calendar.",
    detail:
      "We set up funnels, creative tests, and channel automation so attention turns into booked conversations. Every channel is scored against appointments and revenue.",
  },
  {
    id: "brand-identity",
    title: "Brand Identity Development",
    teaser: "Identity systems that make premium pricing feel obvious.",
    summary:
      "Positioning that makes your brand feel intentional, and priced accordingly.",
    detail:
      "We clarify voice, visuals, and market stance so sales materials and digital touchpoints reinforce the same offer. The goal is clearer positioning that supports the price you want to charge.",
  },
  {
    id: "market-analysis",
    title: "Market Analysis",
    teaser: "Competitive intel that tells you exactly where to spend next.",
    summary:
      "Category mapping that shows where demand sits and which message wins it.",
    detail:
      "Before we scale spend or redesign creative, we map buyer motivations, competitive gaps, and conversion barriers. You get a short list of opportunities the team can act on immediately.",
  },
  {
    id: "creative-design",
    title: "Creative Design",
    teaser: "Pages and collateral built to move a prospect to yes.",
    summary:
      "Landing pages, decks, and campaign visuals built to guide a prospect to a decision.",
    detail:
      "We design pages and sales assets around hierarchy, clarity, and conversion. Automation keeps iteration fast so creative stays tied to what the pipeline actually needs.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "We stopped guessing which leads to call back. ABS built a pipeline that tells us who's ready.",
    author: "Marcus Chen",
    role: "Founder, Mesa Growth Partners",
    sample: true,
  },
  {
    quote:
      "They rebuilt our brand and our funnel at the same time. Booked calls went up 93%.",
    author: "Elena Vargas",
    role: "Principal, Vargas Advisory",
    sample: true,
  },
  {
    quote:
      "First agency that reported on booked calls and closed revenue instead of impressions.",
    author: "David Okonkwo",
    role: "VP Sales, Sunbelt Logistics",
    sample: true,
  },
] as const;

export const FAQS = [
  {
    question: "What sets The A.B.S. Agency apart?",
    answer:
      "We are a boutique consultancy judged by appointments booked and revenue grown. Automation is built in-house so delivery stays sharp.",
  },
  {
    question: "How do you approach market research?",
    answer:
      "We combine competitive mapping, buyer interviews where needed, and performance signal analysis. Research feeds messaging, creative, channel selection, and sales enablement from day one.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes. We partner with small businesses and sales professionals who want systems that generate leads and book appointments.",
  },
  {
    question: "How are results measured?",
    answer:
      "Primary metrics: qualified leads, booked appointments, and attributed revenue. Engagement and brand signals matter only when they move those outcomes.",
  },
  {
    question: "What is a typical timeline to results?",
    answer:
      "Foundation work (positioning, tracking, creative, automation) usually lands in the first 2–4 weeks. Pipeline movement depends on offer complexity and channel maturity.",
  },
] as const;

export const VALUES = [
  {
    title: "Discretion",
    description:
      "No campaigns run for their own sake. Every dollar spent should trace back to a booked call.",
  },
  {
    title: "Precision",
    description:
      "Every channel, message, and design choice has a job. We cut what doesn't convert and double down on what does.",
  },
  {
    title: "Revenue, Not Reach",
    description:
      "We report on appointments booked and deals closed. Impressions don't make the summary.",
  },
] as const;

export const ABOUT_STATS = [
  { value: "500+", label: "Clients served" },
  { value: "133+", label: "Avg appointments booked / mo" },
] as const;
