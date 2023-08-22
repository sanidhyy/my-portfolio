import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import { placeholder } from "../assets/images";
import { useLazyLoadImage } from "../utils";

// Container styles
const Container = styled(motion.article)``;

// Box styles
const Box = styled(motion.a)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
`;

// Image styles
const Image = styled.div`
  background-image: ${(props) =>
    `url(${useLazyLoadImage(props.img) || placeholder})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

// Title styles
const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;

// Hash Tags styles
const HashTags = styled.div`
  padding: 0.5rem 0;
`;

// Tag styles
const Tag = styled.span`
  padding-right: 0.5rem;
`;

// Date styles
const Date = styled.time`
  padding: 0.5rem 0;
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

// Blog Single
const BlogSingle = ({ blog }) => {
  // extract blog data
  const { name, tags, date, img, link } = blog;

  return (
    // container
    <Container variants={item}>
      {/* box wrapper */}
      <Box href={link} target="_blank" rel="noreferrer noopener">
        {/* blog image */}
        <Image img={img} />
        {/* blog title */}
        <Title>{name}</Title>
        {/* blog hashtags */}
        <HashTags>
          {tags.map((tag, key) => {
            return <Tag key={key}>{tag}</Tag>;
          })}
        </HashTags>
        {/* blog date */}
        <Date dateTime={date}>{date}</Date>
      </Box>
    </Container>
  );
};

export default BlogSingle;
