import Hero from "@/components/pages/main/hero";
import { ReadProgress } from "@/components/read-progress";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <section>
        <Hero />
      </section>
      <section
        className="w-full h-screen flex items-center justify-center"
        id={"features"}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Dummy</h2>
          <p className="text-xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultrices eros sit amet urna fringilla, sit amet sagittis velit
            dapibus.
          </p>
        </div>
      </section>
    </main>
  );
}
