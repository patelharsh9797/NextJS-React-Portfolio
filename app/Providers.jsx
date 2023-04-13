"use client";

import { ThemeProvider, useTheme } from "next-themes";

const Providers = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
