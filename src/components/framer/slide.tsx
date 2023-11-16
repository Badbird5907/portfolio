import { motion } from "framer-motion";
import React from "react";

type StaggerConfig = {
  staggerChildren: number;
  delayChildren: number;
};
export type SlideProps = {
  children: React.ReactNode[] | React.ReactNode;
  duration: number;
  once?: boolean;
  fade?: boolean;
  delay?: number; // TODO: stagger children
  stagger?: StaggerConfig;
  translateY?: number;
};

const Slide = ({ once = true, ...props }: SlideProps) => {
  // the children should be hidden, and then while fading in, slide up
  if (props.stagger) {
    const container = {
      show: {
        transition: {
          staggerChildren: props.stagger.staggerChildren,
          delayChildren: props.stagger.delayChildren,
        },
      },
    };
    const variants = {
      visible: { opacity: 1, scale: 1 },
      hidden: { opacity: 0, scale: 0 },
    };
    return (
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once }}
        variants={container}
        animate={"visible"}
      >
        {Array.isArray(props.children)
          ? props.children.map((child, i) => (
              <motion.div key={i} variants={variants}>
                {child}
              </motion.div>
            ))
          : props.children}
      </motion.div>
    );
  }
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once }}
      transition={{
        duration: props.duration,
        delay: props.delay,
      }}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: props.translateY },
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default Slide;
