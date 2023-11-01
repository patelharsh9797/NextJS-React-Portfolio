"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "../app/animation";

const PortfolioCard = ({ data, index }) => {
  return (
    <motion.div
      variants={fadeIn(
        "right",
        "spring",
        index < 1 ? (index + 0.5) * 0.5 : index * 0.75 * 0.5,
        1,
      )}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="cardGlass2 saturate-0 hover:saturate-100 overflow-hidden rounded-xl shadow-md transition-all duration-300"
    >
      <Link href={`/project/${data.id}`} className="group relative">
        <Image
          style={{ height: "100% !important" }}
          src={data.mainImg}
          alt={data.title}
          className="bg-slate-500 bg-opacity-50 object-cover group-hover:blur-sm"
          width={100}
          height={100}
          layout="responsive"
        />
        <div className="absolute top-[200%] z-10 flex h-full w-full  items-center justify-center bg-[rgba(0,0,0,0.75)] group-hover:inset-0">
          <motion.span
            variants={zoomIn()}
            initial="hidden"
            whileInView="show"
            className="rounded-md bg-primary px-4 py-2 font-semibold text-black sm:text-xl"
          >
            {data.title}
          </motion.span>
        </div>
      </Link>
    </motion.div>
  );
};

export default PortfolioCard;
