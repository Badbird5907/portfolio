"use client";

import React from "react";
import { FaGitAlt, FaGithub, FaJava, FaReact } from "react-icons/fa";
import Skill, { SkillProps } from "@/components/pages/main/skill";

import NextJS from "@public/assets/next-js.svg";
import Image from "next/image";
import {
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { CgVercel } from "react-icons/cg";
import SlideUp from "@/components/framer/slide-up";

const skills: SkillProps[] = [
  {
    name: "Java",
    className: "hover:text-orange-500 hover:border-orange-500",
    icon: <FaJava className={"text-4xl"} />,
  },
  {
    name: "JavaScript",
    className: "hover:text-yellow-500 hover:border-yellow-500",
    icon: <SiJavascript className={"text-4xl"} />,
  },
  {
    name: "TypeScript",
    className: "hover:text-blue-500 hover:border-blue-500",
    icon: <SiTypescript className={"text-4xl"} />,
  },
  {
    name: "React",
    icon: <FaReact className={"text-4xl"} />,
    className: "hover:text-blue-500 hover:border-blue-500",
  },
  {
    name: "React Native",
    icon: <FaReact className={"text-4xl"} />,
    className: "hover:text-blue-500 hover:border-blue-500",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className={"text-4xl"} />,
    className: "hover:text-blue-400 hover:border-blue-400",
  },
  {
    name: "NextJS",
    className: "hover:text-white hover:border-white",
    icon: (
      <Image
        src={"/assets/next-js.svg"}
        width={35}
        height={35}
        alt={"NextJS"}
        className={"invert"}
      />
    ),
  },
  {
    name: "MongoDB",
    className: "hover:text-green-500 hover:border-green-500",
    icon: <SiMongodb className={"text-4xl"} />,
  },
  {
    name: "Spring Boot",
    className: "hover:text-green-500 hover:border-green-500",
    icon: (hover) => (
      <Image
        src={"/assets/spring-boot.svg"}
        width={35}
        height={35}
        alt={"Spring Boot"}
        className={`${hover ? "" : "grayscale"}`}
      />
    ),
  },
  {
    name: "Git",
    className: "hover:text-red-500 hover:border-red-500",
    icon: <FaGitAlt className={"text-4xl"} />,
  },
  {
    name: "Github",
    icon: <FaGithub className={"text-4xl"} />,
  },
  {
    name: "Vercel",
    icon: <CgVercel className={"text-4xl"} />,
  },
];
const Skills = () => {
  return (
    <SlideUp duration={0.5} delay={0.2}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Skills & Experience</h2>
        <div className={"w-full flex flex-wrap gap-8 justify-center"}>
          {skills.map((skill, i) => {
            return (
              <div key={i}>
                <Skill {...skill} />
              </div>
            );
          })}
        </div>
      </div>
    </SlideUp>
  );
};

export default Skills;
