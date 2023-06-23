import React from "react";
import { getSinglePortfolio } from "@/app/data";

import Image from "next/image";
import Link from "next/link";

import { AiOutlineLink, AiFillGithub } from "react-icons/ai";

export function generateMetadata({ params: { id } }) {
  const data = getSinglePortfolio(id);

  if (!data) return null;

  return { title: data.projectTitle };
}

export default function SingleProject({ params: { id } }) {
  const data = getSinglePortfolio(id);

  if (!data)
    return (
      <div className="flex justify-center">
        <span className="rounded-lg bg-rose-500 px-8 py-2 text-xl font-bold text-black">
          Error while Getting the Project Details
        </span>
      </div>
    );

  return (
    <>
      <div className={`flex flex-col gap-12 pb-8`}>
        <h2 className="text-center text-2xl font-bold text-teal-300">
          {data.projectTitle}
        </h2>

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

        <div className="space-y-8">
          <p>
            <span className="font-bold">Main Technology Used : </span>
            {data.majorTools}
          </p>

          <p>
            <span className="font-bold">Overall Tools Used : </span>
            {data.toolsUsed}
          </p>

          <p className="flex flex-col md:flex-row md:items-center md:gap-4">
            <span className="flex items-center">
              <span className="mr-1 text-xl">
                <AiOutlineLink />
              </span>
              <span className="font-bold">Live URL :</span>
            </span>
            <Link
              href={data.liveURL}
              target="_blank"
              className="text-teal-300 underline hover:opacity-70"
            >
              {data.liveURL}
            </Link>
          </p>

          <p className="flex flex-col md:flex-row md:items-center md:gap-4">
            <span className="flex items-center">
              <span className="mr-1 text-xl">
                <AiFillGithub />
              </span>
              <span className="font-bold">Github Repo :</span>
            </span>
            <Link
              href={data.githubRepo}
              target="_blank"
              className="text-teal-300 underline hover:opacity-70"
            >
              {data.githubRepo}
            </Link>
          </p>

          <div className="flex flex-col gap-2">
            <p className="font-bold">Project Details :</p>
            {data.projectDescription.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
            projectDescription
          </div>
        </div>
      </div>
    </>
  );
}
