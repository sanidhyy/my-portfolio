import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { DarkTheme } from "../config/themes";
import { socialData } from "../data";

// Icons styles
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

// Line styles
const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

// Social Icon
const SocialIcon = ({ id, name, Icon, link, theme }) => (
  <motion.div
    initial={{ transform: "scale(0)" }}
    animate={{ transform: "scale(1)", scale: [0, 1, 1.5, 1] }}
    transition={{ type: "spring", duration: 1, delay: 1 + 0.2 * id }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <a
      href={link}
      style={{ color: "inherit" }}
      title={name}
      target="_blank"
      rel="noreferrer noopener"
    >
      {/* icon */}
      <Icon
        width={25}
        height={25}
        fill={theme === "dark" ? DarkTheme.text : DarkTheme.body}
      />
    </a>
  </motion.div>
);

// Social Icons
const SocialIcons = ({ theme }) => {
  return (
    // icons
    <Icons>
      {/* each icon */}
      {socialData.map((data, i) => (
        <SocialIcon {...data} key={i} id={i} theme={theme} />
      ))}
      {/* line */}
      <Line
        color={theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
