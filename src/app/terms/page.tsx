import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";
import { SITE } from "@/lib/constants";
import { termsDoc } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${SITE.name}.`,
};

export default function TermsPage() {
  return <LegalDocument doc={termsDoc} />;
}
