import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { blogBg } from "../assets/images";
import { NAME, blogData } from "../data";
import { BlogSingle, Anchor, BigTitle, Wrapper } from "../components";
import useDocumentTitle from "../useDocumentTitle";

// Main container styles
const MainContainer = styled(motion.main)`
  background-image: url(${blogBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

// Container styles
const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

// Center styles
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

// Grid styles
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

// framer motion configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

// Blog Page
const Blog = () => {
  // change page title
  useDocumentTitle(`${NAME} | My Blog`);

  const [number, setNumber] = useState(0);

  // difference of anchor height & window height
  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumber(parseInt(num));
  }, []);

  return (
    // Main container
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: 0.2 }}
    >
      {/* container */}
      <Container>
        {/* wrapper */}
        <Wrapper />
        {/* anchor */}
        <Anchor number={number} />

        {/* center */}
        <Center>
          {/* blog single */}
          <Grid>
            {blogData.map((blog, i) => (
              <BlogSingle key={`Blog-` + i + 1} blog={blog} />
            ))}
          </Grid>
        </Center>

        {/* big title */}
        <BigTitle text="BLOG" top="5rem" left="5rem" />
      </Container>
    </MainContainer>
  );
};

export default Blog;
