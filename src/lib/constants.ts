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
    summary:
      "Campaigns engineered to attract qualified leads and fill your pipeline with buyers ready to talk.",
    detail:
      "We build and operate paid and organic systems that surface your offer to the right audience — then convert attention into booked conversations. From funnel architecture to creative testing and automation, every channel is measured against appointments and revenue, not vanity metrics.",
  },
  {
    id: "brand-identity",
    title: "Brand Identity Development",
    summary:
      "Quiet luxury positioning that makes your brand feel intentional, credible, and unmistakably yours.",
    detail:
      "We clarify your voice, visual system, and market stance so every touchpoint reinforces trust. Identity work here is strategic — designed to elevate perception, support premium pricing, and create consistency across sales materials, digital presence, and client experience.",
  },
  {
    id: "market-analysis",
    title: "Market Analysis",
    summary:
      "Clear competitive intelligence that reveals where demand lives and how to win it.",
    detail:
      "Before we scale spend or redesign creative, we map your category: buyer motivations, competitive gaps, messaging angles, and conversion barriers. The output is actionable — prioritized opportunities your sales and marketing teams can execute against immediately.",
  },
  {
    id: "creative-design",
    title: "Creative Design",
    summary:
      "Refined assets that convert — landing pages, sales collateral, and campaign visuals with purpose.",
    detail:
      "Design is never decoration. We craft pages, decks, and campaign systems that guide prospects toward a decision. Every layout, type choice, and visual hierarchy is tuned for clarity, trust, and conversion — powered by automation so iteration stays fast.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "ABS didn't add noise. They installed a system that books meetings while we focus on closing.",
    author: "Marcus Chen",
    role: "Founder, Mesa Growth Partners",
  },
  {
    quote:
      "The brand work elevated how we're perceived — and the pipeline followed. Discreet, precise, effective.",
    author: "Elena Vargas",
    role: "Principal, Vargas Advisory",
  },
  {
    quote:
      "Finally a partner that measures success the way we do: appointments set and revenue closed.",
    author: "David Okonkwo",
    role: "VP Sales, Sunbelt Logistics",
  },
] as const;

export const FAQS = [
  {
    question: "What sets The A.B.S. Agency apart?",
    answer:
      "We operate as a boutique consultancy — not a volume agency. Our work is discreet, systems-driven, and judged by appointments booked and revenue grown. Automation is built in-house so delivery stays sharp and scalable without the usual agency theater.",
  },
  {
    question: "How do you approach market research?",
    answer:
      "We combine competitive mapping, buyer interviews where needed, and performance signal analysis. Research is never a binder on a shelf — it feeds messaging, creative, channel selection, and sales enablement from day one.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes. We partner with ambitious small businesses and sales professionals who want precision over noise. If you're ready to invest in systems that generate leads and book appointments, we're built for you.",
  },
  {
    question: "How are results measured?",
    answer:
      "Primary metrics: qualified leads, booked appointments, and attributed revenue. Secondary signals — engagement, brand perception, conversion rate — are tracked only insofar as they move those outcomes.",
  },
  {
    question: "What is a typical timeline to results?",
    answer:
      "Foundation work (positioning, tracking, creative, automation) usually lands in the first 2–4 weeks. Measurable pipeline movement commonly appears within 30–60 days, depending on offer complexity and channel maturity.",
  },
] as const;

export const VALUES = [
  {
    title: "Discretion",
    description:
      "Quiet execution. No loud campaigns for the sake of noise — just work that respects your brand and your clients' trust.",
  },
  {
    title: "Precision",
    description:
      "Every channel, message, and design choice is intentional. We cut what doesn't convert and double down on what does.",
  },
  {
    title: "Results over noise",
    description:
      "Vanity metrics don't impress us. Leads, appointments, and revenue do — and that's how we keep score.",
  },
] as const;
