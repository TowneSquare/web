import { useTheme } from "@emotion/react"
import styled from "@emotion/styled";
import useMatchBreakpoints from "../../../hooks/useMatchBreakpoints"
import {  ColouredContainer } from "../../../pages/LandingPage/styles";
import { Col, Row, Wrapper } from "../../../styles/common";
import { Card, Title, Text } from "../../Foundation";
import { BgGradCircle, PlusIcon, SelectIcon, TransferIcon } from "../../svgs";

export const ContentMarketplace = (props) => {
  const { isMobile, isTablet } = useMatchBreakpoints()
  const theme = useTheme();

  const mobileCards = () => {
    return (
      <Row gap="64px">
        <ContentCard>
          <Row gap="60px" items="center" style={{padding: '84px 45px 0px 45px'}}>
            <PlusIcon />
            <Text textAlign="center" fontSize="25px">
              {props.data.Marketplace ? props.data.Marketplace.Cards.card1 : 'Loading'}
            </Text>
          </Row>
        </ContentCard>
        <ContentCard>
          <Row gap="60px" items="center" style={{padding: '84px 45px 0px 45px'}}>
            <SelectIcon />
            <Text textAlign="center" fontSize="25px">
              {props.data.Marketplace ? props.data.Marketplace.Cards.card2 : 'Loading'}
            </Text>
          </Row>
        </ContentCard>
        <ContentCard>
          <Row gap="60px" items="center" style={{padding: '84px 45px 0px 45px'}}>
            <TransferIcon />
            <Text textAlign="center" fontSize="25px">
              {props.data.Marketplace ? props.data.Marketplace.Cards.card3 : 'Loading'}
            </Text>
          </Row>
        </ContentCard>
      </Row>
    )
  }
    return (
      <ColouredContainer className="p-4" background={theme.colors.bg} style={{display: 'relative'}}>
        <ContentWrapper>
          <Row items="center" gap="112px">
            <Row gap="32px" style={{maxWidth: '813px'}}>
              <Title scale={isMobile ? "sm": isTablet ? "md" : "lg"}>
                {props.data.Marketplace ? props.data.Marketplace.title : 'Loading'}
              </Title>
              <Title scale={isMobile?"xs":"sm"} style={{maxWidth: '750px'}}>
                {props.data.Marketplace ? props.data.Marketplace.paragraph : 'Loading'}
              </Title>
            </Row>
            {isMobile || isTablet 
              ? (mobileCards())
              : (<Col gap="64px">
              <ContentCard>
                <Row gap="60px" items="center" style={{padding: '84px 45px 0px 45px'}}>
                  <PlusIcon />
                  <Text textAlign="center" fontSize="25px">
                    {props.data.Marketplace ? props.data.Marketplace.Cards.card1 : 'Loading'}
                  </Text>
                </Row>
              </ContentCard>
              <ContentCard>
                <Row gap="60px" items="center" style={{padding: '84px 45px 0px 45px'}}>
                  <SelectIcon />
                  <Text textAlign="center" fontSize="25px">
                    {props.data.Marketplace ? props.data.Marketplace.Cards.card2 : 'Loading'}
                  </Text>
                </Row>
              </ContentCard>
              <ContentCard>
                <Row gap="60px" items="center" style={{padding: '84px 45px 0px 45px'}}>
                  <TransferIcon />
                  <Text textAlign="center" fontSize="25px">
                    {props.data.Marketplace ? props.data.Marketplace.Cards.card3 : 'Loading'}
                  </Text>
                </Row>
              </ContentCard>
            </Col>)}
          </Row>
        </ContentWrapper>
        <GradientBg>
            <div className="bg-icon-right">
              <BgGradCircle />
            </div>
            <div className="bg-icon-left">
              <BgGradCircle />
            </div>
        </GradientBg>
      </ColouredContainer>
    )
}

const ContentWrapper = styled(Wrapper)`
  padding: 128px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  
  > * {
    z-index: 1;
  }
`;

const ContentCard = styled(Card)`
  display: flex;
  // border-radius: ${props => props.theme.radii.default};
  // background: ${props => props.theme.colors.overlay};
  background: rgba(34, 28, 62, 0.6);

  /* Background */
  border: 1px solid #221C3E;
  border-radius: 10px;
  align-items: start;
  justify-content: center;
  height: 100%;
  width: 100%;
  min-height: 455px;
  max-height: 455px;
  max-width: 345px;
`

const GradientBg = styled.div`
  .bg-icon-right {
      position: absolute;
      top: 240%;
      right: 0%;
    }
  
    .bg-icon-left {
      position: absolute;
      top: 140%;
      left: 0%;
    }
  @media(min-width: 1024px) {
    .bg-icon-right {
    position: absolute;
    top: 120%;
    right: -20%;
  }

  .bg-icon-left {
    position: absolute;
    top: 160%;
    left: -20%;
  }
  }
`;