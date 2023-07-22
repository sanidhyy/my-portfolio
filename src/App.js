import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";

// global style
import GlobalStyle from "./globalStyles";

// components
import { lightTheme } from "./components/Themes";
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";

const App = () => {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/skills" element={<MySkillsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
