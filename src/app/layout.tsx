import "@/styles/globals.css";

import { Providers } from "@/app/providers";
import React from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import dynamic from "next/dynamic";
import Footer from "@/components/footer";
import { Metadata } from "next";
import Navbar from "@/components/nav/navbar";

const Particles = dynamic(() => import("@/components/particles"), {
  ssr: false,
});
export const metadata: Metadata = {
  title: "Badbird5907",
  description: "My portfolio",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${GeistSans.className}`}>
      <body>
        <Providers>
          <main className={`dark font-sans antialiased min-h-screen`}>
            <Particles />
            <Navbar />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
