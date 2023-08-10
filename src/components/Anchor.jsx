import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { AnchorImg, Link } from "../assets/images";

// container styles
const Container = styled.div`
  position: relative;
`;

// slider styles
const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);

  .chain {
    transform: rotate(135deg);
  }
`;

// pre display styles
const PreDisplay = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
`;

// anchor
const Anchor = ({ number }) => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  // handle page scroll
  useEffect(() => {
    const handleScroll = () => {
      // scroll positions
      let scrollPosition = window.scrollY;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      // difference in window size and scroll position
      let diff = Math.max(bodyHeight - (scrollPosition + windowSize));

      // difference percentage
      let diffP = (diff * 100) / (bodyHeight - windowSize);

      // change transform
      ref.current.style.transform = `translateY(${-diffP}%)`;

      // hide ref
      if (window.scrollY > 5) {
        hiddenRef.current.style.display = "none";
      } else {
        hiddenRef.current.style.display = "block";
      }
    };

    // listen to scroll events
    window.addEventListener("scroll", handleScroll);

    // remove scroll event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      {/* Anchor Image */}
      <PreDisplay ref={hiddenRef}>
        <AnchorImg width={70} height={70} fill="currentColor" />
      </PreDisplay>
      {/* Slider */}
      <Slider ref={ref}>
        {[...Array(number)].map((_, id) => {
          return (
            <Link
              key={id}
              width={25}
              height={25}
              fill="currentColor"
              className="chain"
            />
          );
        })}
        {/* Anchor Scrolling Image */}
        <AnchorImg width={70} height={70} fill="currentColor" />
      </Slider>
    </Container>
  );
};

export default Anchor;
