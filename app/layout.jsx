import { GeistSans } from 'geist/font'

import "./globals.css";
import Nav from "../components/Nav";
import { ThemeProvider } from "./Providers"

export const metadata = {
  title: "Web Dev Hash | Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className}`}>
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <header
            className={`sticky top-0 z-30 transition-all duration-500`}
          >
            <div className="gradient-01 absolute z-0 w-full py-4" />
            <Nav />
          </header>

          <main
            className={`container mx-auto space-y-12 px-4 pb-8 transition-all duration-500 md:px-8 `}
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
