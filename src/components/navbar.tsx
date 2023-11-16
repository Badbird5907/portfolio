import Link from "next/link";
import SlideDown from "@/components/framer/slide-down";
import { stagger, useAnimate } from "framer-motion";

const nav = [{ href: "/", label: "Home" }];
const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 w-full">
      <SlideDown duration={0.5} delay={1}>
        <nav className="space-x-4">
          {nav.map((item, i) => {
            return (
              <Link
                href={item.href}
                key={i}
                className={
                  "text-base font-medium text-zinc-200 hover:text-zinc-400 transition-all duration-200"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </SlideDown>
    </header>
  );
};

export default Navbar;
