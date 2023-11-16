import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

import { GeistSans } from "geist/font/sans";
import { DynamicModalProvider } from "@/components/dynamic-modal";
import Navbar from "@/components/navbar";
import Nav from "@/components/nav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className={`dark font-sans min-h-screen ${GeistSans.variable}`}>
        <DynamicModalProvider>
          <Navbar />
          <Component {...pageProps} />
        </DynamicModalProvider>
      </main>
    </NextUIProvider>
  );
}
