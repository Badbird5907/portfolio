import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const nav = [
  { href: "/", title: "Home" },
  { href: "/blog/", title: "Blog" },
];

export const Navigation = ({ show }: { show: boolean }) => (
  <motion.ul variants={variants} className={"w-full absolute top-[100px]"}>
    {nav.map((stuff, i: number) => (
      <MenuItem i={i} key={i} show={show} {...stuff} />
    ))}
  </motion.ul>
);
