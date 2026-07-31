import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";
import { SITE } from "@/lib/constants";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf8f0" },
    { media: "(prefers-color-scheme: dark)", color: "#16130b" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Precision Growth for Ambitious Brands`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "sales agency",
    "marketing agency",
    "Phoenix AZ",
    "lead generation",
    "appointment booking",
    "brand identity",
    "Joshua Mayes",
  ],
  authors: [{ name: SITE.founder }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Precision Growth for Ambitious Brands`,
    description: SITE.description,
    images: [
      {
        url: "/images/hero.jpg",
        width: 1536,
        height: 1024,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Precision Growth for Ambitious Brands`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} min-h-screen bg-background font-sans text-foreground`}
      >
        <ThemeProvider>
          <MotionProvider>
            <Navbar />
            <main id="main">{children}</main>
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
