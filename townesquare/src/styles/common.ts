import styled from "@emotion/styled";

export const Container = styled.div<{background?: string}>`
  width: 100vw;
  min-height: 100vh;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  background: ${props => props.background ?? 'transparent'};
`;

export const ColoredContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.primary};
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

// export const Text = styled.p<{
//   color?: string,
//   size?: string,
//   lh?: string,
//   margin?: string,
//   break?: boolean,
//   spacing?: string,
//   weight?: string}>`
//   color: ${props => props.color ?? 'slategray'};
//   font-size: ${props => props.size ?? '.85em'};
//   font-weight: ${props => props.weight ?? '400'};
//   line-height: ${props => props.lh};
//   font-family: inherit;
//   margin: ${props => props.margin};
//   letter-spacing: ${props => props.spacing ?? '0.1em'};
//   word-break: ${props => props.break ? 'break-word' : 'keep-all'};
// `

export const Space = styled.div<{w?: string, h?: string}>`
  width: ${props => props.w ?? '1rem'};
  height: ${props => props.h ?? '1rem'};
`
