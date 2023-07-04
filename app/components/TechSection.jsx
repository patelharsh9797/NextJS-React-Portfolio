"use client";

import { getTeachList } from "../data";

import { motion } from "framer-motion";

import { staggerContainer, fadeIn } from "../animation";
import { TitleText } from "./CustomTexts";

const TechSection = () => {
  const techList = getTeachList();
  return (
    <section className="min-h-[80vh] py-8">
      <motion.div
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.25 }}
        className="pb-4 text-center sm:px-32"
      >
        <TitleText
          title={<>Tech Stack</>}
          textStyles="font-bold text-3xl font-medium text-teal-600 dark:text-teal-400 text-center"
          delay={0.5}
        />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 grid gap-8 text-center md:grid-cols-2 lg:grid-cols-4"
      >
        {techList.map((tech, index) => (
          <motion.div
            variants={fadeIn(
              "right",
              "spring",
              index < 1 ? (index + 0.5) * 0.5 : index * 0.75 * 0.5,
              1
            )}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            key={`tech-${tech.id}`}
            className="cardGlass flex cursor-pointer flex-col items-center justify-center gap-8 rounded-lg p-8"
          >
            <img
              src={tech.path.src}
              alt={tech.name}
              width={100}
              height={100}
              className={`flex-1 object-contain transition-all duration-300 ${
                tech.isDark ? "dark:invert" : ""
              }`}
            />
            <span className="font-semibold">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechSection;
