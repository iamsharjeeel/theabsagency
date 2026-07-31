import Link from "next/link";
import type { ReactNode } from "react";
import { SITE } from "@/lib/constants";

const biz = SITE.name;
const email = SITE.email;
const phone = SITE.phone;
const address = SITE.address;

export type LegalBlock =
  | { type: "p"; text: ReactNode }
  | { type: "ul"; items: ReactNode[] }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "callout"; title?: string; items: ReactNode[] };

export type LegalDoc = {
  title: string;
  effectiveDate: string;
  meta: ReactNode[];
  blocks: LegalBlock[];
};

function Mail({ children = email }: { children?: string }) {
  return (
    <a href={`mailto:${children}`} className="text-primary underline-offset-2 hover:underline">
      {children}
    </a>
  );
}

function Tel({ children = phone }: { children?: string }) {
  return (
    <a
      href={`tel:${children.replace(/\D/g, "")}`}
      className="text-primary underline-offset-2 hover:underline"
    >
      {children}
    </a>
  );
}

function Internal({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-primary underline-offset-2 hover:underline">
      {children}
    </Link>
  );
}

export const privacyDoc: LegalDoc = {
  title: "Privacy Policy",
  effectiveDate: SITE.legal.privacyEffective,
  meta: [
    <>Program Operator: {biz}</>,
  ],
  blocks: [
    {
      type: "callout",
      title: "SMS / Mobile Data — Carrier-Mandated Disclosure",
      items: [
        "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.",
        "Text messaging originator opt-in data and consent will not be shared with any third parties, except for aggregators and providers of the text message delivery services used to operate our SMS program.",
        "All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.",
      ],
    },
    { type: "h2", text: "1. Introduction" },
    {
      type: "p",
      text: (
        <>
          {biz} (&ldquo;{biz},&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) respects your privacy and is committed to protecting
          the personal information of our members and website visitors. This
          Privacy Policy describes how we collect, use, share, and protect
          information in connection with our services and website.
        </>
      ),
    },
    {
      type: "p",
      text: "This Policy applies to information collected from our members and website visitors. By using our Services, you acknowledge this Policy. We will notify you of material changes with at least fourteen (14) days' advance notice by email or on-site notification.",
    },
    { type: "h2", text: "2. Information We Collect" },
    { type: "h3", text: "2.1 Information You Provide" },
    {
      type: "ul",
      items: [
        "Account and registration data: name, email address, phone number, mailing address",
        "Billing information: processed by our PCI-compliant payment processor; we do not store full payment card numbers",
        "Health and fitness information necessary for safe facility use",
        "Support communications: records of your interactions with our staff and membership team",
        "Platform content: any information you submit through our website forms",
        "SMS Opt-in details: We collect and maintain records of your consent to receive SMS communications, including the method, time, and date of opt-in.",
      ],
    },
    { type: "h3", text: "2.2 Automatically Collected Information" },
    {
      type: "ul",
      items: [
        "Technical data: IP address, browser type, operating system, and device identifiers",
        "Usage data: pages visited, features accessed, session duration, and navigation paths",
        "Log data: server access logs and error records",
        "Cookie and tracking technology data (see Section 7)",
      ],
    },
    { type: "h3", text: "2.3 Information From Third Parties" },
    {
      type: "p",
      text: "We may receive information from payment processors, analytics providers, and other business data sources solely to operate and improve our services.",
    },
    { type: "h2", text: "3. How We Use Your Information" },
    {
      type: "p",
      text: "We use the information we collect for the following purposes:",
    },
    {
      type: "ul",
      items: [
        "Providing and operating our services: account management, billing, membership delivery, and support",
        "Communicating with you: transactional notices and, with your consent, marketing communications",
        "Improving our services: using aggregated and anonymized usage data to analyze performance and develop improvements",
        "Compliance and enforcement: meeting our legal obligations and enforcing our policies",
        "Security: detecting and preventing fraud, abuse, and unauthorized access",
      ],
    },
    { type: "h2", text: "4. How We Share Information" },
    {
      type: "p",
      text: (
        <>
          <strong>SMS Opt-In Data Carve-Out — Applies to All Sharing Categories Below:</strong>
          <br />
          All sharing categories exclude text messaging originator opt-in data and
          consent. This data is not shared with any third party except aggregators
          and providers of the text message delivery services used to operate our
          SMS program.
        </>
      ),
    },
    {
      type: "p",
      text: "We do not sell personal information. We share information only in the following circumstances:",
    },
    {
      type: "ul",
      items: [
        <>
          <strong>4.1 Service Providers:</strong> Vendors who provide services on
          our behalf, including cloud hosting, payment processing, and
          telecommunications carriers and SMS aggregators for message delivery.
          Service providers are permitted to use your information only as
          necessary to provide their services and are subject to confidentiality
          obligations.
        </>,
        <>
          <strong>4.2 Business Transfers:</strong> If {biz} is involved in a
          merger, acquisition, or asset sale, member information may be
          transferred to the successor entity. We will provide advance notice if
          your information becomes subject to a materially different privacy
          policy.
        </>,
        <>
          <strong>4.3 Legal Requirements:</strong> When required by law, legal
          process, or government request, or when reasonably necessary to protect
          the safety, rights, or property of {biz}, our members, or the public.
        </>,
        <>
          <strong>4.4 With Consent:</strong> For other purposes with your express
          prior consent.
        </>,
      ],
    },
    { type: "h3", text: "4.5 What We Will Not Do" },
    {
      type: "ul",
      items: [
        "Sell personal information to data brokers or advertisers",
        "Share SMS opt-in data or consent records for marketing purposes",
        "Share member data with affiliates or third parties for their independent marketing use",
      ],
    },
    { type: "h2", text: "5. Data Retention" },
    {
      type: "ul",
      items: [
        "Active account data: retained for the duration of the membership",
        "Post-termination: member data is retained for thirty (30) days before deletion, during which members may request an export",
        "Billing and transaction records: minimum of seven (7) years per tax and accounting requirements",
        "Opt-out and suppression records: retained indefinitely to support compliance obligations",
      ],
    },
    { type: "h2", text: "6. Security" },
    {
      type: "p",
      text: `${biz} maintains commercially reasonable technical, administrative, and physical safeguards, including TLS/SSL encryption in transit, encryption of sensitive data at rest, access controls, and regular security monitoring. In the event of a data breach affecting your information, we will notify you as required by applicable law.`,
    },
    {
      type: "p",
      text: "While we work to protect your data, no security system is completely impenetrable. You are responsible for maintaining the security of your account credentials.",
    },
    { type: "h2", text: "7. Cookies and Tracking" },
    {
      type: "p",
      text: "We use cookies and similar technologies to operate and improve our website:",
    },
    {
      type: "ul",
      items: [
        "Strictly necessary: Required for core functionality and security; cannot be disabled",
        "Functional: Remember your preferences and settings",
        "Analytics: Help us understand usage patterns and improve performance",
        "Marketing: Support advertising on our public website only",
      ],
    },
    {
      type: "p",
      text: "You can manage cookies through your browser settings. Disabling certain cookies may affect website functionality.",
    },
    { type: "h2", text: "8. Children's Privacy" },
    {
      type: "p",
      text: "Our online services are not directed to individuals under 18. We do not knowingly collect personal information from minors. If we learn we have collected such information inadvertently, we will delete it promptly.",
    },
    { type: "h2", text: "9. Your Privacy Rights" },
    { type: "h3", text: "9.1 General Rights" },
    {
      type: "p",
      text: (
        <>
          Subject to applicable law and identity verification, you may request
          access to, correction of, or deletion of personal information we hold
          about you. Requests can be submitted to <Mail />. We will respond
          within legally required timeframes.
        </>
      ),
    },
    { type: "h3", text: "9.2 California Residents (CCPA/CPRA)" },
    {
      type: "p",
      text: (
        <>
          California residents have rights under CCPA/CPRA, including the right
          to know, delete, correct, and limit use of sensitive personal
          information. {biz} does not sell personal information. Submit CCPA
          requests to <Mail /> with &ldquo;CCPA Request&rdquo; in the subject
          line.
        </>
      ),
    },
    { type: "h3", text: "9.3 Other State Privacy Laws" },
    {
      type: "p",
      text: (
        <>
          Residents of Virginia, Colorado, Connecticut, Texas, Oregon, Montana,
          and other states with comprehensive privacy laws have similar rights.
          Contact <Mail /> to submit a request.
        </>
      ),
    },
    { type: "h3", text: "9.4 Marketing Opt-Out" },
    {
      type: "p",
      text: (
        <>
          You may opt out of marketing communications at any time using the
          unsubscribe link in any marketing email or by contacting <Mail />.
          Opting out does not affect transactional communications.
        </>
      ),
    },
    { type: "h2", text: "10. SMS and Mobile Communications — Dedicated Disclosure" },
    {
      type: "p",
      text: (
        <>
          <strong>Carrier-Mandated Statement:</strong>
          <br />
          No mobile information will be shared with third parties or affiliates
          for marketing or promotional purposes. Information sharing to
          subcontractors in support services, such as customer service, is
          permitted. All other use case categories exclude text messaging
          originator opt-in data and consent; this information will not be shared
          with any third parties, excluding aggregators and providers of the Text
          Message services.
        </>
      ),
    },
    {
      type: "p",
      text: `When ${biz} sends SMS/MMS messages, the following applies:`,
    },
    {
      type: "ul",
      items: [
        "Phone numbers and consent records are used exclusively to deliver the program the subscriber opted into",
        "Data is transmitted to licensed telecommunications carriers and aggregators solely for message routing",
        "Opt-out records are maintained indefinitely to prevent unwanted future messages",
        "We do not use subscriber phone numbers to market our products or services beyond the enrolled program",
        "We do not sell, rent, or trade subscriber phone numbers to any third party",
      ],
    },
    {
      type: "p",
      text: (
        <>
          For full details, review our{" "}
          <Internal href="/sms-terms">SMS Terms &amp; Conditions</Internal>.
        </>
      ),
    },
    { type: "h2", text: "11. Third-Party Links" },
    {
      type: "p",
      text: `Our website may link to third-party websites. ${biz} is not responsible for the privacy practices of those sites. We encourage you to review the privacy policy of any site you visit.`,
    },
    { type: "h2", text: "12. Updates to This Policy" },
    {
      type: "p",
      text: 'We may update this Privacy Policy from time to time. We will provide at least fourteen (14) days\' advance notice of material changes. The "Effective Date" reflects the most recent update. Your continued use of our services after the effective date of any change constitutes acceptance of the updated Policy.',
    },
    { type: "h2", text: "13. Contact Us" },
    {
      type: "p",
      text: (
        <>
          {biz}
          <br />
          {address}
          <br />
          Email: <Mail />
          <br />
          Phone: <Tel />
        </>
      ),
    },
    {
      type: "p",
      text: "We will respond to privacy inquiries within thirty (30) days.",
    },
  ],
};

