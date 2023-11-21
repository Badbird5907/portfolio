"use client";

import Hero from "@/components/pages/main/hero";
import Skills from "@/components/pages/main/skills";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <section>
        <Hero />
      </section>
      <section
        className="w-full min-h-screen flex items-center justify-center"
        id={"skills"}
      >
        <Skills />
      </section>
    </main>
  );
}
