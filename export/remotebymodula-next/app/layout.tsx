import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Remote by Modula — Replica",
  description: "High-fidelity replica landing page built with Next.js 14, Tailwind, and Framer Motion."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " antialiased"}>{children}</body>
    </html>
  );
}
