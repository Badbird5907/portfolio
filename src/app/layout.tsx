import "@/styles/globals.css";

import { Providers } from "@/app/providers";
import React from "react";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import dynamic from "next/dynamic";
import Footer from "@/components/footer";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const Particles = dynamic(() => import("@/components/particles"), {
  ssr: false,
});
const Navbar = dynamic(() => import("@/components/nav/navbar"), {
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
            <Particles />
            <Navbar />
            <div className={"min-h-screen"}>{children}</div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
