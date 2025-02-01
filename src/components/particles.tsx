"use client";

import { loadParticlesRepulseInteraction } from "@tsparticles/interaction-particles-repulse";
import {
  type IOptions,
  type RecursivePartial,
} from "@tsparticles/engine";
import colors from "tailwindcss/colors";
import {
  initParticlesEngine,
  Particles as ReactParticles,
} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

export default function Particles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    void initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadParticlesRepulseInteraction(engine);
      setInit(true);
    });
  }, []);

  const options: RecursivePartial<IOptions> = {
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
        resize: {
          enable: true,
          delay: 0.5,
        },
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
          height: 1000,
          width: 1000,
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
  };

  if (init) {
    return (
      <ReactParticles
        options={options}
        className={"negativeZIndex"}
        style={{
          zIndex: "-1 !important",
        }}
      />
    );
  }
}
