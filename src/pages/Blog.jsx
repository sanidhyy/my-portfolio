import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { blogBg } from "../assets/images";
import { blogData } from "../data";
import {
  Logo,
  PowerButton,
  SocialIcons,
  BlogSingle,
  Anchor,
  BigTitle,
} from "../components";

const MainContainer = styled(motion.div)`
  background-image: url(${blogBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

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

const BlogPage = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumber(parseInt(num));
  }, []);

  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <Container>
        <Logo />
        <PowerButton />
        <SocialIcons />
        <Anchor number={number} />

        <Center>
          <Grid>
            {blogData.map((blog) => (
              <BlogSingle key={blog.id} blog={blog} />
            ))}
          </Grid>
        </Center>

        <BigTitle text="BLOG" top="5rem" left="5rem" />
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
