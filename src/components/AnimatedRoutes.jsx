import React from "react";
import { Routes, Route } from "react-router";
import { Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Main, About, Blog, Work, MySkills } from "../pages";

const AnimatedRoutes = () => {
  // get current location
  const location = useLocation();
  return (
    // animate on page change
    <AnimatePresence mode="wait">
      {/* routes */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<MySkills />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
