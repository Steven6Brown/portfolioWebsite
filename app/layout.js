import { DM_Sans } from "next/font/google";
import "./globals.css";
import { BackToTop } from './components/BackToTop';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const dm = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Steven Brown | Cybersecurity & AI Professional | Penn State",
    template: "%s | Steven Brown",
  },
  description:
    "Founder and CEO of Aquila Digital LLC and Penn State cybersecurity graduate (B.S. CAO, 3.83 GPA, NSA IST Certification). " +
    "Specializing in AI-driven security tools, NIST SP 800 & CMMC compliance, and security infrastructure. " +
    "Available for cybersecurity and AI engineering roles.",
  keywords: [
    "Steven Brown",
    "Penn State cybersecurity",
    "cybersecurity professional",
    "NSA IST certification",
    "NIST CMMC compliance",
    "AI security engineer",
    "CloakAI",
    "GolfCaddie",
    "cybersecurity portfolio",
    "security analytics",
  ],
  openGraph: {
    type: "website",
    url: "https://www.stevenrbrown.org",
    title: "Steven Brown | Cybersecurity & AI Professional",
    description:
      "Penn State grad specializing in AI-driven security tools, NIST/CMMC compliance, and security infrastructure.",
    siteName: "Steven Brown",
    images: [
      {
        url: "https://www.stevenrbrown.org/images/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Steven Brown, Cybersecurity & AI Professional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steven Brown | Cybersecurity & AI Professional",
    description:
      "Penn State cybersecurity grad building AI security tools and working with NIST/CMMC.",
    images: ["https://www.stevenrbrown.org/images/og-preview.png"],
  },
  alternates: { canonical: "https://www.stevenrbrown.org" },
  robots: { index: true, follow: true },
};

// Structured data so search engines understand who this site is about.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Steven Brown",
  url: "https://www.stevenrbrown.org",
  jobTitle: "Founder and CEO",
  worksFor: {
    "@type": "Organization",
    name: "Aquila Digital LLC",
    url: "https://www.aquiladigital.net",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "The Pennsylvania State University" },
  sameAs: [
    "https://www.linkedin.com/in/steven-b-4a699b218/",
    "https://github.com/Steven6Brown",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <SpeedInsights />
        <Analytics />
        <BackToTop />
      </body>
    </html>
  );
}

// import { DM_Sans } from "next/font/google";
// import "./globals.css";
// import { BackToTop } from './components/BackToTop';
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Analytics } from "@vercel/analytics/next";

// const dm = DM_Sans({ subsets: ["latin"] });

// export const metadata = {
//   title: "Steven Brown | Cybersecurity Professional",
//   description: "Penn State graduate with a B.S. in Cybersecurity Analytics and Operations. NSA IST Certified. Experienced in AI implementation, security infrastructure, and compliance.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={dm.className}>
//         {children}
//         <SpeedInsights />
//         <Analytics />
//         <BackToTop />
//       </body>
//     </html>
//   );
// }