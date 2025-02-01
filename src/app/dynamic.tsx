"use client";

import dynamic from "next/dynamic";

const Particles = dynamic(() => import("@/components/particles"), {
  ssr: false,
});
const Navbar = dynamic(() => import("@/components/nav/navbar"), {
  ssr: false,
});

export const DynamicParticlesNavbar = () => {
  return (
    <>
      <Particles />
      <Navbar />
    </>
  );
};
