import "@/styles/globals.css";

import { Providers } from "@/app/providers";
import Navbar from "@/components/navbar";
import React from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import dynamic from "next/dynamic";
import Footer from "@/components/footer";

const Particles = dynamic(() => import("@/components/particles"), {
  ssr: false,
});
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
