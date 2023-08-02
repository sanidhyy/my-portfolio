import React, { useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";

import music from "../assets/audio/music.mp3";

const LINES_NO = 5;

const delayLinesCSS = () => {
  let csslines = "";

  for (let i = 1; i <= LINES_NO; i++) {
    csslines += `
        & > *:nth-child(${i}) {
            animation-delay: ${0.1 * (i + 1)}s;
        }
    `;
  }

  return css`
    ${csslines}
  `;
};

const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 8rem;
  top: 3rem;
  z-index: 10;

  ${delayLinesCSS()};
`;

const play = keyframes`
    0%  {
        transform: scaleY(1);
    }
    50%  {
        transform: scaleY(2);
    }
    100%  {
        transform: scaleY(1);
    }
`;

const Line = styled.span`
  background: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.body};
  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) => (props.click ? "running" : "paused")};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;
`;

const SoundBar = () => {
  const musicRef = useRef(null);

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      musicRef.current.play();
    } else {
      musicRef.current.pause();
    }
  };

  const lines = [];

  for (let i = 1; i <= LINES_NO; i++) {
    lines.push(<Line click={click} />);
  }

  return (
    <Box onClick={() => handleClick()} title="Play Music">
      {lines}

      <audio src={music} ref={musicRef} loop></audio>
    </Box>
  );
};

export default SoundBar;
