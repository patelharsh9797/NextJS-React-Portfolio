import React from "react";

import Image from "next/image";
import Link from "next/link";

import myProfileImg from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Portfolio from "./components/Portfolio";

const MainContent = () => {
  return (
    <div className={`space-y-12 pb-8`}>
      <section className="min-h-screen">
        <div className="p-10 text-center">
          <h2 className="py-2 text-5xl font-medium text-teal-500 md:text-6xl">
            Harsh Patel
          </h2>
          <h3 className="py-2 text-2xl md:text-3xl">Developer and Designer</h3>
          <p className="text-md mx-auto max-w-xl py-5 leading-8  text-slate-600 dark:text-slate-500 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            eaque eum id quidem vel alias quasi voluptatem, consectetur cumque
            aperiam.
          </p>
        </div>

        <div className="flex justify-center gap-16 text-5xl text-slate-600 dark:text-slate-500">
          <Link href={"https://github.com/patelharsh9797"} target="_blank">
            <AiFillGithub className=" transition-all  duration-300 hover:text-teal-500" />
          </Link>

          <Link
            href={"https://www.linkedin.com/in/harsh-patel9797/"}
            target="_blank"
          >
            <AiFillLinkedin className=" transition-all  duration-300 hover:text-teal-500" />
          </Link>

          <Link href={"https://twitter.com/Patelharsh_9797"} target="_blank">
            <AiFillTwitterCircle className=" transition-all  duration-300 hover:text-teal-500" />
          </Link>

          {/* <Link href={"#"} target="_blank">
            <AiFillYoutube className=" hover:text-teal-500 transition-all duration-300" />
          </Link> */}
        </div>

        <div className="relative mx-auto mt-20 h-80 w-80  overflow-hidden rounded-full bg-gradient-to-b from-teal-500 shadow-xl md:h-96 md:w-96">
          <Image
            alt="image"
            src={myProfileImg}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-500 hover:scale-105"
          />
        </div>
      </section>

      <section className="">
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
      </section>

      <section className="">
        <div>
          <h3 className="py-1 text-3xl font-medium dark:text-teal-400">
            Portfolio
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

        <Portfolio />
      </section>
    </div>
  );
};

export default MainContent;
