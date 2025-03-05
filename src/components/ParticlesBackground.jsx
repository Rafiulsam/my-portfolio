import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#b61924", // ✅ background color
        },
        particles: {
          number: {
            value: 80, // ✅ Particle count
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff", // ✅ particle color 
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.2,
          },
          size: {
            value: 3,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 5,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse", // ✅ hover effect
            },
          },
          modes: {
            repulse: {
              distance: 150,
            },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;