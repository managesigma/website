import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteFooter from "./components/Footer";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Sigmatronics | Global Technology & Innovation",
  description:
    "Sigmatronics is a global technology company delivering hardware, software, solutions, and consultancy for enterprise digital transformation.",
  metadataBase: new URL("https://sigmatronics.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-slate-900">
        <Navbar />
        <div className="pt-24">{children}</div>
        <SiteFooter />
        <Chatbot />
      </body>
    </html>
  );
}
