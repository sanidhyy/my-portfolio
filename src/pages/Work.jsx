import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";

import { DarkTheme } from "../config/themes";
import { workData } from "../data";
import { YinYang } from "../assets/images";
import { WorkSingle, BigTitle, Wrapper } from "../components";

// Main styles
const Main = styled(motion.main)`
  background-color: ${(props) => props.theme.body};
  height: calc(45vh * ${workData.length});
  position: relative;
  display: flex;
  align-items: center;
`;

// Box styles
const Box = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: #fff;
`;

// Rotate styles
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

// framer motion configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

// Work Page
const Work = () => {
  // main and yinyang ref
  const mainRef = useRef(null);
  const yinYangRef = useRef(null);

  // rotate yinyang on window scroll
  useEffect(() => {
    let mainElement = mainRef.current;
    let yinYangElement = yinYangRef.current;
    const rotate = () => {
      mainElement.style.transform = `translateX(${-window.scrollY}px)`;

      yinYangElement.style.transform = `rotate(${-window.scrollY}deg)`;
    };

    // listen to window scroll event
    window.addEventListener("scroll", rotate);

    // remove scroll event
    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    // theme provider
    <ThemeProvider theme={DarkTheme}>
      {/* main */}
      <Main exit={{ opacity: 0, transition: 0.2 }}>
        {/* wrapper */}
        <Wrapper theme="dark" />

        {/* work data */}
        <Box ref={mainRef} variants={container} initial="hidden" animate="show">
          {workData.map((data, i) => (
            <WorkSingle key={`work-${i + 1}`} data={data} />
          ))}
        </Box>

        {/* yinyang */}
        <Rotate ref={yinYangRef}>
          <YinYang
            ref={yinYangRef}
            width={80}
            height={80}
            fill={DarkTheme.text}
          />
        </Rotate>

        {/* big title */}
        <BigTitle text="WORK" top="10%" right="20%" />
      </Main>
    </ThemeProvider>
  );
};

export default Work;
