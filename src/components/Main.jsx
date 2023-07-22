import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
`;

const Main = () => {
  return (
    <MainContainer>
      <h1>Home</h1>
    </MainContainer>
  );
};

export default Main;
