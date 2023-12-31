import { useState } from "react";
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './particlesBg.css'

function ParticlesBg() {
  const [particlesConfig, setParticlesConfig] = useState({
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    particles: {
      number: {
        value: 10,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#fff",
      },
      shape: {
        type: "circle",
        options: {
          sides: 10,
        },
      },
      opacity: {
        value: 0.8,
        random: true,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0.1,
          sync: true,
        },
      },
      size: {
        value: 30,
        random: true,
        anim: {
          enable: true,
          speed: 10,
          size_min: 0.1,
          sync: true,
        },
      },
      rotate: {
        value: 0,
        random: true,
        direction: "clockwise",
        animation: {
          enable: true,
          speed: 5,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        // "enable": true,
        // "distance": 600,
        // "color": "#ffffff",
        // "opacity": 0.4,
        // "width": 2
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: ["bubble", "attract", "grab"], // Attract mode will pull particles towards the cursor on hover
        },
        onclick: {
          enable: true,
          mode: ["repulse", "push"], // Push mode will add new particles on click
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 1, // Number of particles to add on click
        },
        remove: {
          particles_nb: 2,
        },
        attract: {
          distance: 200, // How close the mouse needs to be to attract particles
          duration: 0.7, // Speed of attraction
          factor: 5, // How many particles will be moved by the cursor
          maxSpeed: 50, // The maximum speed for attracting particles
          speed: 1, // The speed of attracting particles
        },
      },
    },
    retina_detect: true,
    background: {
      color: "#111",
      opacity: ".8",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    }
  });

  async function loadParticles(main) {
    await loadFull(main);
  }

  const resetParticles = () => {
    setParticlesConfig((oldConfig) => ({
      ...oldConfig,
      particles: {
        ...oldConfig.particles,
        number: {
          ...oldConfig.particles.number,
          value: 2, // Set the number of particles to zero
        },
      },
    }));
  };

  return (

    <>
      <Particles
        id="tsparticles"
        init={loadParticles}
        options={particlesConfig}
      />
      <button
        className="reset-btn"
        onClick={resetParticles}
      >
        Reset Particles
      </button>
    </>


  );
}
export default ParticlesBg;





