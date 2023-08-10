import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";

import { LightTheme } from "../config/themes";
import { Design, Develope } from "../assets/images";
import { Particle, BigTitle, Wrapper } from "../components";

// Main styles
const Main = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

// Box styles
const Box = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  /* on hover */
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

// Title styles
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

// Description styles
const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(1vw + 0.6em);
  padding: 0.5rem 0;

  ${Box}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }
`;

// My Skills Page
const MySkills = () => {
  return (
    // theme provider
    <ThemeProvider theme={LightTheme}>
      {/* main */}
      <Main exit={{ opacity: 0, transition: 0.2 }}>
        {/* wrapper */}
        <Wrapper theme="light" />
        {/* particle */}
        <Particle theme="light" />

        {/* box 1 */}
        <Box>
          {/* skill title */}
          <Title>
            <Design width={40} height={40} /> Designer
          </Title>

          {/* skill description */}
          <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>

          {/* Skills */}
          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Apps</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Figma</li>
            </ul>
          </Description>
          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Apps</li>
            </ul>
          </Description>
        </Box>

        {/* box 2 */}
        <Box>
          {/* skill title */}
          <Title>
            <Develope width={40} height={40} /> Frontend Developer
          </Title>

          {/* skill description */}
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>

          {/* skills */}
          <Description>
            <strong>Skills</strong>
            <p>
              Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase
              etc.
            </p>
          </Description>
          <Description>
            <p>VScode, Github, Codepen etc.</p>
          </Description>
        </Box>

        {/* big title */}
        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Main>
    </ThemeProvider>
  );
};

export default MySkills;
