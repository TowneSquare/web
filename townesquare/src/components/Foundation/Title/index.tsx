import styled from "@emotion/styled";
import React from "react";
import { TextProps } from "./types";

const getFontSize = ({ fontSize, scale }: TextProps) => {
    return fontSize || 
        scale === 'xs' ? "25px"
        : scale === 'sm' ? "35px"
        : scale === 'md' ? "70px"
        : scale === 'lg' ? '104px' 
        : "75px"
    };

const Title = styled.div<TextProps>`
    font-family: 'Outfit', sans-serif;;
    font-size: ${getFontSize};
    font-weight: ${({ bold, fontWeight }) => fontWeight ? fontWeight : bold ? 700 : 600};
    line-height: ${({ scale }) => scale == 'sm' ? '140%' : '120%'};
    color: ${({ color, theme }) => color ?? theme.colors.textPrimary};
    text-align: ${({ textAlign }) => textAlign ?? 'center'};
    text-shadow: ${({ scale }) => scale === 'sm' ? 'none' : '2px 4px 12px rgba(255, 0, 184, 0.65)'};
    ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
`;

export default Title