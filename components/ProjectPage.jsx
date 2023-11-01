"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn, textVariant } from "../app/animation";

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
        className="text-center text-3xl font-bold text-primary"
      >
        {data.projectTitle}
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {data.projectImages.map((imageSrc, index) => (
          <motion.div
            variants={fadeIn(
              "right",
              "spring",
              index < 1 ? (index + 0.5) * 0.5 : index * 0.75 * 0.5,
              1,
            )}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            key={`project_image-${index}`}
            className="cardGlass2 cursor-pointer overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              src={imageSrc ?? ""}
              alt="project images"
              className="h-auto bg-slate-500 bg-opacity-50 object-contain transition-all duration-500 hover:scale-105"
              width={550}
              height={550}
              loading="eager"
            />
          </motion.div>
        ))}
      </div>

      {data.projectVideo && (
        <motion.div
          variants={fadeIn("up", "tween", 0, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className=""
        >
          <video
            src={data.projectVideo}
            autoPlay
            loop
            muted
            className="cardGlass2 mx-auto aspect-video w-full rounded-2xl border-opacity-50 bg-slate-500 bg-opacity-50 shadow-lg md:w-3/5"
          />
        </motion.div>
      )}
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
            className="break-words text-primary underline  hover:opacity-70"
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
            className="break-words text-primary underline hover:opacity-70"
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectPage;
