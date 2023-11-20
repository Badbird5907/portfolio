import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

import { GeistSans } from "geist/font/sans";
import { DynamicModalProvider } from "@/components/dynamic-modal";
import Navbar from "@/components/navbar";
import dynamic from "next/dynamic";

const Particles = dynamic(
  () => import("@/components/particles").then((mod) => mod.Particles),
  {
    ssr: false,
  }
);
const RouterProgress = dynamic(() => import("@/components/router-progress"), {
  ssr: false,
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <RouterProgress />
      <main
        className={`dark font-sans antialiased min-h-screen ${GeistSans.variable}`}
      >
        <DynamicModalProvider>
          <Particles />
          <Navbar />
          <Component {...pageProps} />
        </DynamicModalProvider>
      </main>
    </NextUIProvider>
  );
}
