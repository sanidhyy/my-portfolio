import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import { YinYang } from "../assets/images";
import { Intro, Wrapper } from "../components";
import { EMAIL } from "../data";

// rotate animation
const rotate = keyframes`
  from{
    transform: rotate(0);
  }

  to{
    transform: rotate(360deg);
  }
`;

// Main container styles
const MainContainer = styled(motion.div)`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

// Container styles
const Container = styled.div`
  padding: 2rem;
`;

// Contact styles
const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

// Blog styles
const Blog = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

// Work styles
const Work = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: rotate(-90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

// Bottom Bar styles
const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

// About styles
const About = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;

// Skills styles
const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

// Center styles
const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease;

  /* first element */
  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  /* last element */
  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

// Dark Div styles
const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0")};
  height: ${(props) => (props.click ? "100%" : "0")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

// Main
const Main = () => {
  // click and variants state
  const [click, setClick] = useState(false);
  const [variants, setVariants] = useState({});

  // handle yinyang click
  const handleClick = () => setClick(!click);

  return (
    // main container
    <MainContainer exit={variants}>
      {/* dark div */}
      <DarkDiv click={click} />

      {/* container */}
      <Container>
        {/* wrapper */}
        <Wrapper theme={click ? "dark" : "light"} />
        {/* dark div */}
        <DarkDiv click={click} />

        {/* center */}
        <Center click={click} title="Click here">
          {/* yinyang */}
          <YinYang
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />
          <span>Click here</span>
        </Center>

        {/* contact */}
        <Contact
          href={`mailto:${EMAIL}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <motion.h3
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Contact"
          >
            Say hi..
          </motion.h3>
        </Contact>

        {/* blog */}
        <Blog to="/blog">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Blog"
            onClick={() =>
              setVariants({
                x: -window.innerWidth,
                transition: { duration: 0.8 },
              })
            }
          >
            Blog
          </motion.h2>
        </Blog>

        {/* work */}
        <Work to="/work" click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="My Work"
            onClick={() =>
              setVariants({
                x: window.innerWidth,
                transition: { duration: 0.8 },
              })
            }
          >
            Work
          </motion.h2>
        </Work>

        {/* bottom content */}
        <BottomBar>
          {/* about */}
          <About to="/about" click={click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="About Me"
              onClick={() =>
                setVariants({
                  y: -window.innerHeight,
                  transition: { duration: 0.8 },
                })
              }
            >
              About.
            </motion.h2>
          </About>

          {/* skills */}
          <Skills to="/skills">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="My Skills"
              onClick={() =>
                setVariants({
                  y: -window.innerHeight,
                  transition: { duration: 0.8 },
                })
              }
            >
              My Skills.
            </motion.h2>
          </Skills>
        </BottomBar>
      </Container>

      {/* show intro on yinyang click */}
      {click && <Intro click={click} />}
    </MainContainer>
  );
};

export default Main;
