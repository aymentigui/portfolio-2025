import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import PageTransition from "@/components/pageTransition";
import StaitTransition from "@/components/StaitTransition";
import { Toaster } from "@/components/ui/sonner";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aimen Tighiouart – Full-Stack Developer (Next.js, React, Laravel)",
  description:
    "Portfolio of Aimen Tighiouart, a Full-Stack Developer specialized in Next.js, React, Laravel, and mobile development. I build fast, modern, and optimized web applications.",
  keywords: [
    "Aimen Tighiouart",
    "Full-Stack Developer",
    "Web Developer Algeria",
    "Next.js Developer",
    "React Developer",
    "Laravel Developer",
    "Software Engineer Portfolio",
  ],
  openGraph: {
    title: "Aimen Tighiouart – Full-Stack Developer",
    description:
      "Explore the projects, skills, and services of Aimen Tighiouart, a full-stack developer building modern and high-performance web applications.",
    url: "https://aimen-blog.com",
    siteName: "Aimen Tighiouart Portfolio",
    images: [
      {
        url: "/ana.png",
        width: 1200,
        height: 630,
        alt: "Aimen Tighiouart Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aimen Tighiouart – Full-Stack Developer",
    description:
      "Portfolio of Aimen Tighiouart, a full-stack developer specialized in Next.js, React, and Laravel.",
    images: ["/ana.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.className} relative antialiased bg-[#012431] text-white px-6 md:px-12 lg:px-24`}
      >
        <Header />
        <StaitTransition />
        <PageTransition>
          {children}
          <Toaster position="top-right" />
        </PageTransition>
      </body>
    </html>
  );
}
