import React, { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

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
      "Adopted by 3 organizations, expecting more, with 3,300 active users.",
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
const Work = () => { // hi ethan :]
  const [selectedCompany, setSelectedCompany] = useState(work[0].name)
  const selectedWork = useMemo(() => {
    return work.find((item) => item.name === selectedCompany)
  }, [selectedCompany])


  return (
    <div className="min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <h1 className="text-4xl font-mono mb-8 inline-block relative">
            <span className="font-bold">Work</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500" />
          </h1>
        </motion.div>


        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          <div className="space-y-4">
            {work.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedCompany(item.name)}
                className={`text-lg font-mono transition-colors cursor-pointer relative pl-4 ${
                  selectedCompany === item.name ? "text-blue-500" : "text-gray-300 hover:text-blue-500"
                }`}
              >
                {selectedCompany === item.name && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 top-0 w-1 h-full bg-blue-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                {item.name}
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {selectedWork && (
              <motion.div
                key={selectedWork.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-2xl"
              >
                <div className="mb-2">
                  <h3 className="text-xl font-mono font-bold">
                    {selectedWork.title && <span className="text-blue-500">{selectedWork.title} @ </span>}
                    {selectedWork.name}
                  </h3>
                  <p className="text-gray-400 font-mono">
                    {selectedWork.start} - {selectedWork.end}
                  </p>
                </div>

                <ul className="space-y-2 mb-4">
                  {selectedWork.points.map((point, pointIndex) => (
                    <motion.li
                      key={pointIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: pointIndex * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="text-blue-500 mr-2">▸</span>
                      <span className="text-gray-300">{point}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {selectedWork.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: tagIndex * 0.05 }}
                      className="px-3 py-1 border-2 hover:border-blue-500 transition-all text-gray-300 rounded-full text-sm font-mono"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
};

export default Work;
