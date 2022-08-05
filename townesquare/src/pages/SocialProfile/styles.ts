import styled from "@emotion/styled";

interface BoxProps {
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  margin?: string;
  padding?: string;
  bg?: string;
  justify?: string;
  items?: string;
  color?: string;
  radius?: string;
  cursor?: string;
  fontSize?: string;
  fontWeight?: string;
  border?: string;
  flexWrap?: string;
  rowGap?: string;
  columnGap?: string;

  ml?: string;
  mr?: string;
  mt?: string;
  mb?: string;
  pl?: string;
  pr?: string;
  pt?: string;
  pb?: string;
}
export const Box = styled.div<BoxProps>`
  width: ${props => props.width};
  max-width: ${props => props.maxWidth};
  min-width: ${props => props.minWidth};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  background: ${props => props.bg};
  justify-content: ${props => props.justify};
  align-items: ${props => props.items};
  color: ${props => props.color};
  border-radius: ${props => props.radius};
  cursor: ${props => props.cursor};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  border: ${props => props.border};
  flex-wrap: ${props => props.flexWrap};
  row-gap: ${props => props.rowGap};
  column-gap: ${props => props.columnGap};

  margin-left: ${props => props.ml};
  margin-right: ${props => props.mr};
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
  padding-left: ${props => props.pl};
  padding-right: ${props => props.pr};
  padding-top: ${props => props.pt};
  padding-bottom: ${props => props.pb};
`;

export const Flex = styled(Box)<{ direction?: string }>`
  display: flex;
  flex-direction: ${props => props.direction ?? "row"};
`;

interface TextProps {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  wordBreak?: string;
}
export const Text = styled.span<TextProps>`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  word-break: ${props => props.wordBreak};
`;

interface ImageProps {
  width?: string;
  height?: string;
  cursor?: string;
}
export const Image = styled.img<ImageProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  cursor: ${props => props.cursor};
`;
