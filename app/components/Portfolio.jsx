import React from "react";
import { getAllPortFolioImg } from "../data";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  const allPortfolios = getAllPortFolioImg();

  if (!allPortfolios) return <div>No Data Found</div>;

  return (
    <div className="grid gap-12 py-2 md:grid-cols-2">
      {allPortfolios.map((data) => (
        <div
          key={data.id}
          className="overflow-hidden rounded-xl shadow dark:shadow-teal-500"
        >
          <Link href={`/project/${data.id}`}>
            <Image
              alt="main image"
              style={{ height: "100% !important" }}
              src={data.mainImg}
              className="rounded-xl object-cover transition-all duration-500 hover:scale-105"
              width={100}
              height={100}
              layout="responsive"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
