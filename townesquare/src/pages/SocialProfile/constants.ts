import { NFTCollection } from "../../types/collection"

export const dummyProfile = {
    id: '0',
    joinedAt: Date.now().toString(),
    address: '7UCqmhXkU77mPWaExHUPtMugBghr4zfzFW1kUa5YRSKc',
    isCreator: true,
    isFounder: true,
    collections: [
        {   
            id: 'dummy-1',
            name: "StepN",
            creator: "",
            createdAt: ""
        } as NFTCollection,
        {
            id: 'dummy-2',
            name: "Monke",
            creator: "",
            createdAt: ""
        } as NFTCollection,
        {
            id: 'dummy-3',
            name: "Chillchat",
            creator: "",
            createdAt: ""
        } as NFTCollection,
        {
            id: 'dummy-4',
            name: "DegenApe",
            creator: "",
            createdAt: ""
        } as NFTCollection,
        {
            id: 'dummy-5',
            name: "DeGods",
            creator: "",
            createdAt: ""
        } as NFTCollection,
    ],
    DAOs: [
        {
            name: 'MonkeDAO',
            since: 5,  // Date.now() - (5 months)
        },
        {
            name: 'Mango DAO',
            since: 7,
        },
        {
            name: 'Grape',
            since: 7,
        },
        {
            name: 'MonkeDAO',
            since:  19,
        },
    ],
    credentials: [
        "Raydium RAYdiator",
        "2022 is gonna be SOL Cool"
    ],
}
