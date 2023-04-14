"use client";

import React from "react";
import Nav from "./components/Nav";
import { useTheme } from "next-themes";

import Image from "next/image";
import Link from "next/link";

import myProfileImg from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const MainContent = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className={`space-y-12 ${currentTheme === "dark" ? "dark" : ""}`}>
      <section className="min-h-screen">
        <Nav currentTheme={currentTheme} setTheme={setTheme} />

        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-500 font-medium md:text-6xl">
            Harsh Patel
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl">Developer and Designer</h3>
          <p className="text-md py-5 leading-8 text-slate-600 dark:text-slate-500  md:text-xl max-w-xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            eaque eum id quidem vel alias quasi voluptatem, consectetur cumque
            aperiam.
          </p>
        </div>

        <div className="text-5xl flex justify-center gap-16 text-slate-600 dark:text-slate-500">
          <Link href={"https://github.com/patelharsh9797"} target="_blank">
            <AiFillGithub className=" hover:text-teal-500  transition-all duration-300" />
          </Link>

          <Link
            href={"https://www.linkedin.com/in/harsh-patel9797/"}
            target="_blank"
          >
            <AiFillLinkedin className=" hover:text-teal-500  transition-all duration-300" />
          </Link>

          <Link href={"https://twitter.com/Patelharsh_9797"} target="_blank">
            <AiFillTwitterCircle className=" hover:text-teal-500  transition-all duration-300" />
          </Link>

          {/* <Link href={"#"} target="_blank">
            <AiFillYoutube className=" hover:text-teal-500 transition-all duration-300" />
          </Link> */}
        </div>

        <div className="relative mx-auto mt-20 bg-gradient-to-b shadow-xl  from-teal-500 rounded-full w-80 h-80 overflow-hidden md:w-96 md:h-96">
          <Image
            alt="image"
            src={myProfileImg}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      <section className="">
        <div>
          <h3 className="text-3xl font-medium dark:text-teal-400 py-1">
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

        <div className="flex lg:flex-row flex-col gap-4 mt-2">
          <div className="text-center shadow-md border border-teal-500 dark:shadow-teal-500/50 p-10 rounded-xl">
            <Image
              alt="image"
              src={design}
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos, autem!
            </p>
            <h4 className="py-4 text-teal-500">Design Tools i use</h4>
            <p className="text-slate-600 dark:text-slate-500 py-1">Photoshop</p>
            <p className="text-slate-600 dark:text-slate-500 py-1">
              Illustrator
            </p>
            <p className="text-slate-600 dark:text-slate-500 py-1">Figma</p>
          </div>
          <div className="text-center shadow-md border border-teal-500 dark:shadow-teal-500/50 p-10 rounded-xl">
            <Image
              alt="image"
              src={code}
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos, autem!
            </p>
            <h4 className="py-4 text-teal-500">Design Tools i use</h4>
            <p className="text-slate-600 dark:text-slate-500 py-1">Photoshop</p>
            <p className="text-slate-600 dark:text-slate-500 py-1">
              Illustrator
            </p>
            <p className="text-slate-600 dark:text-slate-500 py-1">Figma</p>
          </div>
          <div className="text-center shadow-md border border-teal-500 dark:shadow-teal-500/50 p-10 rounded-xl">
            <Image
              alt="image"
              src={consulting}
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos, autem!
            </p>
            <h4 className="py-4 text-teal-500">Design Tools i use</h4>
            <p className="text-slate-600 dark:text-slate-500 py-1">Photoshop</p>
            <p className="text-slate-600 dark:text-slate-500 py-1">
              Illustrator
            </p>
            <p className="text-slate-600 dark:text-slate-500 py-1">Figma</p>
          </div>
        </div>
      </section>

      <section className="">
        <div>
          <h3 className="text-3xl font-medium dark:text-teal-400 py-1">
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

        {/* <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap"> */}
        <div className="grid gap-10 lg:grid-cols-2  py-10">
          <div className="basis-1/3 flex-1 rounded-xl overflow-hidden shadow dark:shadow-teal-500">
            <Image
              alt="image"
              style={{ height: "100% !important" }}
              src={web1}
              className="h-full rounded-xl object-cover hover:scale-105 transition-all duration-500"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1 rounded-xl overflow-hidden shadow dark:shadow-teal-500">
            <Image
              alt="image"
              style={{ height: "100% !important" }}
              src={web2}
              className="h-full rounded-xl object-cover hover:scale-105 transition-all duration-500"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1 rounded-xl overflow-hidden shadow dark:shadow-teal-500">
            <Image
              alt="image"
              style={{ height: "100% !important" }}
              src={web3}
              className="h-full rounded-xl object-cover hover:scale-105 transition-all duration-500"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1 rounded-xl overflow-hidden shadow dark:shadow-teal-500">
            <Image
              alt="image"
              style={{ height: "100% !important" }}
              src={web4}
              className="h-full rounded-xl object-cover hover:scale-105 transition-all duration-500"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1 rounded-xl overflow-hidden shadow dark:shadow-teal-500">
            <Image
              alt="image"
              style={{ height: "100% !important" }}
              src={web5}
              className="h-full rounded-xl object-cover hover:scale-105 transition-all duration-500"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1 rounded-xl overflow-hidden shadow dark:shadow-teal-500">
            <Image
              alt="image"
              style={{ height: "100% !important" }}
              src={web6}
              className="h-full rounded-xl object-cover hover:scale-105 transition-all duration-500"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
