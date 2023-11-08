import React from "react";
import { getAllPortFolioImg } from "../data";

import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  const allPortfolios = getAllPortFolioImg();

  if (!allPortfolios) return <div>No Data Found</div>;

  return (
    <div className="grid gap-12 py-2 md:grid-cols-2 ">
      {allPortfolios.map((data, index) => (
        <PortfolioCard key={`portfolioCard-${data.id}`} data={data} index={index} />
      ))}
    </div>
  );
};

export default Portfolio;
