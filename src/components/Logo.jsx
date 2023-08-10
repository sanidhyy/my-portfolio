import React from "react";
import styled from "styled-components";

import { DarkTheme } from "../config/themes";
import { NAME, SHORTNAME } from "../data";

// Logo Container styles
const LogoContainer = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
  cursor: default;
  user-select: none;
`;

// Logo
const Logo = ({ theme }) => {
  return (
    <LogoContainer color={theme} title={`${NAME}'s Portfolio`}>
      {SHORTNAME}
    </LogoContainer>
  );
};

export default Logo;
