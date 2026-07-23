import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ISHIMWE Lina Assoumani | Software Engineer & Full-Stack Developer",
  description:
    "Portfolio of ISHIMWE Lina Assoumani, Software Engineer and Full-Stack Developer. Ships mobile apps, web platforms, and IoT systems with Next.js, TypeScript, React, and Node.js.",
  keywords: [
    "ISHIMWE Lina Assoumani",
    "Software Engineer",
    "Full-Stack Developer",
    "Rwanda",
    "Next.js",
    "TypeScript",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "ISHIMWE Lina Assoumani" }],
  openGraph: {
    title: "ISHIMWE Lina Assoumani | Software Engineer & Full-Stack Developer",
    description:
      "Full-stack developer who ships mobile apps, web platforms, and IoT projects. Remote-ready, hire-ready, and still growing fast.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISHIMWE Lina Assoumani | Software Engineer",
    description:
      "Full-Stack Developer shipping production-ready applications worldwide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${sora.variable} font-sans bg-background`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
