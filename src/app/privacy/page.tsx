import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";
import { SITE } from "@/lib/constants";
import { privacyDoc } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}, including SMS and mobile data disclosures.`,
};

export default function PrivacyPage() {
  return <LegalDocument doc={privacyDoc} />;
}
