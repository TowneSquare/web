export type NFTCollection  = {
    id: string;
    name: string;
    creator: string;
    createdAt: string;
    lastMintedAt?: string;
    solContractAddress?: string;
    solMintAddress?: string;
    owner?: string;
}