import { NFTCollection } from "../../types/collection";

export const dummyProfile = {
  id: "0",
  name: "dummy",
  image: "/noimage.png",
  joinedAt: Date.now().toString(),
  address: "7UCqmhXkU77mPWaExHUPtMugBghr4zfzFW1kUa5YRSKc",
  domain: "Domain Name Linked",
  profileLink: "",
  isCreator: true,
  isFounder: true,
  collections: [
    {
      id: "dummy-1",
      name: "StepN",
      creator: "",
      createdAt: "",
    } as NFTCollection,
    {
      id: "dummy-2",
      name: "Monke",
      creator: "",
      createdAt: "",
    } as NFTCollection,
    {
      id: "dummy-3",
      name: "Chillchat",
      creator: "",
      createdAt: "",
    } as NFTCollection,
    {
      id: "dummy-4",
      name: "DegenApe",
      creator: "",
      createdAt: "",
    } as NFTCollection,
    {
      id: "dummy-5",
      name: "DeGods",
      creator: "",
      createdAt: "",
    } as NFTCollection,
    {
        id: "dummy-1",
        name: "StepN",
        creator: "",
        createdAt: "",
      } as NFTCollection,
      {
        id: "dummy-2",
        name: "Monke",
        creator: "",
        createdAt: "",
      } as NFTCollection,
      {
        id: "dummy-3",
        name: "Chillchat",
        creator: "",
        createdAt: "",
      } as NFTCollection,
      {
        id: "dummy-4",
        name: "DegenApe",
        creator: "",
        createdAt: "",
      } as NFTCollection,
      {
        id: "dummy-5",
        name: "DeGods",
        creator: "",
        createdAt: "",
      } as NFTCollection,
  ],
  DAOs: [
    {
      name: "MonkeDAO",
      image: "/dao.svg",
      since: 5, // Date.now() - (5 months)
    },
    {
      name: "Mango DAO",
      image: "/dao.svg",
      since: 7,
    },
    {
      name: "Grape",
      image: "/dao.svg",
      since: 7,
    },
    {
      name: "MonkeDAO",
      image: "/dao.svg",
      since: 19,
    },
  ],
  credentials: ["Raydium RAYdiator", "2022 is gonna be SOL Cool"],
  aboutme:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim magna in vestibulum malesuada. Proin rhoncus tempor ipsum in vulputate. Etiam et nisi egestas, sagittis nulla sed, gravida nunc. Proin.",
  balances: [
    {
      symbol: "SOLANA",
      change: "-5.2%",
      amount: 112.3343,
      usd: 4895.30
    },
    {
      symbol: "SPEECH",
      change: "-5.2%",
      amount: 112.3343,
      usd: 4895.30
    },
    {
      symbol: "USDC",
      change: "-5.2%",
      amount: 112.3343,
      usd: 4895.30
    },
  ],
  inventory: [
    {
      label: "Socials",
      mark: 0
    },
    {
      label: "Tweets",
      mark: 0
    },
    {
      label: "Others",
      mark: 0
    },
  ]
};
