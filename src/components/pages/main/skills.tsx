import React from "react";
import { FaReact } from "react-icons/fa";
import Skill from "@/components/pages/main/skill";

const Skills = () => {
  return (
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Skills</h2>
      <Skill
        name="React"
        icon={FaReact}
        className={"hover:text-blue-500 hover:border-blue-500"}
        description={"Stuff"}
      />
    </div>
  );
};

export default Skills;
