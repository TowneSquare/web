
export interface SectionDetails {
  title: string;
  description: string;
}

interface Section {
  title: string;
  details: SectionDetails[];
}

export interface LandingData {
    title: string;
    sections: Section[];
    description?: string;
}