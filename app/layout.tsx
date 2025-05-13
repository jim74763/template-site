import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/shared/Navbar";
import FooterSection from "@/components/footer";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jimvd.xyz"),
  title: "Jimvd Web Design & Development",
  description:
    "Professional web design and development services showcasing modern, responsive templates for various industries. Built with Next.js 15, React, and TypeScript.",
  keywords:
    "web design, web development, responsive design, Next.js, React, TypeScript, business websites, professional templates",
  openGraph: {
    siteName: "Jimvd Web Design",
    title: "Jimvd Web Design & Development",
    description:
      "Professional web design and development services showcasing modern, responsive templates for various industries.",
    type: "website",
    images: [
      {
        url: "https://jimvd.xyz/api/og",
        width: 1200,
        height: 630,
        alt: "Jimvd Web Design Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jimvd Web Design & Development",
    description:
      "Professional web design and development services showcasing modern, responsive templates.",
    images: ["https://jimvd.xyz/api/og"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://jimvd.xyz",
  },
  authors: [{ name: "Jim van duijsen", url: "https://jimvd.com" }],
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
        <script defer src="https://umami.app.jimvd.xyz/script.js" data-website-id="8ceef7e6-25ee-4434-9403-2178553a6565"></script>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar/>
          <main className="flex-grow">{children}</main>
          <FooterSection/>
        </ThemeProvider>
      </body>
    </html>
  );
}
