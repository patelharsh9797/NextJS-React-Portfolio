"use client";
import Image from "next/image";
import { getTeachList } from "../data";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../app/animation";
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
        className="mt-4 grid grid-cols-2 gap-8 text-center md:grid-cols-3 lg:grid-cols-4"
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
            key={`techSection-${tech.id}`}
            className="cardGlass rounded-lg border-opacity-10 border border-muted-foreground bg-card text-card-foreground shadow-sm flex cursor-pointer flex-col items-center justify-center gap-8 p-4 group"
          >
            <Image
              src={tech.path.src}
              alt={tech.name}
              width={index === techList.length - 1 ? 126 : 64}
              height={index === techList.length - 1 ? 126 : 64}
              className={`flex-1  object-contain transition-all duration-500  ${tech.isDark ? "dark:invert opacity-70 group-hover:opacity-100 dark:opacity-50 dark:group-hover:invert" : "invert saturate-0 group-hover:invert-0 group-hover:saturate-100"
                }`}
            />
            {/* <span className="font-semibold">{tech.name}</span> */}
          </motion.div>
        ))}
      </motion.div>


    </section>
  );
};

export default TechSection;
