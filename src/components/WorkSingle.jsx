import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Github } from "../assets/images";

// Box styles
const Box = styled(motion.article)`
  width: 16rem;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;

  /* on hover */
  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
`;

// Title styles
const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`;

// Description styles
const Description = styled.p`
  font-size: calc(0.8rem + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;

// Tags styles
const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;

  /* on hover */
  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;

// Tag styles
const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8rem + 0.3vw);
`;

// Footer styles
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

// Link styles
const Link = styled.a`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);

  /* on hover */
  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

// Github link styles
const Git = styled.a`
  color: inherit;
  text-decoration: none;

  /* on hover */
  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
    }
  }
`;

// framer motion configuration
const item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

// Work Single
const WorkSingle = ({ data }) => {
  // extract work data
  const { name, description, tags, demo, github } = data;

  return (
    // Box Wrapper
    <Box variants={item}>
      {/* work title */}
      <Title>{name}</Title>
      {/* work description */}
      <Description>{description}</Description>
      {/* work tags */}
      <Tags>
        {tags.map((tag, id) => (
          // render each tag
          <Tag key={`Tag ${id}`}>#{tag}</Tag>
        ))}
      </Tags>

      {/* work footer */}
      <Footer>
        {/* site link */}
        <Link
          href={demo}
          target="_blank"
          rel="noreferrer noopener"
          title="Site"
        >
          Visit
        </Link>

        {/* github link */}
        <Git
          href={github}
          target="_blank"
          rel="noreferrer noopener"
          title="Source Code"
        >
          <Github width={30} height={30} />
        </Git>
      </Footer>
    </Box>
  );
};

export default WorkSingle;
