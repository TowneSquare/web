
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import useMatchBreakpoints from "../../../hooks/useMatchBreakpoints"
import { Col, Container, Row, Wrapper } from "../../../styles/common"
import { Card, Text } from "../../Foundation"

const cardSizes = {
  sm: {
    width: 'calc(100vw / 6)',
    height: 'calc(100vw / 5)',
  },
  md: {
    width: '120px',
    height: '150px'
  },
  lg: {
    width: '160px',
    height: '200px'
  }
}
export const Rewards = (props) => {
  const { isMobile, isTablet } = useMatchBreakpoints();
  const theme = useTheme();

  const getCardSize = () => {
    return ({
      width: isMobile 
      ? cardSizes.sm.width
      : isTablet 
        ? cardSizes.md.width
        : cardSizes.lg.width,
      height: isMobile 
      ? cardSizes.sm.height
      : isTablet 
        ? cardSizes.md.height
        : cardSizes.lg.height,
      })
  }
    return (
      <Container background={theme.isDark ? "#000000c4": "#e7ddcd3b"}>
        <ContentWrapper>
          <Row gap="32px" style={{maxWidth: '1600px', margin: '0 16px'}}>
            <Row>
              <Text fontSize={isMobile ? "32px" : "40px"} textAlign="center">
                Earn rewards while socializing
              </Text>
              <Text textAlign="center" fontSize="20px">
                TowneSquare introduces 4 types of NFTs to offer the
                optimal Social-2-Earn experience
              </Text>
            </Row>
            <Col gap="8px" justify="space-evenly">
              <Row items="center" gap="8px">
                <NFTCard isDark={theme.isDark} width={getCardSize().width} height={getCardSize().height}>
                  <TextWrapper>
                    <Text textAlign="center" fontSize={isMobile ? "14px" : "18px"}>
                      Creator NFT
                    </Text>
                  </TextWrapper>
                </NFTCard>
                <DetailWrapper>
                  <Text textAlign="center">
                    Earn rewards by publishing and interacting with content
                  </Text>
                </DetailWrapper>
              </Row>
              <Row items="center" gap="8px">
                <NFTCard isDark={theme.isDark} width={getCardSize().width} height={getCardSize().height}>
                  <TextWrapper>
                    <Text textAlign="center" fontSize={isMobile ? "14px" : "18px"}>
                      Founder NFT
                    </Text>
                  </TextWrapper>
                </NFTCard>
                <DetailWrapper>
                  <Text textAlign="center">
                    Access AMA space on TowneSquare and make project 
                    announcements to the community
                  </Text>
                </DetailWrapper>
              </Row>
              <Row items="center" gap="8px">
                <NFTCard isDark={theme.isDark} width={getCardSize().width} height={getCardSize().height}>
                  <TextWrapper>
                    <Text textAlign="center" fontSize={isMobile ? "14px" : "18px"}>
                      Advertiser NFT
                    </Text>
                  </TextWrapper>
                </NFTCard>
                <DetailWrapper>
                  <Text textAlign="center">
                    Publish advertisements on TowneSquare
                  </Text>
                </DetailWrapper>
              </Row>
              <Row items="center" gap="8px">
                <NFTCard isDark={theme.isDark} width={getCardSize().width} height={getCardSize().height}>
                  <TextWrapper>
                    <Text textAlign="center" fontSize={isMobile ? "14px" : "18px"}>
                      Streamer NFT
                    </Text>
                  </TextWrapper>
                </NFTCard>
                <DetailWrapper>
                  <Text textAlign="center">
                    Stream content and earn rewards
                  </Text>
                </DetailWrapper>
              </Row>
            </Col>
          </Row>
        </ContentWrapper>
      </Container>
    )
}

const ContentWrapper = styled(Wrapper)`
  padding: 32px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NFTCard = styled(Card)<{width: string; height: string; isDark: boolean}>`
  border-radius: ${props => props.theme.radii.small};
  background: transparent;
  border: 1px solid ${props => props.isDark ? props.theme.colors.textPrimary : '#000'};
  height: 100%;
  align-items: center;
  min-height: ${props => props.height};
  max-height: ${props => props.height};
  width: ${props => props.width};
`;

const TextWrapper = styled(Row)`
  height: 100%;
  align-items: center;
  justify-content: center;
  
`;

const DetailWrapper = styled.div`
  width: calc(100vw / 5);
  > * {
    font-size: 13px;
  }

  @media(min-width: 1024px) {
    width: 200px;
    > * {
      font-size: 16px;
    }
  }
`;