
export interface EcosystemDetails {
  title: string;
  description: string;
}

interface EcosystemSection {
  title: string;
  details: EcosystemDetails[];
}

export interface EcosystemData {
    title: string;
    sections: EcosystemSection[];
}