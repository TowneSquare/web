import { NFTCollection } from "./collection";

export type Profile  = {
    id: string;
    address: string;
    isCreator: boolean;
    isFounder: boolean;
    collections: Array<NFTCollection>;
    DAOs: Array<any>;
    credentials: Array<string>;
    joinedAt: string;
    avatarUrl?: string;
}