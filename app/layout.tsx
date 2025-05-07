import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/shared/Navbar";
import FooterSection from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://jimvd.com'),
  title: "Jimvd Web Design & Development",
  description: "Professional web design and development services showcasing modern, responsive templates for various industries. Built with Next.js 15, React, and TypeScript.",
  keywords: "web design, web development, responsive design, Next.js, React, TypeScript, business websites, professional templates",
  openGraph: {
    siteName: "Jimvd Web Design",
    title: "Jimvd Web Design & Development",
    description: "Professional web design and development services showcasing modern, responsive templates for various industries.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/api/image",
        width: 1200,
        height: 630,
        alt: "Jimvd Web Design Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jimvd Web Design & Development",
    description: "Professional web design and development services showcasing modern, responsive templates.",
    images: ["/api/image"]
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://jimvd.com"
  },
  authors: [{ name: "Jim van duijsen", url: "https://jimvd.com" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
