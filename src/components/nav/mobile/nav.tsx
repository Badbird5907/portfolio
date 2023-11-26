"use client";

import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useDimensions } from "@/components/dimensions";
import { MenuToggle } from "@/components/nav/menu-toggle";
import { Navigation } from "@/components/nav/mobile/navigation";

const sidebar = {
  open: {
    clipPath: "circle(150% at 50px 40px)",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
    height: "100%",
  },
  closed: {
    clipPath: "circle(15px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const MobileNav = ({
  openChange,
}: {
  openChange?: (isOpen: boolean) => void;
}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    if (openChange) openChange(isOpen);
  }, [isOpen, openChange]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height + 1}
      ref={containerRef}
      className={isOpen ? "h-full w-full" : ""}
    >
      <motion.div className="bg-black" variants={sidebar} />
      <AnimatePresence>
        {isOpen && <Navigation show={isOpen} />}
      </AnimatePresence>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default MobileNav;
