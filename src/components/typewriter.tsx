"use client";

import React from "react";
import Typewriter from "typewriter-effect";

const iAm = [
  "developer",
  "software engineer",
  "full stack developer",
  "freelancer",
  "nerd",
];
const AboutTypewriter = () => {
  // TODO: new lines move buttons down on mobile
  return (
    <div className={"break-words"}>
      <Typewriter
        options={{
          loop: true,
        }}
        onInit={(typewriter) => {
          let tw = typewriter
            .changeDelay(50)
            .typeString("I am a ")
            .pauseFor(500);
          // loop through iAm array, delete last string length, then type new string
          iAm.forEach((element) => {
            tw = tw
              .typeString(element)
              .pauseFor(1500)
              .changeDeleteSpeed(20)
              .deleteChars(element.length);
          });
          tw.start();
        }}
      />
    </div>
  );
};

export default AboutTypewriter;
