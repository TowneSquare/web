import { useTheme } from "@emotion/react"
import useMatchBreakpoints from "../../../hooks/useMatchBreakpoints"
import { BlueButton, ButtonContainer, ColouredContainer, WhiteButton, ContentWrapper } from "../../../pages/LandingPage/styles";
import styled from "@emotion/styled";
import { BgGradCircle } from "../../svgs";
import { Col, Row } from "../../../styles/common";
import { Title } from "../../Foundation";


export const Header = (props) => {
  const { isMobile, isTablet } = useMatchBreakpoints()
  const theme = useTheme();
    return (
      <ColouredContainer background={theme.colors.bg} style={{position: 'relative'}}>
        <ContentWrapper>
          <Row gap={`${theme.spacing[7]}px`} items="center">
            <Row gap={`${theme.spacing[5]}px`} items="center">
              <Title scale={isMobile || isTablet ? "md" : "lg"} style={{maxWidth: '872px'}}>
                {props.data.Header ? props.data.Header.title : 'Loading'}
              </Title>
              <Title scale="sm" style={{maxWidth: '702px'}}>
                {props.data.Header ? props.data.Header.paragraph : 'Loading'}
              </Title>
            </Row>
            <Col>
              <ButtonContainer style={{width: '100%'}}>
                <BlueButton>App Coming Soon</BlueButton>
                <WhiteButton>Read Docs</WhiteButton>
              </ButtonContainer>
            </Col>
          </Row>
        </ContentWrapper>
          <GradientBg>
            <BgGradCircle />
          </GradientBg>
      </ColouredContainer>
    )
}

const GradientBg = styled.div`
  position: absolute;
  bottom: -60%;
  left: 0;
  
  @media(min-width: 1024px) {
      bottom: -40%;
      left: -30%;

      svg {
        width: 100%;
      }
    }
`;
