"use client";

import Link from "next/link";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import { motion } from "framer-motion";
import { fadeIn } from "../animation";

import Image from "next/image";
import myProfileImg from "../../public/dev-ed-wave.png";

const Hero = () => {
  return (
    <section className="">
      <div className="overflow-hidden p-6 text-center">
        <motion.h2
          variants={fadeIn("up", "tween", 0.5, 0.75)}
          initial="hidden"
          whileInView="show"
          className="py-2 text-5xl font-medium text-teal-500 md:text-6xl"
        >
          Harsh Patel
        </motion.h2>
        <h3 className="py-2 text-2xl md:text-3xl">Frontend Developer</h3>
        <p className="text-md mx-auto max-w-xl py-5 leading-8 text-slate-600 dark:text-slate-500 md:text-xl">
          Passionate about creating seamless user experiences and bringing
          designs to life, I specialize in frontend development using
          technologies like React and Next.js. With a strong focus on clean code
          and attention to detail, I strive to deliver visually appealing and
          intuitive web applications.
        </p>
        <div className="flex justify-center gap-16 text-5xl text-slate-600 dark:text-slate-500">
          <Link href={"https://github.com/patelharsh9797"} target="_blank">
            <AiFillGithub className=" transition-all  duration-300 hover:text-teal-500" />
          </Link>

          <Link
            href={"https://www.linkedin.com/in/harsh-patel9797/"}
            target="_blank"
          >
            <AiFillLinkedin className=" transition-all  duration-300 hover:text-teal-500" />
          </Link>

          <Link href={"https://twitter.com/Patelharsh_9797"} target="_blank">
            <AiFillTwitterCircle className=" transition-all  duration-300 hover:text-teal-500" />
          </Link>

          {/* <Link href={"#"} target="_blank">
      <AiFillYoutube className=" hover:text-teal-500 transition-all duration-300" />
    </Link> */}
        </div>
      </div>

      <div className="relative mx-auto mt-20 h-52 w-52 overflow-hidden  rounded-full bg-gradient-to-b from-teal-500 shadow-xl md:h-96 md:w-96">
        <Image
          alt="image"
          src={myProfileImg}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Hero;
