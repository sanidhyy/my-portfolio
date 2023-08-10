import { ThemeProvider } from "styled-components";

// global style
import GlobalStyle from "./globalStyles";

// pages
import { LightTheme } from "./config/themes.js";

// components
import { SoundBar, AnimatedRoutes } from "./components";

// App
const App = () => {
  return (
    <>
      {/* Global Style */}
      <GlobalStyle />

      {/* Theme Provider */}
      <ThemeProvider theme={LightTheme}>
        {/* Sound Bar */}
        <SoundBar />

        {/* Animated Routes */}
        <AnimatedRoutes />
      </ThemeProvider>
    </>
  );
};

export default App;
