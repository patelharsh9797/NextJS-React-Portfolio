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
    id: "234",
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
