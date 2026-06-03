import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeInit from "./components/ThemeInit";
import { SanityLive } from "@/sanity/lib/live";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "COMMA — Work That Moves",
  description: "Advertising & marketing communication services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <ThemeInit />
        {children}
      <SanityLive />
      </body>
    </html>
  );
}
