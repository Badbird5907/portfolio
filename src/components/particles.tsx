"use client";

import { IOptions, RecursivePartial } from "@tsparticles/engine";
import {
  initParticlesEngine,
  Particles as ReactParticles,
} from "@tsparticles/react";
import colors from "tailwindcss/colors";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

export default function Particles() {
  /*
  async function initOld(engine: Engine) {
    await loadFull(engine);
    await loadParticlesRepulseInteraction(tsParticles);
  }

   */
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => {
    return {
      detectRetina: true,
      interactivity: {
        events: {
          onClick: {
            enable: false,
          },
          onHover: {
            enable: true,
            mode: "repulse",
            parallax: {
              enable: true,
              force: 80,
              smooth: 80,
            },
          },
          // resize: true,
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0,
            factor: 5,
            speed: 1,
          },
        },
      },
      fullScreen: {
        zIndex: 0,
      },
      particles: {
        zIndex: {
          value: 0,
        },
        color: {
          value: colors.blue[500],
        },
        links: {
          enable: true,
          color: {
            value: colors.blue[500],
          },
          distance: 120,
          opacity: 0.4,
          width: 2,
        },
        move: {
          enable: true,
          random: true,
          speed: 3,
        },
        number: {
          value: 60,
          density: {
            enable: true,
            // area: 1000,
          },
        },
        opacity: {
          value: {
            max: 0.8,
            min: 0.1,
          },
          animation: {
            enable: true,
            speed: 0.4,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: {
            max: 10,
            min: 1,
          },
          animation: {
            enable: true,
            speed: 5,
          },
        },
      },
    } as RecursivePartial<IOptions>;
  }, []);
  if (!init) {
    return <></>;
  }

  return (
    <ReactParticles
      id="tsparticles"
      options={options}
      className={"negativeZIndex"}
      style={{
        zIndex: "-1 !important",
      }}
    />
  );
}
