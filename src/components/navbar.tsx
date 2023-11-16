import Link from "next/link";
import SlideDown from "@/components/framer/slide-down";
import { stagger, useAnimate } from "framer-motion";

const staggerItems = stagger(0.1, { startDelay: 1.2 });
const Navbar = () => {
  const [scope, animate] = useAnimate();
  return (
    <header className="flex items-center justify-between px-6 py-4 w-full">
      <SlideDown duration={0.5} delay={1.2}>
        <nav className="space-x-4">
          <Link
            className="text-base font-medium text-zinc-900 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-400"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-base font-medium text-zinc-900 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-400"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-base font-medium text-zinc-900 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-400"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </SlideDown>
    </header>
  );
};

export default Navbar;