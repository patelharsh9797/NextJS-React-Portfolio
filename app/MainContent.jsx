// import Image from "next/image";

// import design from "../public/design.png";
// import code from "../public/code.png";
// import consulting from "../public/consulting.png";

import Hero from "./components/Hero";
import PortfolioSection from "./components/PortfolioSection";

const MainContent = () => {
  return (
    <>
      <Hero />
      <PortfolioSection />
      {/* <section className="">
        <div>
          <h3 className="py-1 text-3xl font-medium dark:text-teal-400">
            Service I Offers
          </h3>
          <p className="text-md py-2 leading-8 text-slate-600 dark:text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ex
            illo laborum architecto animi natus{" "}
            <span className="text-teal-500">officiis</span> psam fugit cumque
            excepturi.
          </p>
          <p className="text-md py-2 leading-8 text-slate-600 dark:text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ex
            illo laborum architecto animi natus{" "}
            <span className="text-teal-500">officiis</span> psam fugit cumque
            excepturi.
          </p>
        </div>

        <div className="mt-2 flex flex-col gap-4 lg:flex-row">
          <div className="rounded-xl border border-teal-500 p-10 text-center shadow-md dark:shadow-teal-500/50">
            <Image
              alt="image"
              src={design}
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="pb-2 pt-8 text-lg font-medium">Beautiful Design</h3>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos, autem!
            </p>
            <h4 className="py-4 text-teal-500">Design Tools i use</h4>
            <p className="py-1 text-slate-600 dark:text-slate-500">Photoshop</p>
            <p className="py-1 text-slate-600 dark:text-slate-500">
              Illustrator
            </p>
            <p className="py-1 text-slate-600 dark:text-slate-500">Figma</p>
          </div>
          <div className="rounded-xl border border-teal-500 p-10 text-center shadow-md dark:shadow-teal-500/50">
            <Image
              alt="image"
              src={code}
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="pb-2 pt-8 text-lg font-medium">Beautiful Design</h3>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos, autem!
            </p>
            <h4 className="py-4 text-teal-500">Design Tools i use</h4>
            <p className="py-1 text-slate-600 dark:text-slate-500">Photoshop</p>
            <p className="py-1 text-slate-600 dark:text-slate-500">
              Illustrator
            </p>
            <p className="py-1 text-slate-600 dark:text-slate-500">Figma</p>
          </div>
          <div className="rounded-xl border border-teal-500 p-10 text-center shadow-md dark:shadow-teal-500/50">
            <Image
              alt="image"
              src={consulting}
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="pb-2 pt-8 text-lg font-medium">Beautiful Design</h3>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos, autem!
            </p>
            <h4 className="py-4 text-teal-500">Design Tools i use</h4>
            <p className="py-1 text-slate-600 dark:text-slate-500">Photoshop</p>
            <p className="py-1 text-slate-600 dark:text-slate-500">
              Illustrator
            </p>
            <p className="py-1 text-slate-600 dark:text-slate-500">Figma</p>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default MainContent;
