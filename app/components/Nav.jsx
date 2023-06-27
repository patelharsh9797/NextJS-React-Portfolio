"use client";

import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

import { useTheme } from "next-themes";
import Link from "next/link";

import { motion } from "framer-motion";
import { navVariants } from "../animation";

const Nav = ({ currentTheme }) => {
  const { theme, setTheme, systemTheme } = useTheme();

  currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mx-auto mb-12 sm:container sm:py-4"
    >
      <div className="glassmorphism flex flex-wrap items-center justify-between gap-4 bg-black bg-opacity-80 p-4 transition-all duration-500 dark:bg-white dark:bg-opacity-80 sm:rounded-lg md:p-6">
        <Link
          href={"/"}
          className="text-2xl font-medium text-teal-500 underline underline-offset-2 dark:text-black"
        >
          Harsh Patel
        </Link>
        <ul className="flex items-center gap-4">
          <li>
            <div>
              {currentTheme === "dark" ? (
                <div
                  className="cursor-pointer rounded bg-slate-800 px-3 py-2 text-xl text-yellow-400 hover:bg-opacity-95"
                  onClick={() => setTheme("light")}
                >
                  <BsFillSunFill />
                </div>
              ) : (
                <div
                  className="cursor-pointer rounded bg-white px-3 py-2 text-xl text-teal-300 hover:bg-opacity-95"
                  onClick={() => setTheme("dark")}
                >
                  <BsFillMoonStarsFill className="text-teal-700" />
                </div>
              )}
            </div>
          </li>
          <li>
            <a
              className="rounded-md border-2 border-transparent bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2 font-bold text-black hover:border-white hover:from-cyan-500 hover:to-teal-500 dark:hover:border-black"
              href="/resume.pdf"
              download
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Nav;
