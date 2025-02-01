"use client";

import Link from "next/link";
import SlideDown from "@/components/framer/slide-down";
import MobileNav from "@/components/nav/mobile/nav";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  // { href: "/blog", label: "Blog" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header
      className={`fixed top-0 z-50 shadow-md px-0 md:px-6 py-0 md:py-4 ${
        mobileOpen ? "w-full h-full" : ""
      }`}
    >
      <div className={"block md:hidden"}>
        <MobileNav openChange={(o) => setMobileOpen(o)} />
      </div>
      <SlideDown
        duration={0.5}
        delay={1}
        transition={{
          type: "spring",
        }}
        className={"hidden md:block"}
      >
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
