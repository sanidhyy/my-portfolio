import { ThemeProvider } from "styled-components";

// global style
import GlobalStyle from "./globalStyles";

// pages
import { LightTheme } from "./config/themes";

// components
import { SoundBar, AnimatedRoutes } from "./components";

const App = () => {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={LightTheme}>
        <SoundBar />
        <AnimatedRoutes />
      </ThemeProvider>
    </>
  );
};

export default App;
