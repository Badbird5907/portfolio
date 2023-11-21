"use client";
import React from "react";
import Slide, { SlideProps } from "@/components/framer/slide";

const SlideUp = (props: SlideProps & Omit<SlideProps, "translateY">) => {
  return <Slide {...props} translateY={-10} />;
};

export default SlideUp;
