import "@/styles/globals.css";

import { Providers } from "@/app/providers";
import React from "react";
import { GeistSans } from "geist/font/sans";

import dynamic from "next/dynamic";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Badbird5907",
  description: "My portfolio",
};

const Particles = dynamic(() => import("@/components/particles"), {
  ssr: false,
});
const Navbar = dynamic(() => import("@/components/nav/navbar"), {
  ssr: false,
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${GeistSans.className}`}>
      <body data-color-mode="dark">
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
