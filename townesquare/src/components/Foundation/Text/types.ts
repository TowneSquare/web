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
  XS: "xs",
} as const;

export const variants = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary"
} as const;

export type Scale = typeof scales[keyof typeof scales];
type Font = typeof fontObj[keyof typeof fontObj];

export interface TextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    font?: Font
    color?: string;
    fontSize?: string;
    fontWeight?: number;
    bold?: boolean;
    small?: boolean;
    scale?: Scale;
    breakWords?: boolean
    textTransform?: "uppercase" | "lowercase" | "capitalize";
    textAlign?: "left" | "center" | "right"
  }
  