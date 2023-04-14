"use client";

import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

const Nav = ({ currentTheme, setTheme }) => {
  return (
    <nav className="py-10 mb-12 flex flex-col items-center border-b-2 border-solid  border-teal-500 justify-center md:flex-row md:justify-between gap-4">
      <h1 className="text-2xl font-medium text-teal-500 underline underline-offset-2">
        Harsh Patel
      </h1>
      <ul className="flex items-center gap-4">
        <li>
          <div>
            {currentTheme === "dark" ? (
              <div
                className="py-2 px-3 rounded cursor-pointer bg-white hover:bg-opacity-95 text-yellow-400 text-xl"
                onClick={() => setTheme("light")}
              >
                <BsFillSunFill />
              </div>
            ) : (
              <div
                className="py-2 px-3 rounded cursor-pointer bg-slate-900 hover:bg-opacity-95 text-teal-300 text-xl"
                onClick={() => setTheme("dark")}
              >
                <BsFillMoonStarsFill />
              </div>
            )}
          </div>
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-teal-500 to-cyan-500 text-black font-bold px-4 py-2 rounded-md hover:from-cyan-500 hover:to-teal-500"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
