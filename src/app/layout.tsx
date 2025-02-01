import "@/styles/globals.css";

import { Providers } from "@/app/providers";
import React from "react";
import Script from "next/script";
import { GeistMono } from "geist/font/mono";

import Footer from "@/components/footer";
import { type Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DynamicParticlesNavbar } from "./dynamic";
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
    <html lang="en" className={`dark ${GeistMono.className}`}>
      <SpeedInsights />
      <Script
        src="https://assets.onedollarstats.com/tracker.js"
        data-site-id="badbird.dev"
      />
      <body data-color-mode="dark">
        <Providers>
          <main
            className={`dark font-sans antialiased min-h-screen text-foreground bg-background`}
          >
            <DynamicParticlesNavbar />
            <div className={"min-h-screen"}>{children}</div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
