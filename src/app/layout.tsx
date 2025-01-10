import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { SpeedInsights } from "@vercel/speed-insights/next";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaaS Landing Page - PT/BR",
  description: "Modelo Criado por Matheus Duarte",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
