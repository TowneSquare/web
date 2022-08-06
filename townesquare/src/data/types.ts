
export interface SectionDetails {
  title: string;
  description: string;
}

interface SectionData {
  title: string;
  details: SectionDetails[];
}

export interface LandingData {
    title: string;
    sections: SectionData[];
    description?: string;
}