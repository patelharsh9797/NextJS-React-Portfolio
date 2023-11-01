"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { navVariants } from "../app/animation";
import { ModeToggle } from "./ModeToggle";

const Nav = () => {

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-5xl mx-auto w-full mb-12 sm:py-4"
    >
      <div className="glassmorphism flex flex-wrap items-center justify-between gap-4 bg-black bg-opacity-80 p-4 transition-all duration-500 dark:bg-white dark:bg-opacity-80 sm:rounded-lg md:px-6">
        <Link
          href={"/"}
          className="text-2xl font-medium text-primary underline underline-offset-2 dark:text-black"
        >
          Harsh Patel
        </Link>
        <ul className="flex items-center gap-4">
          <li>
           <ModeToggle />
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
