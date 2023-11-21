import Hero from "@/components/pages/main/hero";
import Skills from "@/components/pages/main/skills";
import {Button, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import {Card, CardBody} from "@nextui-org/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <section>
        <Hero />
      </section>
      <section
        className="w-full h-screen flex items-center justify-center"
        id={"skills"}
      >
        <Skills />
      </section>
    </main>
  );
}
