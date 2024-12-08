import React from "react";
import SlideUp from "@/components/framer/slide-up";
import { Tab, Tabs } from "@nextui-org/react";
import { Card, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

type Work = {
  name: string;
  title?: string;
  start: string;
  end: string;
  points: string[];
  tags: string[];
};

const work: Work[] = [
  {
    name: "Connect",
    title: "Founding Software Engineer",
    start: "January 2024",
    end: "Present",
    points: [
      "Developing a edTech platform using React, NextJS, Supabase, TailwindCSS, and Drizzle to help students navigate their post-grad journey.",
      "Adopted by 3 organizers, expecting more, with 3,300 active users.",
    ],
    tags: ["React", "NextJS", "Supabase", "TailwindCSS", "Drizzle"],
  },
  {
    name: "Freelancing",
    start: "January 2022",
    end: "Present",
    points: [
      "Worked with various clients to create products including Minecraft plugins, discord bots, and websites, bringing in over $900,000 in revenue per year.",
      "Worked with various clients to provide sysadmin, devops, and server management services.",
      "Used many technologies including Java, Typescript, NextJS, MongoDB, and Redis.",
    ],
    tags: ["Java", "Typescript", "React", "NextJS", "MongoDB", "Redis"],
  },
  {
    name: "Newlands",
    title: "Developer",
    start: "January 2022",
    end: "December 2023",
    points: [
      "Used Java, the Paper API, and MySQL to develop gameplay features for the game server.",
      "Developed a discord bot to manage player tickets and moderation using Java and JDA.",
    ],
    tags: ["Java", "MySQL"],
  },
  {
    name: "AetheriaMC / OctoMC",
    title: "Owner",
    start: "December 2019",
    end: "Present",
    points: [
      "Developed a Minecraft server network with over 1,500 unique players.",
      "Used many technologies including Java, MongoDB, Redis, Spring Boot to create a robust game server network.",
      "Managed and oversaw a team of 30+ staff members.",
      "Managed a network of linux servers and services, implementing DevOps practices to ensure efficient and reliable automated deployment, monitoring, and maintenance of infrastructure.",
    ],
    tags: [
      "Java",
      "Spring Boot",
      "MongoDB",
      "Redis",
      "Linux",
      "DevOps",
      "SysAdmin",
      "Docker",
    ],
  },
];
const Work = () => {
  return (
    <SlideUp duration={0.5} delay={0.2}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Work</h2>
        <div className={"w-full flex flex-col justify-center"}>
          <Tabs aria-label={"Work"} className={"self-center"}>
            {work.map((w, i) => (
              <Tab key={w.name} title={w.name}>
                <SlideUp duration={0.5} delay={0.2} className={"w-full"}>
                  <div className={"w-full flex flex-row place-content-center"}>
                    <Card className={"w-2/3 flex text-align-center"}>
                      <CardHeader className={"flex flex-col gap-2"}>
                        <div className={"w-full"}>
                          <div
                            className={"flex flex-row w-full justify-center"}
                          >
                            {w.title && (
                              <h1 className="text-4xl font-bold">
                                {w.title} @
                              </h1>
                            )}
                            <h1
                              className={`text-4xl font-bold ml-2 ${
                                w.title ? "text-blue-500" : ""
                              }`}
                            >
                              {w.name}
                            </h1>
                          </div>
                          <div className={"flex flex-row justify-center"}>
                            <p className={"text-gray-500 text-2xl"}>
                              {w.start} - {w.end}
                            </p>
                          </div>
                        </div>
                        <ul
                          className={
                            "flex flex-col text-left list-disc px-4 flex-wrap"
                          }
                        >
                          {w.points.map((point, i) => (
                            <li key={i} className={"text-gray-500 text-xl"}>
                              {point}
                            </li>
                          ))}
                        </ul>
                        {w.tags && (
                          <div className={"flex flex-row justify-center gap-2"}>
                            {w.tags.map((tag, i) => (
                              <Chip key={i}>{tag}</Chip>
                            ))}
                          </div>
                        )}
                      </CardHeader>
                    </Card>
                  </div>
                </SlideUp>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </SlideUp>
  );
};

export default Work;
