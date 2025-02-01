"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useMemo, useState } from "react";

export type SkillProps = {
  name: string;
  icon: React.ReactNode | ((hover: boolean) => React.ReactNode);
  className?: string;
  description?: string;
};
const Skill = (props: SkillProps) => {
  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  }, []);
  const [hover, setHover] = useState(false);

  const Component = () => {
    return (
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`border-2 w-fit p-4 rounded-xl border-gray-500 flex flex-row hover:scale-110 transition-all duration-200 ${props.className}`}
      >
        <div className={`text-6xl pr-0 md:pr-4`}>
          {typeof props.icon === "function" ? props.icon(hover) : props.icon}
        </div>
        <div className={"hidden md:block"}>
          <div className={"text-2xl font-bold self-center cursor-default"}>
            {props.name}
          </div>
        </div>
      </div>
    );
  };
  if (props.description && !isMobile) {
    return (
      <div>
        <Popover>
          <PopoverTrigger>
            <Component />
          </PopoverTrigger>
          <PopoverContent>
            <div className={"px-1 py-2"}>
              <span>{props.description}</span>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  }
  return <Component />;
};

export default Skill;
