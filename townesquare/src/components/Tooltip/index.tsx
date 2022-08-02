import styled from "@emotion/styled";

export const CopiedTooltip = styled.div`
    padding: .5rem 1rem;
    background: ${props => props.theme.colors.secondary};
    border-radius: ${props => props.theme.radii.small};
    margin: 1rem;
    display: grid;
    grid-template-rows: 1fr;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    transform: translateY(60px);

    p {
        color: ${props => props.theme.colors.textPrimary};
        font-size: 14px;
    }
`;