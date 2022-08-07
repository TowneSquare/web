import styled from "@emotion/styled";

export const Container = styled.div<{background?: string}>`
  width: 100%;
  background: ${props => props.background ?? 'transparent'};
`;

export const ColoredContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  background-color: ${props => props.theme.colors.primary};
`;

export const Wrapper = styled.div<{padding?: string}>`
  padding: ${props => props.padding ?? '0'};
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
  grid-gap: ${props => props.gap ?? '8px'};
  align-items: ${props => props.align ?? 'start'};
  padding-left: ${props => props.pl};
  padding-right: ${props => props.pl};
  justify-content: ${props => props.justify ?? 'start'};
  justify-items: ${props => props.items ?? 'none'};
`

export const Space = styled.div<{w?: string, h?: string}>`
  width: ${props => props.w ?? '1rem'};
  height: ${props => props.h ?? '1rem'};
`
