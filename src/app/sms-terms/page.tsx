import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";
import { SITE } from "@/lib/constants";
import { smsTermsDoc } from "@/lib/legal";

export const metadata: Metadata = {
  title: "SMS Messaging Terms",
  description: `SMS messaging terms and carrier disclosures for the ${SITE.name} Messaging Program.`,
};

export default function SmsTermsPage() {
  return <LegalDocument doc={smsTermsDoc} />;
}
