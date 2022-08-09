import styled from "@emotion/styled";
import React from "react";
import { TextProps } from "./types";

const getFontSize = ({ fontSize, small }: TextProps) => {
    return small ? "12px" : fontSize || "0.875rem";
  };

const Text = styled.div<TextProps>`
    font-family: 'Outfit', sans-serif;;
    font-size: ${getFontSize};
    font-weight: ${({ fontWeight, bold }) => fontWeight ?? (bold ? 800 : 500)};
    line-height: 1.75;
    word-break: ${({ breakWords }) => breakWords ? 'break-word' : 'unset'};
    color: ${({ color, theme }) => color ?? theme.colors.textPrimary};
    text-align: ${({ textAlign }) => textAlign ?? 'start'};
    ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
`;

export default Text