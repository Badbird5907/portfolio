import React from "react";
import { FaJava, FaReact } from "react-icons/fa";
import Skill, {SkillProps} from "@/components/pages/main/skill";

import NextJS from "@public/assets/next-js.svg";
import Image from "next/image";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";


const skills: SkillProps[] = [
  {
    name: "React",
    icon: <FaReact className={"text-4xl"}/>,
    className: "hover:text-blue-500 hover:border-blue-500",
    description:
      "I have been building websites with React and Next.js for over a year now.",
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
    description:
      "I have been building websites with React and Next.js for over a year now.",
  },
  {
    name: "MongoDB",
    className: "hover:text-green-500 hover:border-green-500",
    icon: <SiMongodb className={"text-4xl"} />,
  },
  {
    name: "Java",
    className: "hover:text-orange-500 hover:border-orange-500",
    icon: <FaJava className={"text-4xl"} />,
    description:
      "I have been building applications and Minecraft plugins with java for over 4 years.",
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
];
const Skills = () => {
  return (
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Skills</h2>
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
  );
};

export default Skills;
