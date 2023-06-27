import React from "react";
import { getSinglePortfolio } from "@/app/data";

import ProjectPage from "@/app/components/ProjectPage";

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

  return <ProjectPage data={data} />;
}
