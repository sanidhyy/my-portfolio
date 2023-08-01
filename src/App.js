import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router";
import { Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// global style
import GlobalStyle from "./globalStyles";

// pages
import { LightTheme } from "./pages/Themes";
import Main from "./pages/Main";
import AboutPage from "./pages/About";
import BlogPage from "./pages/BlogPage";
import WorkPage from "./pages/WorkPage";
import MySkillsPage from "./pages/MySkillsPage";

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
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/skills" element={<MySkillsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default App;
