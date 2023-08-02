import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router";
import { Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// global style
import GlobalStyle from "./globalStyles";

// pages
import { LightTheme } from "./config/themes";
import { Main, About, Blog, Work, MySkills } from "./pages";

// components
import SoundBar from "./components/SoundBar";

const App = () => {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={LightTheme}>
        <SoundBar />
        {/* animations on page change */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skills" element={<MySkills />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default App;
