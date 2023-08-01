import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { DarkTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";

const Main = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Box = styled.div`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: #fff;
`;

const WorkPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Main>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Box>
          {Work.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </Box>
      </Main>
    </ThemeProvider>
  );
};

export default WorkPage;
