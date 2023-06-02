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
      <div className={`space-y-8 pb-8`}>
        <h2 className="text-center text-2xl font-bold">{data.projectTitle}</h2>

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

        <p>
          <span className="font-bold">Main Technology Used : </span>
          {data.majorTools}
        </p>
        <p>
          <span className="font-bold">Overall Tools Used : </span>
          {data.toolsUsed}
        </p>
        <p className="flex flex-col md:flex-row md:items-center md:gap-2">
          <span>
            <span className="mr-1">LinkIcon</span>
            <span className="font-bold">Live URL :</span>
          </span>
          <Link href={data.liveURL} target="_blank" className="underline">
            {data.liveURL}
          </Link>
        </p>
        <p className="flex flex-col md:flex-row md:items-center md:gap-2">
          <span>
            <span className="mr-1">LinkIcon</span>
            <span className="font-bold">Github Repo :</span>
          </span>
          <Link href={data.githubRepo} target="_blank" className="underline">
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
    </>
  );
}
