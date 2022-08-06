
export interface SectionDetails {
  title: string;
  description: string;
}

interface EcosystemSection {
  title: string;
  details: SectionDetails[];
}

export interface EcosystemData {
    title: string;
    sections: EcosystemSection[];
}