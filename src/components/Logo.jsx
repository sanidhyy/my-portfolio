import React from "react";
import styled from "styled-components";

import { DarkTheme } from "../config/themes";
import { SHORTNAME } from "../data";

const LogoContainer = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

const Logo = ({ theme }) => {
  return <LogoContainer color={theme}>{SHORTNAME}</LogoContainer>;
};

export default Logo;
