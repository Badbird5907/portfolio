import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const AboutTypewriter = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // show in 1.5 seconds
    setTimeout(() => {
      // setShow(true);
    }, 1500);
  }, []);

  return (
    <div>
      <span className={`${show ? "opacity-0" : "opacity-100"}`}>
        But I go by Badbird5907 online.
      </span>
      <div className={`${show ? "opacity-100" : "opacity-0"}`}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pasteString("But I go by Badbird5907 online.", null) // TODO have this as default
              .start();
          }}
        />
      </div>
    </div>
  );
};

export default AboutTypewriter;
