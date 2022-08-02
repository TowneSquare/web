import React from 'react';
import styled from '@emotion/styled';

interface CardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    height?: string;
    width?: string;
    maxWidth?: string;
    background?: string;
    boxShadow?: string;
    borderRadius?: string;
}

const Card = styled.div<CardProps>`
    width: ${({ width }) => width};
    height:  ${({height }) => height};
    max-width: ${props => props.maxWidth ?? '100%'};
    background: ${({background, theme}) => background ?? theme.colors.card};
    box-shadow: ${props => props.boxShadow ?? props.theme.shadows.card};
    border-radius: ${props => props.borderRadius ?? props.theme.radii.default};
`;



export default Card;