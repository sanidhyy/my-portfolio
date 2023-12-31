import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styled from "styled-components";

import configDark from "../config/particlejs.json";
import configLight from "../config/particlejs-light.json";

// Box styles
const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

// Particle
const Particle = ({ theme }) => {
  // initialise tsparticle object
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    // box wrapper
    <Box>
      {/* particles */}
      <Particles
        init={particlesInit}
        style={{ position: "absolute", top: 0 }}
        options={theme === "light" ? configLight : configDark}
      />
    </Box>
  );
};

export default Particle;