export const termsDoc: LegalDoc = {
  title: "Terms of Service",
  effectiveDate: SITE.legal.termsEffective,
  meta: [
    <>Program Operator: {biz}</>,
    <>
      Support: <Tel /> · Governing Law: {SITE.governingLaw}, United States
    </>,
  ],
  blocks: [
    {
      type: "p",
      text: `Please read these Terms carefully before using ${biz} facilities and services. By creating a membership account, signing up online, or accessing any part of our services, you agree to be bound by these Terms.`,
    },
    { type: "h2", text: "1. Agreement to Terms" },
    {
      type: "p",
      text: (
        <>
          These Terms of Service (&ldquo;Terms&rdquo;) are a legally binding
          agreement between {biz} (&ldquo;{biz},&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;) and the individual or entity
          (&ldquo;Member,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;)
          accessing or using our facilities, services, and website (collectively,
          the &ldquo;Services&rdquo;).
        </>
      ),
    },
    {
      type: "p",
      text: `By accessing or using the Services — including creating a membership account, making a payment, or visiting our facility — you represent that you have read, understood, and agree to these Terms. ${biz} may update these Terms from time to time. We will provide at least fourteen (14) days' notice of material changes by email or in-facility notification.`,
    },
    { type: "h2", text: "2. Services Description" },
    {
      type: "p",
      text: `${biz} provides access to camp programs, fitness and wellness amenities, and related services. Specific amenity and program access depends on your enrollment or membership tier.`,
    },
    {
      type: "p",
      text: "We will use commercially reasonable efforts to maintain facility and program availability. However, we do not guarantee uninterrupted access. Scheduled maintenance, repairs, or circumstances beyond our control may cause temporary unavailability of specific amenities or programs.",
    },
    { type: "h2", text: "3. Account Registration and Responsibilities" },
    {
      type: "p",
      text: "To use our Services, you must register and provide accurate, complete, and current information. You agree to keep your account information updated. You are responsible for:",
    },
    {
      type: "ul",
      items: [
        "Maintaining the security and confidentiality of your membership credentials and access card",
        "All activity that occurs under your account",
        "Ensuring that any family members or guests you bring comply with facility rules and these Terms",
        "Keeping your billing and contact information current",
      ],
    },
    {
      type: "p",
      text: (
        <>
          You must notify {biz} promptly at <Tel /> if you become aware of any
          unauthorized use of your membership.
        </>
      ),
    },
    { type: "h2", text: "4. Permitted and Prohibited Uses" },
    { type: "h3", text: "4.1 License Grant" },
    {
      type: "p",
      text: `Subject to these Terms and payment of all applicable fees, ${biz} grants Member a limited, non-exclusive, non-transferable, revocable license to access and use the facility and Services during your membership or enrollment term.`,
    },
    { type: "h3", text: "4.2 Prohibited Uses" },
    {
      type: "p",
      text: "Member agrees not to:",
    },
    {
      type: "ul",
      items: [
        "Use facilities or equipment in a manner that is unsafe or endangers other members or staff",
        "Violate any applicable law or regulation while on facility premises",
        "Harass, threaten, or intimidate other members, guests, or staff",
        "Damage or misuse facility equipment or property",
        "Engage in or facilitate fraudulent, deceptive, or illegal business practices on premises",
        "Transfer, sell, or share your membership access with non-members without authorization",
      ],
    },
    {
      type: "p",
      text: `${biz} may suspend memberships engaged in prohibited conduct. Where possible, we will provide notice before suspension. Suspension for serious violations may occur immediately and without prior notice.`,
    },
    { type: "h2", text: "5. Communications Compliance" },
    {
      type: "p",
      text: `When you provide your phone number and consent to receive SMS/MMS communications from ${biz}, the following applies:`,
    },
    {
      type: "ul",
      items: [
        "You must be 18 or older to opt in to SMS messaging",
        "Consent is not required as a condition of membership or purchase",
        "You may opt out at any time by replying STOP to any message",
        "Message and data rates may apply; message frequency varies",
        "Reply HELP for assistance",
        <>
          Program Description: By opting in, you agree to receive recurring
          automated promotional and transactional text messages (such as alerts,
          promotions, notifications, and reminders) from {biz}.
        </>,
      ],
    },
    { type: "h2", text: "6. Fees and Payment" },
    { type: "h3", text: "6.1 Membership Fees" },
    {
      type: "p",
      text: `Member agrees to pay all fees specified at time of enrollment. Fees are in U.S. dollars, exclusive of applicable taxes. ${biz} will provide at least thirty (30) days' advance notice of any membership fee increases, effective at Member's next renewal.`,
    },
    { type: "h3", text: "6.2 Automatic Renewal" },
    {
      type: "p",
      text: `Memberships automatically renew for successive periods equal to the original term unless Member cancels at least five (5) business days before the renewal date. By providing a payment method, Member authorizes ${biz} to charge all membership fees and applicable charges when due.`,
    },
    { type: "h3", text: "6.3 Refund Policy" },
    {
      type: "p",
      text: `Membership fees are non-refundable, except where required by applicable law. If ${biz} terminates a membership without cause, a prorated refund of prepaid fees for the unused portion of the current period will be provided.`,
    },
    { type: "h3", text: "6.4 Late Payments" },
    {
      type: "p",
      text: "Unpaid balances may result in membership suspension after reasonable notice. Accounts suspended for non-payment may be reinstated upon payment of all outstanding balances.",
    },
    { type: "h3", text: "6.5 Disputes" },
    {
      type: "p",
      text: (
        <>
          If you believe a charge is incorrect, you must notify {biz} in writing
          at <Tel /> within thirty (30) days of the invoice date.
        </>
      ),
    },
    { type: "h2", text: "7. Health and Safety" },
    {
      type: "p",
      text: `Members use the facility at their own risk. You represent that you are in good health and have no medical condition that would impair your safe use of facility equipment or participation in activities. ${biz} is not responsible for injuries that occur as a result of Member's failure to follow safety guidelines or instructions from staff.`,
    },
    {
      type: "p",
      text: `Members are responsible for consulting a physician before beginning any new exercise program. ${biz} staff and personal trainers are not physicians and cannot provide medical advice.`,
    },
    { type: "h2", text: "8. Intellectual Property" },
    {
      type: "p",
      text: `${biz} and its licensors own all right, title, and interest in and to the Club's brand, logo, website, content, and related materials. These Terms do not transfer any ownership interest to Member. Unauthorized reproduction or use of Club materials is prohibited.`,
    },
    { type: "h2", text: "9. Data and Privacy" },
    {
      type: "p",
      text: (
        <>
          {biz}&apos;s collection and use of information is described in our{" "}
          <Internal href="/privacy">Privacy Policy</Internal>, incorporated into
          these Terms by reference. We will not use your contact information or
          SMS opt-in data for purposes beyond those disclosed in our Privacy
          Policy.
        </>
      ),
    },
    { type: "h2", text: "10. Member Representations and Warranties" },
    {
      type: "p",
      text: `Member represents and warrants to ${biz}, on a continuing basis, that:`,
    },
    {
      type: "ul",
      items: [
        "Member has the legal authority to enter into and perform these Terms",
        `All information provided to ${biz} is accurate, complete, and current`,
        "Member will comply with all facility rules, staff instructions, and applicable laws while on premises",
        `Member will not use the facility in any manner that creates legal liability for ${biz}`,
      ],
    },
    { type: "h2", text: "11. Disclaimer of Warranties" },
    {
      type: "p",
      text: `The Services are provided “as is” and “as available.” To the maximum extent permitted by applicable law, ${biz} disclaims all warranties, express, implied, or statutory, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.`,
    },
    { type: "h2", text: "12. Limitation of Liability" },
    {
      type: "p",
      text: `To the maximum extent permitted by applicable law, ${biz} will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from Member's use of or inability to use the Services. ${biz}'s total aggregate liability to Member for all claims will not exceed the total membership fees paid in the three (3) calendar months immediately preceding the event giving rise to the claim.`,
    },
    { type: "h2", text: "13. Indemnification" },
    {
      type: "p",
      text: `Member agrees to indemnify, defend, and hold harmless ${biz} and its respective officers, directors, employees, and agents from and against any claims, losses, damages, liabilities, costs, and expenses arising from: Member's breach of these Terms; Member's violation of any applicable law; any injury or damage caused by Member's actions on facility premises; and claims by Member's guests arising from Member's invitation to the facility.`,
    },
    { type: "h2", text: "14. Term and Termination" },
    {
      type: "p",
      text: (
        <>
          <strong>Termination by Member:</strong> Member may cancel their
          membership at any time by providing written notice to <Tel /> at least
          five (5) business days before the next billing date. Cancellation is
          effective at the end of the then-current billing period.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          <strong>Termination by {biz}:</strong> We may immediately suspend or
          terminate a membership without notice if Member materially breaches
          these Terms, violates facility rules, or poses an imminent risk to the
          safety or wellbeing of other members or staff.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          <strong>Effect of Termination:</strong> Upon termination, Member&apos;s
          access to facilities ceases; outstanding fees through the termination
          date remain due; and member data is retained for thirty (30) days
          before deletion.
        </>
      ),
    },
    { type: "h2", text: "15. Dispute Resolution" },
    {
      type: "p",
      text: "Before initiating any formal dispute, the parties agree to attempt to resolve any issue informally. The party with a complaint must provide written notice to the other party describing the dispute and desired resolution. The parties will have thirty (30) days to negotiate in good faith.",
    },
    {
      type: "p",
      text: `These Terms are governed by the laws of the ${SITE.governingLaw}, without regard to conflict of law principles. Any claim arising under these Terms must be brought within one (1) year of the date the claiming party first knew or reasonably should have known of the facts giving rise to the claim.`,
    },
    { type: "h2", text: "16. SMS Messaging Communications" },
    {
      type: "p",
      text: (
        <>
          Users must be 18+ to opt in. Mobile carriers are not liable for delayed
          or undelivered messages. Message and data rates may apply and message
          frequency varies. Text STOP to cancel and HELP for help. Full
          SMS-specific terms are available at{" "}
          <Internal href="/sms-terms">/sms-terms</Internal>.
        </>
      ),
    },
    { type: "h2", text: "17. General Provisions" },
    {
      type: "ul",
      items: [
        <>
          <strong>Entire Agreement:</strong> These Terms, together with the
          Privacy Policy, constitute the entire agreement between the parties
          regarding our Services.
        </>,
        <>
          <strong>Severability:</strong> If any provision is found unenforceable,
          it will be modified to the minimum extent necessary. All other
          provisions remain in full force.
        </>,
        <>
          <strong>No Waiver:</strong> Failure to enforce any provision does not
          waive the right to enforce it in the future.
        </>,
        <>
          <strong>Assignment:</strong> Member may not assign these Terms without{" "}
          {biz}&apos;s prior written consent.
        </>,
        <>
          <strong>Force Majeure:</strong> Neither party is liable for delays or
          failures caused by circumstances beyond its reasonable control.
        </>,
        <>
          <strong>Updates:</strong> {biz} will provide at least fourteen (14)
          days&apos; advance notice of material changes to these Terms.
        </>,
      ],
    },
    { type: "h2", text: "Contact Us" },
    {
      type: "p",
      text: (
        <>
          {biz}
          <br />
          {address}
          <br />
          Email: <Mail />
          <br />
          Phone: <Tel />
        </>
      ),
    },
  ],
};

