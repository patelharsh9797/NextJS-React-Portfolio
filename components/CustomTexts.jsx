"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2, textVariant } from "../app/animation";

export const HeroHeadingTyping = ({ title, textStyles }) => (
  <motion.h2
    variants={textContainer}
    className={`py-2 text-5xl font-bold text-primary md:text-6xl ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.h2>
);

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`text-secondary-white text-[14px] font-semibold ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles, delay }) => (
  <motion.h2
    variants={textVariant(delay)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`mt-[8px] font-bold ${textStyles}`}
  >
    {title}
  </motion.h2>
);
