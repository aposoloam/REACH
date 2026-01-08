import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReachMicro - Micro-Influencer Outreach Manager",
  description: "Find and connect with micro-influencers without the enterprise price tag. Simple tools for small brands.",
  keywords: ["influencer marketing", "micro-influencers", "outreach", "marketing tool"],
  openGraph: {
    title: "ReachMicro - Micro-Influencer Outreach Manager",
    description: "Find and connect with micro-influencers without the enterprise price tag.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
