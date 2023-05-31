"use client";

import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

import { useTheme } from "next-themes";

const Nav = ({ currentTheme }) => {
  const { theme, setTheme, systemTheme } = useTheme();

  currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav className="mb-12 py-4 ">
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-black bg-opacity-90 p-6 shadow-lg dark:bg-teal-500 dark:bg-opacity-90 md:flex-row md:justify-between">
        <h1 className="text-2xl font-medium text-teal-500 underline underline-offset-2 dark:text-black">
          Harsh Patel
        </h1>
        <ul className="flex items-center gap-4">
          <li>
            <div>
              {currentTheme === "dark" ? (
                <div
                  className="cursor-pointer rounded bg-white px-3 py-2 text-xl text-yellow-400 hover:bg-opacity-95"
                  onClick={() => setTheme("light")}
                >
                  <BsFillSunFill />
                </div>
              ) : (
                <div
                  className="cursor-pointer rounded bg-slate-900 px-3 py-2 text-xl text-teal-300 hover:bg-opacity-95"
                  onClick={() => setTheme("dark")}
                >
                  <BsFillMoonStarsFill />
                </div>
              )}
            </div>
          </li>
          <li>
            <a
              className="rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2 font-bold text-black hover:from-cyan-500 hover:to-teal-500"
              href="#"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
