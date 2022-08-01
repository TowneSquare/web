import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;

  background-color: var(--white);
`;

export const ColoredContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;

  background-color: var(--pickled-bluewood);
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;


export const Row = styled.div<{
  gap?: string;
  align?: string;
  justify?: string;
  items?: string;
}>`
  display: grid;
  grid-auto-flow: row;
  grid-gap: ${props => props.gap ?? '0'};
  align-items: ${props => props.align ?? 'start'};
  justfy-content: ${props => props.justify ?? 'start'};
  justify-items: ${props => props.items ?? 'none'};
`;

export const Col = styled.div<{gap?: string, pl?: string, pr?: string, items?: string, justify?: string,align?: string}>`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${props => props.gap ?? '1rem'};
  align-items: center;
  padding-left: ${props => props.pl};
  padding-right: ${props => props.pl};
  justify-content: ${props => props.justify ?? 'start'};
  justify-items: ${props => props.items ?? 'none'};
`

export const Text = styled.p<{
  color?: string,
  size?: string,
  lh?: string,
  margin?: string,
  break?: boolean,
  spacing?: string,
  weight?: string}>`
  color: ${props => props.color ?? 'slategray'};
  font-size: ${props => props.size ?? '.85em'};
  font-weight: ${props => props.weight ?? '400'};
  line-height: ${props => props.lh};
  font-family: inherit;
  margin: ${props => props.margin};
  letter-spacing: ${props => props.spacing ?? '0.1em'};
  word-break: ${props => props.break ? 'break-word' : 'keep-all'};
`

export const Space = styled.div<{w?: string, h?: string}>`
  width: ${props => props.w ?? '1rem'};
  height: ${props => props.h ?? '1rem'};
`

export const Button = styled.button<{bg?: string}>`
  padding: 5px 15px 5px 15px;
  width: max-content;
  border-radius: 5px;
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

export const Title = styled.h1`
  font-family: var(--font-family-montserrat-semibold);
  color: var(--white);
  font-size: 32px;
`;