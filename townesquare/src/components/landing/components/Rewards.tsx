
import styled from "@emotion/styled";
import { LandingData } from "../../../data/types";
import useMatchBreakpoints from "../../../hooks/useMatchBreakpoints"
import { Col, Container, Row, Wrapper } from "../../../styles/common"
import { Card, Text, Title } from "../../Foundation"
import { BgGradEllipse, SocialAccessIcon, SocialAdvertiseIcon, SocialRewardsIcon, SocialStreamIcon } from "../../svgs";

export const Rewards = ({data}: {data: LandingData}) => {
  const { isMobile, isTablet } = useMatchBreakpoints();

  const CardIcon = ({name}: {name: string})  => {
    let icon;
    switch (name.toLowerCase()) {
      case 'creator':
        icon = <SocialRewardsIcon />;
        break;
      case 'founder':
        icon = <SocialAccessIcon />;
        break;
      case 'advertiser':
        icon = <SocialAdvertiseIcon />;
        break;
      case 'streamer':
        icon = <SocialStreamIcon />;
        break;
    }

    return icon;
  }

    return (
      <Container style={{position: 'relative'}}>
        <ContentWrapper>
          <Row gap="136px">
            <Row style={{padding: '32px'}} items="center">
            <Title scale={isMobile ? "sm" : isTablet ? "md" : "lg"} style={{maxWidth: '872px', marginBottom:'32px'}}>
                {data.title}
              </Title>
              <Title scale="xs" fontWeight={400} style={{maxWidth: '843px'}}>
                {data.description}
              </Title>
            </Row>
            
            <Cards isMobile={isMobile || isTablet}>
              {Object.values(data.sections).map((section, i) => (
                section.details.map((detail, j) => (
                <Row key={`rewards-section-${i}${j}`} items="center" gap="8px">
                  <NFTCard>
                    <DetailWrapper>
                      <Col gap="40px" align="center" items="center">
                        <div className="rewards-icon">
                          <CardIcon name={detail.title} />
                        </div>
                          <Text fontSize="28px">
                            {detail.description}
                          </Text>
                      </Col>
                    </DetailWrapper>
                  </NFTCard>
                </Row>
                ))
              ))}
            </Cards>
          </Row>
        </ContentWrapper>
        <GradientBg>
          <BgGradEllipse />
        </GradientBg>
      </Container>
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

const Cards = styled.div<{isMobile: boolean}>`
  display: grid;
  grid-gap: ${({ theme }) => `${theme.spacing[3]}px`};
  grid-template-columns: ${({isMobile}) => isMobile ? 'unset' : 'repeat(2, 1fr)'};
  grid-template-rows: ${({isMobile}) => isMobile ? 'repeat(4, 1fr)' : 'unset'};
  padding: 0 32px;
`;

const NFTCard = styled(Card)`
  border-radius: ${props => props.theme.radii.default};
  background: ${props => props.theme.colors.overlay};
  height: 100%;
  align-items: center;
  min-height: 144px;
  width:100%;
  max-width: 575px;
`

const DetailWrapper = styled.div`
  padding: 30px 40px;
  display: flex;
  height: 100%;
`;

const GradientBg = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  
  
  @media(min-width: 1024px) {
      bottom: -25%;
      
      svg {
        width: 100%;
      }
    }
`;