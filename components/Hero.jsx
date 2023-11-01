"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import {
  staggerContainer,
  textVariant,
  fadeIn,
  zoomIn,
} from "../app/animation";

import Image from "next/image";
import myProfileImg from "../public/dev-ed-wave.png";
import { HeroHeadingTyping } from "./CustomTexts";

import { getAllSocials } from "../data";

const Hero = () => {
  const socials = getAllSocials();

  return (
    <section className="relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="overflow-hidden p-6 text-center"
      >
        <HeroHeadingTyping title="Harsh Patel" />
        <motion.h3
          variants={textVariant(1.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-2 text-secondary-foreground text-2xl md:text-3xl"
        >
          Frontend Developer
        </motion.h3>
        <motion.p
          variants={textVariant(1.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-md mx-auto max-w-xl py-5 leading-8 text-muted-foreground dark:text-slate-500 md:text-xl"
        >
          Passionate about creating seamless user experiences and bringing
          designs to life, I specialize in frontend development using
          technologies like React and Next.js. With a strong focus on clean code
          and attention to detail, I strive to deliver visually appealing and
          intuitive web applications.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex justify-center gap-16 text-5xl text-accent-foreground"
      >
        {socials.map((social, index) => (
          <motion.div
            variants={fadeIn("right", "spring", (index + 1) * 0.5, 1)}
          >
            <Link href={social.link} key={`social-${index}`} target="_blank">
              <span className="transition-all duration-300 opacity-50 saturate-0 hover:opacity-100 hover:text-primary hover:saturate-100">
                {social.icon}
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={zoomIn(0.5, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative mx-auto mt-20 h-52 w-52 overflow-hidden  rounded-full bg-gradient-to-b from-teal-500 shadow-xl md:h-96 md:w-96"
      >
        <Image
          alt="image"
          src={myProfileImg}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-500 hover:scale-105"
          loading="eager"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
