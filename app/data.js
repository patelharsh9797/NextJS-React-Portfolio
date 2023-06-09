import { nanoid } from "nanoid";

const mainData = [
  {
    id: "123",
    projectTitle: "Emotter | T3 Stack",
    majorTools: "NextJS",
    toolsUsed:
      "NextJS 13, Tailwind, TypeScript , tRPC, Prisma, Clerk, React-Hot-Toast",
    liveURL: "https://emotter-phi.vercel.app/",
    githubRepo: "https://github.com/patelharsh9797/chirp_t3_stack",
    mainImg: "/emotterT3/emotter-t3-main.jpg",
    projectImages: [
      "/emotterT3/emotter1.jpg",
      "/emotterT3/emotter2.jpg",
      "/emotterT3/emotter3.jpg",
      "/emotterT3/emotter4.jpg",
      "/emotterT3/emotter5.jpg",
      "/emotterT3/emotter6.jpg",
    ],
    projectDescription: [
      "adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi",
      "adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi",
    ],
  },
  {
    id: "234",
    projectTitle: "Twitter Clone | T3 Stack",
    majorTools: "NextJS",
    toolsUsed:
      "NextJS 13,Tailwind,TypeScript ,tRPC , Prisma, Clerk, React-Hot-Toast",
    liveURL: "https://t3stack-twitter-clone.vercel.app/",
    githubRepo: "https://github.com/patelharsh9797/twitter_clone_t3",
    mainImg: "/twitterCloneT3/twitter1.png",
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
    id: "567",
    projectTitle: "Simple Github Api Call | NextJS",
    majorTools: "NextJS",
    toolsUsed: "NextJS 13,Tailwind",
    liveURL: "https://next13-github-api.vercel.app/",
    githubRepo: "https://github.com/patelharsh9797/Next_13.3_Basics",
    mainImg: "/githubApiNext/1.png",
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
    id: "897",
    projectTitle: "Movies Api App | NextJS",
    majorTools: "NextJS",
    toolsUsed: "NextJS 13,Tailwind",
    liveURL: "https://movies-api-next-app.vercel.app/",
    githubRepo: "https://github.com/patelharsh9797/First_Next_13_App",
    mainImg: "/moviesNext/1.png",
    projectImages: ["/moviesNext/1.png", "/moviesNext/2.png"],
    projectDescription: [
      "adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi",
      "adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi",
    ],
  },
];

export const getAllPortFolioData = () => {
  return [
    {
      id: nanoid(),
      projectTitle: "Emotter | T3 Stack",
      majorTools: "NextJS",
      toolsUsed:
        "NextJS 13,Tailwind,TypeScript ,tRPC , Prisma, Clerk, React-Hot-Toast",
      liveURL: "https://emotter-phi.vercel.app/",
      githubRepo: "https://github.com/patelharsh9797/chirp_t3_stack",
      mainImg: "/emotter-t3-main.jpg",
      projectImages: [
        "/emotter1.jpg",
        "/emotter2.jpg",
        "/emotter3.jpg",
        "/emotter4.jpg",
        "/emotter5.jpg",
        "/emotter6.jpg",
      ],
      projectDescription: [
        "adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi",
        "adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi",
      ],
    },
    {
      id: nanoid(),
      projectTitle: "Emotter | T3 Stack",
      majorTools: "NextJS",
      toolsUsed:
        "NextJS 13,Tailwind,TypeScript ,tRPC , Prisma, Clerk, React-Hot-Toast",
      liveURL: "https://emotter-phi.vercel.app/",
      githubRepo: "https://github.com/patelharsh9797/chirp_t3_stack",
      mainImg: "/emotter2.jpg",
      projectImages: [
        "/emotter1.jpg",
        "/emotter2.jpg",
        "/emotter3.jpg",
        "/emotter4.jpg",
        "/emotter5.jpg",
        "/emotter6.jpg",
      ],
      projectDescription: [
        "adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi",
        "adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi",
      ],
    },
  ];
};

export const getAllPortFolioImg = () => {
  return mainData.map((data) => ({
    id: data.id,
    mainImg: data.mainImg,
  }));
};

export const getAllPortFolioIDStatic = () => {
  return mainData.map((data) => ({
    params: { id: data.id.toString() },
  }));
};

export const getSinglePortfolio = (id) => {
  return mainData.find((data) => data.id.toString() === id);
};
