import { useTheme } from "@emotion/react"
import useMatchBreakpoints from "../../../hooks/useMatchBreakpoints"
import { ButtonContainer, ColouredContainer, WhiteButton, ContentWrapper, GradientButton } from "../../../pages/LandingPage/styles";
import styled from "@emotion/styled";
import { BgGradCircle } from "../../svgs";
import { Col, Row } from "../../../styles/common";
import { Title } from "../../Foundation";

const header_00 = require('../../../assets/images/header_00.png')
const header_01 = require('../../../assets/images/header_01.png')
const header_02 = require('../../../assets/images/header_02.png')
const header_03 = require('../../../assets/images/header_03.png')
const header_04 = require('../../../assets/images/header_04.png')
const header_05 = require('../../../assets/images/header_05.png')
const header_10 = require('../../../assets/images/header_10.png')
const header_11 = require('../../../assets/images/header_11.png')
const header_12 = require('../../../assets/images/header_12.png')
const header_13 = require('../../../assets/images/header_13.png')
const header_14 = require('../../../assets/images/header_14.png')
const header_15 = require('../../../assets/images/header_15.png')
const header_20 = require('../../../assets/images/header_20.png')
const header_21 = require('../../../assets/images/header_21.png')
const header_22 = require('../../../assets/images/header_22.png')
const header_23 = require('../../../assets/images/header_23.png')
const header_24 = require('../../../assets/images/header_24.png')
const header_25 = require('../../../assets/images/header_25.png')


export const Header = (props) => {
  const { isMobile, isTablet } = useMatchBreakpoints()
  const theme = useTheme();
    return (
      <ColouredContainer background={theme.colors.bg} style={{position: 'relative'}}>
        <ContentWrapper>
          <Row gap={`${theme.spacing[7]}px`} items="center">
            <Row gap={`${theme.spacing[5]}px`} items="center">
              <Title scale={isMobile ? "sm" : isTablet ? "md" : "lg"} style={{maxWidth: '872px'}}>
                {props.data.Header ? props.data.Header.title : 'Loading'}
              </Title>
              <Title scale={isMobile ? "xs":"sm"}style={{maxWidth: '702px', paddingLeft:"4rem", paddingRight:"4rem"}}>
                {props.data.Header ? props.data.Header.paragraph : 'Loading'}
              </Title>
            </Row>
            <Col>
              <ButtonContainer style={{width: '100%'}}>
                <GradientButton>App Coming Soon</GradientButton>
                <WhiteButton><LinkFooter href="https://docs.townesquare.xyz/townesquare-whitepaper/">Read Docs</LinkFooter></WhiteButton>
              </ButtonContainer>
            </Col>
          </Row>
        </ContentWrapper>
          <GradientBg>
            <BgGradCircle />
          </GradientBg>
          <BackgroundImageContainer>
            <BgRowLeft>
              <BackgroundImages src={header_00} draggable="false" />
              <BackgroundImages src={header_01} draggable="false" />
              <BackgroundImages src={header_02} draggable="false" />
              <BackgroundImages src={header_03} draggable="false" />
              <BackgroundImages src={header_04} draggable="false" />
              <BackgroundImages src={header_05} draggable="false" />
            </BgRowLeft>
            <BgRowRight>
              <BackgroundImages src={header_10} draggable="false" />
              <BackgroundImages src={header_11} draggable="false" />
              <BackgroundImages src={header_12} draggable="false" />
              <BackgroundImages src={header_13} draggable="false" />
              <BackgroundImages src={header_14} draggable="false" />
              <BackgroundImages src={header_15} draggable="false" />
            </BgRowRight>
            <BgRowLeft>
              <BackgroundImages src={header_20} draggable="false" />
              <BackgroundImages src={header_21} draggable="false" />
              <BackgroundImages src={header_22} draggable="false" />
              <BackgroundImages src={header_23} draggable="false" />
              <BackgroundImages src={header_24} draggable="false" />
              <BackgroundImages src={header_25} draggable="false" />
            </BgRowLeft>
          </BackgroundImageContainer>
      </ColouredContainer>
    )
}

const LinkFooter = styled.a`
  color: inherit;
  text-decoration: none;
`

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

const BackgroundImageContainer = styled.div`
    position: absolute;
    top: 10%;
    left: 40%;
    transform: translatex(-50%);
    width: 100%;
`

const BgRowLeft = styled.div`
    margin-right: 196px;
    width: 1000vw;
`

const BgRowRight = styled.div`
    margin: 50px 0px 50px 196px;
    width: 1000vw;
`

const BackgroundImages = styled.img`
  width: 170px;
  height: 170px;
  margin: 0 26px;
  opacity: 0.07;
  border-radius: 200px;
  box-shadow: 2px 4px 10px 0px #00000052;
`
