import { motion } from "framer-motion";

type MenuItemProps = {
  i: number;
  show: boolean;
  href: string;
  title: string;
};
export const MenuItem = ({ i, show, href, title }: MenuItemProps) => {
  if (!show) return null;
  return (
    <motion.li
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: show ? i * 0.23 : 0,
      }}
      className={
        "w-full justify-center py-8 list-none mb-[20px] flex items-center cursor-pointer"
      }
    >
      <a href={href} className={"text-white"}>
        {title}
      </a>
    </motion.li>
  );
};
