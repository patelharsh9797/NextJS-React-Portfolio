import React from "react";
import { getSinglePortfolio } from "@/app/data";

import Image from "next/image";
import Link from "next/link";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

export function generateMetadata({ params: { id } }) {
  const data = getSinglePortfolio(id);
  if (!data) return null;
  return { title: data.projectTitle };
}

export default function SingleProject({ params: { id } }) {
  const data = getSinglePortfolio(id);

  if (!data) return <div>Error While Getting the Project Details</div>;

  return (
    <>
      <div className={`space-y-8 pb-8 text-center`}>
        <h2 className="text-2xl font-bold">{data.projectTitle}</h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {data.projectImages.map((imageSrc, i) => (
            <div
              key={i}
              className="cursor-pointer overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={imageSrc}
                alt="project images"
                className="transition-all duration-500 hover:scale-105"
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
