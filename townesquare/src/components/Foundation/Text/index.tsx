import styled from "@emotion/styled";
import { TextProps } from "./types";

const getFontSize = ({ fontSize, small }: TextProps) => {
    return small ? "12px" : fontSize || "0.875rem";
  };

const Text = styled.div<TextProps>`
    font-family: 'Lato', 'Roboto', 'Noto Sans SC Sliced', 'Helvetica', 'Arial', sans-serif;
    font-size: ${getFontSize};
    font-weight: ${({ bold }) => (bold ? 900 : 500)};
    line-height: 1.75;
    color: ${({ color, theme }) => color ?? theme.colors.textPrimary};
    ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
`;

export default Text