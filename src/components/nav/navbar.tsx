"use client";

import Link from "next/link";
import SlideDown from "@/components/framer/slide-down";
import { useIsMobile } from "@nextui-org/use-is-mobile";
import MobileNav from "@/components/nav/mobile/nav";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
];

const Navbar = () => {
  const isMobile = useIsMobile();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header
      className={`fixed top-0 z-50 shadow-md px-0 md:px-6 py-0 md:py-4 ${
        mobileOpen ? "w-full h-full" : ""
      }`}
    >
      {isMobile ? (
        <>
          <MobileNav openChange={(o) => setMobileOpen(o)} />
        </>
      ) : (
        <SlideDown
          duration={0.5}
          delay={1}
          transition={{
            type: "spring",
          }}
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
      )}
    </header>
  );
};

export default Navbar;
