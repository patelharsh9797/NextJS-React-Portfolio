import { nanoid } from "nanoid";

const mainData = [
  {
    id: nanoid(),
    projectTitle: "Emotter | T3 Stack",
    majorTools: "NextJS",
    toolsUsed:
      "NextJS 13,Tailwind,TypeScript ,tRPC , Prisma, Clerk, React-Hot-Toast",
    liveURL: "https://emotter-phi.vercel.app/",
    githubRepo: "https://github.com/patelharsh9797/chirp_t3_stack",
    mainImg: "/../public/emotter/emotter-t3-main.jpg",
    projectImages: [
      "/../public/emotter/emotter1.jpg",
      "/../public/emotter/emotter2.jpg",
      "/../public/emotter/emotter3.jpg",
      "/../public/emotter/emotter4.jpg",
      "/../public/emotter/emotter5.jpg",
      "/../public/emotter/emotter6.jpg",
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
    mainImg: "/../public/emotter/emotter2.jpg",
    projectImages: [
      "/../public/emotter/emotter1.jpg",
      "/../public/emotter/emotter2.jpg",
      "/../public/emotter/emotter3.jpg",
      "/../public/emotter/emotter4.jpg",
      "/../public/emotter/emotter5.jpg",
      "/../public/emotter/emotter6.jpg",
    ],
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
      mainImg: "/../public/emotter/emotter-t3-main.jpg",
      projectImages: [
        "/../public/emotter/emotter1.jpg",
        "/../public/emotter/emotter2.jpg",
        "/../public/emotter/emotter3.jpg",
        "/../public/emotter/emotter4.jpg",
        "/../public/emotter/emotter5.jpg",
        "/../public/emotter/emotter6.jpg",
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
      mainImg: "/../public/emotter/emotter2.jpg",
      projectImages: [
        "/../public/emotter/emotter1.jpg",
        "/../public/emotter/emotter2.jpg",
        "/../public/emotter/emotter3.jpg",
        "/../public/emotter/emotter4.jpg",
        "/../public/emotter/emotter5.jpg",
        "/../public/emotter/emotter6.jpg",
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

export const getSinglePortfolio = (id) => {
  return mainData.map((data) => data.id === id);
};
