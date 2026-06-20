import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Background } from "@/components/background";
import { SITE } from "@/constants/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.shortName} Sathdahara · Portfolio`,
  description: SITE.tagline,
  keywords: [
    "Sandumi Sathdahara Godage",
    "AI Engineer",
    "Frontend Engineer",
    "Software Engineer",
    "LLM Orchestration",
    "Agentic AI",
    "Next.js",
    "React",
    "Sri Lanka",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: `${SITE.shortName} Sathdahara · Portfolio`,
    description: SITE.tagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.shortName} Sathdahara · Portfolio`,
    description: SITE.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${grotesk.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Background />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
