import React, { useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";

import music from "../assets/audio/music.mp3";

// No of sound bars/lines
const LINES_NO = 5;

// delay in every sound line
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

// Box styles
const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 8rem;
  top: 3rem;
  z-index: 10;

  /* delay css lines */
  ${delayLinesCSS()}
`;

// play animation
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

// Line styles
const Line = styled.span`
  background: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.body};
  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) => (props.click ? "running" : "paused")};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;
`;

// Sound Bar
const SoundBar = () => {
  // music ref
  const musicRef = useRef(null);

  // sound bar click status
  const [click, setClick] = useState(false);

  // handle sound bar click
  const handleClick = () => {
    setClick(!click);

    if (!click) {
      musicRef.current.play();
    } else {
      musicRef.current.pause();
    }
  };

  // sound lines
  const lines = [];

  // render each line
  for (let i = 1; i <= LINES_NO; i++) {
    lines.push(<Line click={click} key={`Line` + i} />);
  }

  return (
    // Box Wrapper
    <Box onClick={() => handleClick()} title="Play Music">
      {lines}

      {/* audio */}
      <audio src={music} ref={musicRef} loop></audio>
    </Box>
  );
};

export default SoundBar;
