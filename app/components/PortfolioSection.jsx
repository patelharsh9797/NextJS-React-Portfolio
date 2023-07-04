"use client";

import Portfolio from "./Portfolio";

import { motion } from "framer-motion";

import { staggerContainer, fadeIn, textVariant } from "../animation";
import { TitleText } from "./CustomTexts";

const PortfolioSection = () => {
  return (
    <section className="py-4">
      <motion.div
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.25 }}
        className="mb-8 pb-4 text-center sm:px-32"
      >
        <TitleText
          title={<>Portfolio</>}
          textStyles="text-3xl font-medium text-teal-600 dark:text-teal-400 text-center"
          delay={0.5}
        />
        <motion.p
          variants={textVariant(1.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-2 text-lg font-semibold leading-8 text-slate-500"
        >
          Welcome to my portfolio! Here you will find a showcase of my latest
          projects and accomplishments. I am passionate about creating
          innovative <span className="text-teal-500">solutions</span> and
          delivering exceptional results.
        </motion.p>
        <motion.p
          variants={textVariant(1.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-2 text-lg font-semibold leading-8 text-slate-500"
        >
          Feel free to explore each project for more details, including the
          technologies used, challenges faced, and the outcomes achieved. I hope
          you find my work inspiring and look forward to connecting with you
          soon.
        </motion.p>
      </motion.div>

      <Portfolio />
    </section>
  );
};

export default PortfolioSection;
