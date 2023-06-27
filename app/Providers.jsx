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
        className={`sticky top-0 z-30 transition-all duration-500 ${
          resolvedTheme === "dark" ? "dark" : ""
        }`}
      >
        <div className="gradient-01 absolute z-0 w-full py-4" />
        <Nav currentTheme={currentTheme} />
      </header>

      <main
        className={`container mx-auto space-y-12 px-4 pb-8 transition-all duration-500 md:px-8 ${
          resolvedTheme === "dark" ? "dark" : ""
        }`}
      >
        {children}
      </main>
    </>
  );
};

export default Providers;