export const smsTermsDoc: LegalDoc = {
  title: "SMS Messaging Terms",
  effectiveDate: SITE.legal.smsEffective,
  meta: [
    <>Program Operator: {biz}</>,
    <>Program Name: {biz} Messaging Program</>,
    <>
      Support: <Mail /> | <Tel />
    </>,
  ],
  blocks: [
    {
      type: "callout",
      title: "Carrier-Mandated Privacy Disclosure",
      items: [
        "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.",
        "Text messaging originator opt-in data and consent will not be shared with any third parties, except for aggregators and providers of the text message delivery services used to deliver your messages.",
        "All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.",
      ],
    },
    { type: "h2", text: "1. Program Description" },
    {
      type: "p",
      text: `${biz} operates the ${biz} Messaging Program — a service that delivers SMS and MMS messages to individuals who have affirmatively opted in. By participating in this messaging program, you agree to these SMS Terms of Service.`,
    },
    {
      type: "p",
      text: "Message types that may be delivered through the Program include:",
    },
    {
      type: "ul",
      items: [
        "Appointment reminders and scheduling confirmations",
        "Membership updates, renewals, and account alerts",
        "Facility notifications (closures, maintenance, schedule changes)",
        "Promotional offers and marketing messages (where express consent was separately obtained)",
        "Customer feedback and survey requests",
        "Business follow-up and lead communications",
      ],
    },
    { type: "h2", text: "2. Consent and Opt-In" },
    {
      type: "p",
      text: `You should receive messages through this Program only if you have provided affirmative, documented opt-in consent to ${biz}. Consent methods include checking a clearly labeled opt-in checkbox on a web form or providing consent in writing.`,
    },
    {
      type: "ul",
      items: [
        "Consent to receive SMS messages is not a condition of membership or any purchase.",
        "You may opt out at any time without affecting your access to any goods or services.",
        "Consent is specific to the program for which it was collected and does not extend to other programs without your separate affirmative consent.",
      ],
    },
    { type: "h3", text: "How to Opt-Out" },
    {
      type: "p",
      text: "Reply STOP, CANCEL, UNSUBSCRIBE, QUIT, END, or OPT-OUT to any message. A final confirmation will be sent.",
    },
    {
      type: "p",
      text: (
        <>
          You may also email <Mail /> with &ldquo;SMS Opt-Out&rdquo; and your
          mobile number in the body.
        </>
      ),
    },
    {
      type: "p",
      text: "Opt-out requests processed within 10 business days per FCC requirements.",
    },
    { type: "h3", text: "Need Help?" },
    {
      type: "p",
      text: "Text HELP to the number that messaged you to receive support contact information.",
    },
    {
      type: "p",
      text: (
        <>
          Email: <Mail />
          <br />
          Phone: <Tel />
        </>
      ),
    },
    { type: "h2", text: "3. Message Frequency" },
    {
      type: "p",
      text: "Message frequency varies by program type. Promotional programs typically send between 2 and 8 messages per month; transactional programs send messages in response to specific activity or triggers such as appointment confirmations or membership renewals.",
    },
    { type: "h2", text: "4. Message and Data Rates" },
    {
      type: "p",
      text: `Message and data rates may apply to messages you receive and send. These rates are set by your wireless carrier and are not controlled by ${biz}. ${biz} does not charge you directly for receiving messages. Contact your wireless provider for details about your plan's messaging rates.`,
    },
    { type: "h2", text: "5. Carrier Disclaimer" },
    {
      type: "p",
      text: `Carriers are not liable for delayed or undelivered messages. Message delivery depends on network availability, carrier filtering, and factors outside ${biz}'s control. We will make commercially reasonable efforts to ensure reliable message delivery but cannot guarantee delivery timing or completeness.`,
    },
    { type: "h2", text: "6. Privacy and Data Handling" },
    {
      type: "p",
      text: (
        <>
          <strong>Carrier-Mandated Statement:</strong>
          <br />
          No mobile information will be shared with third parties or affiliates
          for marketing or promotional purposes. Information sharing to
          subcontractors in support services, such as customer service, is
          permitted. All other use case categories exclude text messaging
          originator opt-in data and consent; this information will not be shared
          with any third parties, excluding aggregators and providers of the Text
          Message services.
        </>
      ),
    },
    {
      type: "ul",
      items: [
        "Your number is provided to telecommunications carriers and SMS aggregators solely to route and deliver your messages",
        "Your opt-in record is retained to document compliance with applicable law",
        "Your number is not used to market products or services beyond the enrolled program",
        "Your number is not sold, rented, or shared with any marketing list or data broker",
        "Your number is not shared with other businesses for their independent marketing use",
      ],
    },
    {
      type: "p",
      text: (
        <>
          For complete details, review our{" "}
          <Internal href="/privacy">Privacy Policy</Internal>.
        </>
      ),
    },
    { type: "h2", text: "7. Compliance" },
    {
      type: "p",
      text: `The ${biz} Messaging Program is operated in compliance with applicable requirements, including:`,
    },
    {
      type: "ul",
      items: [
        "The Telephone Consumer Protection Act (TCPA)",
        "FCC implementing regulations, including 2025 amendments",
        "CTIA Messaging Principles and Best Practices",
        "Wireless carrier Acceptable Use Policies",
        "10DLC campaign registration requirements",
      ],
    },
    { type: "h3", text: "Quick Reference — Program Summary" },
    {
      type: "ul",
      items: [
        <>Program Name: {biz} Messaging Program</>,
        <>Operated By: {biz}</>,
        "Opt-Out Keywords: STOP, CANCEL, UNSUBSCRIBE, QUIT, END, OPT-OUT",
        "Help Keyword: HELP",
        "Message Frequency: Varies by program (2–8/month typical for promotional)",
        "Carrier Charges: Message and data rates may apply",
        <>
          Support Email: <Mail />
        </>,
        <>
          Support Phone: <Tel />
        </>,
        <>
          Privacy Policy: <Internal href="/privacy">/privacy</Internal>
        </>,
        <>
          Full SMS Terms: <Internal href="/sms-terms">/sms-terms</Internal>
        </>,
        <>
          Full Terms of Service: <Internal href="/terms">/terms</Internal>
        </>,
      ],
    },
    { type: "h2", text: "8. Updates to These Terms" },
    {
      type: "p",
      text: (
        <>
          {biz} reserves the right to modify these SMS Terms by posting an
          updated version at{" "}
          <Internal href="/sms-terms">/sms-terms</Internal>. Material changes
          will be communicated to active program participants. Your continued
          participation after the effective date of any update constitutes
          acceptance.
        </>
      ),
    },
    { type: "h2", text: "9. Governing Law" },
    {
      type: "p",
      text: (
        <>
          These SMS Terms are governed by the laws of the {SITE.governingLaw}{" "}
          and are subject to the dispute resolution provisions in our full{" "}
          <Internal href="/terms">Terms of Service</Internal>.
        </>
      ),
    },
  ],
};
