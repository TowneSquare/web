import React from "react"
import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import useMatchBreakpoints from "../../../hooks/useMatchBreakpoints"
import { Col, Container, Row, Wrapper } from "../../../styles/common"
import { Text, Title } from "../../Foundation"
import { BgGradEllipse } from "../../svgs"
import { LandingData, SectionDetails } from "../../../data/types"
import { BlueButton, ButtonContainer, WhiteButton } from "../../../pages/LandingPage/styles";


export const Ecosystem = ({data}: { data: LandingData}) => {
  const { isMobile, isTablet } = useMatchBreakpoints()
  const theme = useTheme();

  const mobileDetailsView = (data: SectionDetails[]) => {
    return (
      <Row justify="space-evenly" items="center" gap={`${theme.spacing[5]}px`}>
        {data.map(entry => (
          <DetailBlock key={entry.title}>
            <Row align="center" justify="center" gap={`${theme.spacing[4]}px`}>
              <Title scale="sm">
                {entry.title}
              </Title>
              <Text fontSize="20px" textAlign="center">
                {entry.description}
              </Text>
            </Row>
        </DetailBlock>
        ))}
      </Row>
    )
  }
    return (
      <Container  style={{position: 'relative'}}>
        <ContentWrapper>
          <Row items="center" gap="112px">
            <TitleWrapper isMobile={isMobile || isTablet}>
              <Title scale={isMobile || isTablet ? 'md' : 'lg'}>
                {data.title}
              </Title>
            </TitleWrapper>
            <Row gap={`${theme.spacing[5]}px`} style={{padding: isMobile || isTablet ? `0 ${theme.spacing[5]}px` :  '0'}}>
              {Object.values(data.sections).map((section, i) => (
                <Row key={`section-${i}`} gap={`${theme.spacing[4]}px`} style={{marginBottom: '16px'}}>
                  <SectionTitleBox isMobile={isMobile || isTablet}>
                    <Title scale="sm">
                      {section.title}
                    </Title>
                  </SectionTitleBox>
                  {isMobile || isTablet
                    ? (mobileDetailsView(section.details))
                    : <Col justify="space-between" gap={`${theme.spacing[8]}px`}>
                        {section.details.map((entry, j) => (
                          <DetailBlock key={`details-${i}${j}`}>
                            <Row align="center" justify="center" gap="65px">
                              <Title scale="sm">
                                {entry.title}
                              </Title>
                              <Text fontSize="28px" textAlign="center">
                                {entry.description}
                              </Text>
                            </Row>
                          </DetailBlock>
                    ))}
                    </Col>
                  }
              </Row>
              ))}
            </Row>
          </Row>
        </ContentWrapper>
        <ButtonContainer style={{width: '100%'}}>
          <BlueButton>App Coming Soon</BlueButton>
          <WhiteButton>Read Docs</WhiteButton>
        </ButtonContainer>
        <GradientBg>
          <div className="bg-icon-top">
              <BgGradEllipse />
            </div>
            <div className="bg-icon-bottom">
              <BgGradEllipse />
            </div>
        </GradientBg>
      </Container>
    )
}

const ContentWrapper = styled(Wrapper)`
  padding: 150px 0;
  display: flex;
  justify-content: center;
  overflow: hidden;

  > * {
    z-index: 1;
  }
`;

const DetailBlock = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 80%;
  @media(min-width: 1024px) {
    min-width: 298px;
    max-width: 298px;
  }
`;

const TitleWrapper = styled(Wrapper)<{isMobile: boolean}>`
  width: 100%;
  max-width: ${({ isMobile}) => isMobile ? '80%' : '872px'};
`;

const SectionTitleBox = styled(Container)<{isMobile: boolean}>`
  background: ${props => props.theme.colors.card};
  border-radius: ${props => props.theme.radii.default};
  height: 113px;
  display: grid;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: ${props => props.isMobile ? 'unset' : 'calc(100vw / 1.5)'};
  max-width: ${props => props.isMobile ? 'unset' : '1166px'};
`;

const GradientBg = styled.div`
  
  .bg-icon-top {
    position: absolute;
    top: 0;
    z-index: 0;
    svg {
      transform: translateX(-40%);
    }
    @media(min-width: 1024px) {
      svg {
        width: 100%;
        transform: translateX(-40%);
      }
    }

  }
  .bg-icon-bottom {
    position: absolute;
    bottom: -10%;
    right: 0;
    transform: rotate3d(1, 1, 1, 1deg);
    z-index: 0;
    svg {
      transform: translateX(20%);
    }
    @media(min-width: 1024px) {
      svg {
        width: 100%;
        transform: translateX(20%);
      }
    }
  }
`;