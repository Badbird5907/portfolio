"use client";

import { Providers } from "@/app/providers";
import Navbar from "@/components/navbar";
import React from "react";
import { GeistSans } from "geist/font/sans";

import "@/styles/globals.css";
import dynamic from "next/dynamic";

const Particles = dynamic(
  () => import("@/components/particles").then((mod) => mod.Particles),
  {
    ssr: false,
  }
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={"dark"}>
      <body>
        <Providers>
          <main
            className={`dark font-sans antialiased min-h-screen ${GeistSans.variable}`}
          >
            <Particles />
            <Navbar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
