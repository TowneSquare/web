import { typography } from "../../../styles/typography";

const fontObj: {
  [key: string]: string
} = {}

Object.keys(typography).forEach((font) => {
  fontObj[font] = font
})


export const scales = {
	LG: "lg",
  MD: "md",
  SM: "sm",
} as const;

export const variants = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
} as const;

export type Scale = typeof scales[keyof typeof scales];
type Font = typeof fontObj[keyof typeof fontObj];

export interface TextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    font?: Font
    fontWeight?: number;
    color?: string;
    fontSize?: string;
    bold?: boolean;
    scale?: Scale;
    breakWords?: boolean
    textTransform?: "uppercase" | "lowercase" | "capitalize";
    textAlign?: "left" | "center" | "right"
  }
  