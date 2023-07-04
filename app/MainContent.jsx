// import Image from "next/image";

// import design from "../public/design.png";
// import code from "../public/code.png";
// import consulting from "../public/consulting.png";

import Hero from "./components/Hero";
import PortfolioSection from "./components/PortfolioSection";
import TechSection from "./components/TechSection";

const MainContent = () => {
  return (
    <>
      <Hero />
      <TechSection />
      <PortfolioSection />
    </>
  );
};

export default MainContent;
