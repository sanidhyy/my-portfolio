import React from "react";
import styled from "styled-components";

import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";

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

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcons = ({ theme }) => {
  return (
    <Icons>
      <div>
        <a
          href="https://github.com/Technical-Shubham-tech"
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Github
            width={25}
            height={25}
            fill={theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>

      <div>
        <a
          href="https://twitter.com/TechnicalShubam"
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Twitter
            width={25}
            height={25}
            fill={theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>

      <div>
        <a
          href="https://facebook.com"
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Facebook
            width={25}
            height={25}
            fill={theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>

      <div>
        <a
          href="https://youtube.com/@OPGAMER."
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer noopener"
        >
          <YouTube
            width={25}
            height={25}
            fill={theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>

      <Line color={theme} />
    </Icons>
  );
};

export default SocialIcons;
