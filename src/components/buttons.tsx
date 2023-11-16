import CustomButton from "@/components/button";
import { FaGithub, FaTwitter } from "react-icons/fa";
import React from "react";
import SlideUp from "@/components/framer/slide-up";

const Buttons = () => {
  return (
    <SlideUp
      duration={0.5}
      stagger={{ staggerChildren: 0.1, delayChildren: 0.5 }}
    >
      <CustomButton
        href={"https://github.com/Badbird5907"}
        variant={"faded"}
        className={"text-white"}
      >
        <FaGithub /> GitHub
      </CustomButton>
      <CustomButton
        href={"https://github.com/Badbird5907"}
        color={"primary"}
        className={"text-white"}
      >
        <FaTwitter /> Twitter
      </CustomButton>
    </SlideUp>
  );
};

export default Buttons;
