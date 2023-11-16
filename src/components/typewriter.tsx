import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const iAm = ["software engineer", "fullstack developer", "freelancer", "nerd"];
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
            .typeString("But I go by Badbird5907 online.") // TODO have this as default
            .pauseFor(1500)
            .deleteAll()
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
