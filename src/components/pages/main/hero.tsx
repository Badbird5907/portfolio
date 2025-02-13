import React from "react";
import PopIn from "@/components/framer/pop-in";
import { FaGithub, FaTwitter } from "react-icons/fa";
import SlideUp from "@/components/framer/slide-up";
import AboutTypewriter from "@/components/typewriter";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <PopIn duration={0.4}>
      <div className="flex h-screen justify-center items-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-8 text-center gap-1">
              <PopIn duration={0.5}>
                <h1 className={"text-6xl"}>Hi I{"'"}m</h1>
              </PopIn>
              <PopIn duration={0.65}>
                <h1 className={"text-6xl font-bold"}>Evan 👋</h1>
              </PopIn>
              <PopIn duration={0.8}>
                <h1 className={"text-4xl"}>
                  <AboutTypewriter />
                </h1>
              </PopIn>
              <div className={"flex flex-row self-center gap-4 scale-125"}>
                <SlideUp duration={0.5} delay={0.5}>
                  <Link href={"https://github.com/Badbird5907"}>
                    <Button
                      variant={"outline"}
                      className={"text-white hover:cursor-pointer"}
                    >
                      <FaGithub /> GitHub
                    </Button>
                  </Link>
                </SlideUp>

                <SlideUp duration={0.5} delay={0.7}>
                  <Link href={"https://twitter.com/Badbird_5907"}>
                    <Button
                      color={"primary"}
                      className={"text-white hover:cursor-pointer bg-blue-500 hover:bg-blue-600"}
                    >
                      <FaTwitter /> Twitter
                    </Button>
                  </Link>
                </SlideUp>
              </div>

            </div>
          </div>
        </div>
      </div>
    </PopIn>
  );
};

export default Hero;
