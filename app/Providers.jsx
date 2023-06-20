"use client";

import { ThemeProvider, useTheme } from "next-themes";
import Nav from "./components/Nav";

const Providers = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <ThemeDiv>{children}</ThemeDiv>
      </ThemeProvider>
    </>
  );
};

const ThemeDiv = ({ children }) => {
  let currentTheme;
  const { resolvedTheme } = useTheme();

  return (
    <>
      <header
        className={`sticky top-0 z-30 px-10 transition-all duration-500 md:px-20 ${
          resolvedTheme === "dark" ? "dark" : ""
        }`}
      >
        <Nav currentTheme={currentTheme} />
      </header>

      <main
        className={`px-10 transition-all duration-500 md:px-20 ${
          resolvedTheme === "dark" ? "dark" : ""
        }`}
      >
        {children}
      </main>
    </>
  );
};

export default Providers;
