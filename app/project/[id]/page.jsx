import React from "react";
import { getSinglePortfolio,getAllPortFolioIDStatic } from "../../../data";
import ProjectPage from "../../../components/ProjectPage";


export async function generateStaticParams(){
  const projects = getAllPortFolioIDStatic()

  return projects.map(project => ({
    id:project.id
  }))
}

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
          No Project Details Found!!!
        </span>
      </div>
    );

  return <ProjectPage data={data} />;
}
