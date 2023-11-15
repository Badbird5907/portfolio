import { motion } from "framer-motion";
import React from "react";

type SlideUpProps = {
  children: React.ReactNode;
  duration: number;
  once?: boolean;
  fade?: boolean;
  delay?: number; // TODO: stagger children
};

const SlideUp = ({ once = true, ...props }: SlideUpProps) => {
  // the children should be hidden, and then while fading in, slide up
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once }}
      transition={{ duration: props.duration, delay: props.delay }}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: -10 },
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default SlideUp;
