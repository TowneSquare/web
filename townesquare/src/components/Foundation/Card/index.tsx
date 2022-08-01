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

const Card: React.FC<CardProps> = ({height, width, maxWidth, background,borderRadius, boxShadow, children}, props) => {
    return (
        <StyledCard height={height ?? '100%'} width={width ?? '100%'} maxWidth={maxWidth} boxShadow={boxShadow} borderRadius={borderRadius} background={background} {...props}>
            {children}
        </StyledCard>
    )
}

const StyledCard = styled.div<CardProps>`
    width: ${({ width }) => width};
    height:  ${({height }) => height};
    max-width: ${props => props.maxWidth ?? '1200px'};
    background: ${({background, theme}) => background ?? theme.colors.gradient};
    box-shadow: ${props => props.boxShadow ?? props.theme.shadows.card};
    border-radius: ${props => props.borderRadius ?? props.theme.radii.default};
`;



export default Card;