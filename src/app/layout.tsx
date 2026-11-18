import type { Metadata, Viewport } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site-config";
import SmoothScroll from "@/components/motion/SmoothScroll";
import ScrollScenes from "@/components/motion/ScrollScenes";
import Atmosphere from "@/components/layout/Atmosphere";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";
import BloodCursor from "@/components/layout/BloodCursor";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

const title = `${site.name} · Frontend Developer & Project Manager`;
const description =
  "Ishimwe Lina Assoumani is a frontend developer and project manager from Rwanda, CEO & Co-Founder of QLine Technologies, studying at Rwanda Coding Academy.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Ishimwe Lina Assoumani",
    "Lina Assoumani",
    "frontend developer Rwanda",
    "project manager",
    "creative technologist",
    "full-stack developer",
    "embedded systems",
    "QLine Technologies",
    "Rwanda Coding Academy",
    "Kigali",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title,
    description,
    locale: "en_US",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#090204",
  colorScheme: "dark",
};

const bootScript = `try{var d=document.documentElement;d.classList.add('is-loading');if(!matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('motion-ok')}if('scrollRestoration' in history){history.scrollRestoration='manual'}}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: "Frontend Developer and Project Manager",
    alumniOf: { "@type": "EducationalOrganization", name: site.education.school },
    worksFor: { "@type": "Organization", name: site.leadership.company },
    address: { "@type": "PostalAddress", addressLocality: "Kigali", addressCountry: "RW" },
    sameAs: [site.github.href, site.linkedin.href],
  };

  return (
    <html lang="en" className={quicksand.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <noscript>
          <style>{`html.is-loading,html.is-loading body{overflow:auto!important}[data-loader]{display:none!important}.motion-ok [data-hero] > span,.motion-ok [data-reveal] .mask > span{transform:none!important}.motion-ok [data-hero],.motion-ok [data-reveal],.motion-ok [data-reveal] > *,.motion-ok [data-reveal] .w{opacity:1!important;transform:none!important;clip-path:none!important}`}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a
          href="#main"
          className="fixed left-4 top-4 z-[120] -translate-y-24 rounded-full bg-paper px-5 py-2 text-sm font-semibold text-night transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Atmosphere />
        <SmoothScroll />
        <ScrollScenes />
        <Loader />
        <Header />
        <main id="main" className="relative z-10">
          {children}
        </main>
        <Footer />
        <BloodCursor />
      </body>
    </html>
  );
}
