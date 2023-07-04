import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import HTML from "/public/techs/html.svg";
import CSS from "/public/techs/css.svg";
import JS from "/public/techs/javascript.svg";
import REACTJS from "/public/techs/react.svg";
import NEXTJS from "/public/techs/next.svg";
import TS from "/public/techs/typescript.svg";
import TAILWIND from "/public/techs/tailwind.svg";
import PRISMA from "/public/techs/prisma.svg";
import PYTHON from "/public/techs/python.svg";
import SELENIUM from "/public/techs/selenium.svg";

// TODO static databse for porfolio
const mainData = [
  {
    id: "1accd961b2510074",
    projectTitle: "Emotter | T3 Stack",
    majorTools: "NextJS",
    toolsUsed:
      "NextJS 13, Tailwind, TypeScript , tRPC, Prisma, Clerk, React-Hot-Toast",
    liveURL: "https://emotter-phi.vercel.app/",
    githubRepo: "https://github.com/patelharsh9797/chirp_t3_stack",
    mainImg: "/emotterT3/emotter1.png",
    projectVideo: null,
    projectImages: [
      "/emotterT3/emotter1.png",
      "/emotterT3/emotter2.png",
      "/emotterT3/emotter3.png",
      "/emotterT3/emotter4.png",
      "/emotterT3/emotter5.png",
      "/emotterT3/emotter6.png",
      "/emotterT3/emotter7.png",
    ],
    projectDescription: [
      "adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi",
      "adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi",
    ],
  },
  {
    id: "a7ef19ce70b78b7f",
    projectTitle: "Twitter Clone | T3 Stack",
    majorTools: "NextJS",
    toolsUsed:
      "NextJS 13,Tailwind,TypeScript ,tRPC , Prisma, Clerk, React-Hot-Toast",
    liveURL: "https://t3stack-twitter-clone.vercel.app/",
    githubRepo: "https://github.com/patelharsh9797/twitter_clone_t3",
    mainImg: "/twitterCloneT3/twitter1.png",
    projectVideo: null,
    projectImages: [
      "/twitterCloneT3/twitter1.png",
      "/twitterCloneT3/twitter2.png",
      "/twitterCloneT3/twitter3.png",
      "/twitterCloneT3/twitter4.png",
      "/twitterCloneT3/twitter5.png",
      "/twitterCloneT3/twitter6.png",
      "/twitterCloneT3/twitter7.png",
      "/twitterCloneT3/twitter8.png",
    ],
    projectDescription: [
      "adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi",
      "adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi",
    ],
  },
  {
    id: "242df94aa5cd1bdf",
    projectTitle: "Simple Github Api Call | NextJS",
    majorTools: "NextJS",
    toolsUsed: "NextJS 13,Tailwind",
    liveURL: "https://next13-github-api.vercel.app/",
    githubRepo: "https://github.com/patelharsh9797/Next_13.3_Basics",
    mainImg: "/githubApiNext/1.png",
    projectVideo: null,
    projectImages: [
      "/githubApiNext/1.png",
      "/githubApiNext/2.png",
      "/githubApiNext/3.png",
      "/githubApiNext/4.png",
      "/githubApiNext/5.png",
      "/githubApiNext/6.png",
      "/githubApiNext/7.png",
      "/githubApiNext/8.png",
    ],
    projectDescription: [
      "adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi",
      "adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi",
    ],
  },
  {
    id: "c0b4c06a6cb1e75f",
    projectTitle: "Movies Api App | NextJS",
    majorTools: "NextJS",
    toolsUsed: "NextJS 13,Tailwind",
    liveURL: "https://movies-api-next-app.vercel.app/",
    githubRepo: "https://github.com/patelharsh9797/First_Next_13_App",
    mainImg: "/moviesNext/1.png",
    projectVideo: null,
    projectImages: ["/moviesNext/1.png", "/moviesNext/2.png"],
    projectDescription: [
      "adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi",
      "adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi",
    ],
  },
  {
    id: "e226deccbd673f77",
    projectTitle: "Metaverse Madness | NextJS",
    majorTools: "NextJS",
    toolsUsed: "NextJS 13, Tailwind, Framer Motion",
    liveURL: "https://metaverse-madness-next13.vercel.app/",
    githubRepo: "https://github.com/patelharsh9797/metaverse_madness",
    mainImg: "/metaverse/meta1.png",
    projectVideo: "/metaverse/metaVod.mp4",
    projectImages: [
      "/metaverse/meta1.png",
      "/metaverse/meta2.png",
      "/metaverse/meta3.png",
      "/metaverse/meta4.png",
      "/metaverse/meta5.png",
      "/metaverse/meta6.png",
      "/metaverse/meta7.png",
      "/metaverse/meta8.png",
    ],
    projectDescription: [
      "adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi",
      "adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi",
    ],
  },
];

const techsList = [
  {
    id: 1,
    name: "Html",
    path: HTML,
    isDark: false,
  },
  {
    id: 2,
    name: "CSS",
    path: CSS,
    isDark: false,
  },
  {
    id: 3,
    name: "JavaScript",
    path: JS,
    isDark: false,
  },
  {
    id: 4,
    name: "React JS",
    path: REACTJS,
    isDark: false,
  },
  {
    id: 5,
    name: "Next JS",
    path: NEXTJS,
    isDark: true,
  },
  {
    id: 6,
    name: "TypeScript",
    path: TS,
    isDark: false,
  },
  {
    id: 7,
    name: "Tailwind CSS",
    path: TAILWIND,
    isDark: false,
  },
  {
    id: 8,
    name: "Prisma",
    path: PRISMA,
    isDark: true,
  },
  {
    id: 9,
    name: "Python",
    path: PYTHON,
    isDark: false,
  },
  {
    id: 10,
    name: "Selenium",
    path: SELENIUM,
    isDark: false,
  },
];

const socialLinks = [
  {
    name: "github",
    icon: (
      <AiFillGithub className=" transition-all  duration-300 hover:text-teal-500" />
    ),
    link: "https://github.com/patelharsh9797",
  },
  {
    name: "linkedin",
    icon: (
      <AiFillLinkedin className=" transition-all  duration-300 hover:text-teal-500" />
    ),
    link: "https://www.linkedin.com/in/harsh-patel9797/",
  },
  {
    name: "twitter",
    icon: (
      <AiFillTwitterCircle className=" transition-all  duration-300 hover:text-teal-500" />
    ),
    link: "https://twitter.com/Patelharsh_9797",
  },
];

// TODO all the api kind of functions
export const getAllSocials = () => socialLinks;

export const getAllPortFolioImg = () =>
  mainData.map((data) => ({
    id: data.id,
    mainImg: data.mainImg,
    title: data.projectTitle,
  }));

export const getAllPortFolioIDStatic = () =>
  mainData.map((data) => ({
    params: { id: data.id.toString() },
  }));

export const getSinglePortfolio = (id) =>
  mainData.find((data) => data.id.toString() === id.toString());

export const getTeachList = () => techsList;
