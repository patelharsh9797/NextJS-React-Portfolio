"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn, textVariant } from "../animation";

const ProjectPage = ({ data }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className={`flex flex-col gap-12 pb-8`}
    >
      <motion.h2
        variants={fadeIn("up", "tween", 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center text-2xl font-bold text-teal-600 dark:text-teal-400"
      >
        {data.projectTitle}
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {data.projectImages.map((imageSrc, index) => (
          <motion.div
            variants={fadeIn(
              "right",
              "spring",
              index < 1 ? (index + 0.5) * 0.5 : index * 0.5,
              1
            )}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            key={`project_image-${index}`}
            className="cursor-pointer overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              src={imageSrc}
              alt="project images"
              className="transition-all duration-500 hover:scale-105"
              width={500}
              height={500}
            />
          </motion.div>
        ))}
      </div>

      <div className="space-y-8">
        <motion.p
          variants={textVariant(1.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="font-bold">Main Technology Used : </span>
          {data.majorTools}
        </motion.p>

        <motion.p
          variants={textVariant(1.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="font-bold">Overall Tools Used : </span>
          {data.toolsUsed}
        </motion.p>

        <motion.p
          variants={textVariant(1.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center md:gap-4"
        >
          <span className="flex items-center">
            <span className="mr-1 text-xl">
              <AiOutlineLink />
            </span>
            <span className="font-bold">Live URL :</span>
          </span>
          <Link
            href={data.liveURL}
            target="_blank"
            className="break-words text-teal-600 underline  hover:opacity-70 dark:text-teal-400"
          >
            {data.liveURL}
          </Link>
        </motion.p>

        <motion.p
          variants={textVariant(1.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center md:gap-4"
        >
          <span className="flex items-center">
            <span className="mr-1 text-xl">
              <AiFillGithub />
            </span>
            <span className="font-bold">Github Repo :</span>
          </span>
          <Link
            href={data.githubRepo}
            target="_blank"
            className="break-words text-teal-600 underline hover:opacity-70 dark:text-teal-400"
          >
            {data.githubRepo}
          </Link>
        </motion.p>

        <motion.div
          variants={textVariant(1.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-2"
        >
          <p className="font-bold">Project Details :</p>
          {data.projectDescription.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
          projectDescription
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectPage;
