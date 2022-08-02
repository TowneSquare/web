import styled from "@emotion/styled";

export const Button = styled.button<{bg?: string}>`
padding: 5px 15px 5px 15px;
width: max-content;
border-radius: ${props => props.theme.radii.default};
border-style: none;
font-weight: 600;
font-size: 1rem;

cursor: pointer;
color: white;
color: #1fb49b;
background-color: #1fb49b;
border-color: white;
color: white;
transition: all 0.5s;

&:hover {
    background-color: #1ec0f0;
    border-color: white;
}
p {
  color: inherit;
}
`;
