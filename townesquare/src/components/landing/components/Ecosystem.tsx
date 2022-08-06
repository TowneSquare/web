import React from "react"
import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import useMatchBreakpoints from "../../../hooks/useMatchBreakpoints"
import { Col, Container, Row, Wrapper } from "../../../styles/common"
import { Text, Title } from "../../Foundation"
import { BgGradEllipse } from "../../svgs"
import { EcosystemData, EcosystemDetails } from "../../../data/types"

export const Ecosystem = ({data}: { data: EcosystemData}) => {
  const { isMobile, isTablet } = useMatchBreakpoints()
  const theme = useTheme();

  const mobileDetailsView = (data: EcosystemDetails[]) => {
    return (
      <Row justify="space-evenly" items="center" gap={`${theme.spacing[5]}px`}>
        {data.map(entry => (
          <DetailBlock>
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
      <Container background={theme.colors.bg} >
        <ContentWrapper>
          <Row items="center" gap="112px">
            <TitleWrapper isMobile={isMobile || isTablet}>
              <Title scale={isMobile || isTablet ? 'md' : 'lg'}>
                {data.title}
              </Title>
            </TitleWrapper>
            <Row gap={`${theme.spacing[5]}px`} style={{padding: isMobile || isTablet ? `0 ${theme.spacing[5]}px` :  '0'}}>
              {Object.values(data.sections).map(section => (
                <Row gap={`${theme.spacing[4]}px`} style={{marginBottom: '16px'}}>
                  <SectionTitleBox isMobile={isMobile || isTablet}>
                    <Title scale="sm">
                      {section.title}
                    </Title>
                  </SectionTitleBox>
                  {isMobile || isTablet
                    ? (mobileDetailsView(section.details))
                    : <Col justify="space-between" gap={`${theme.spacing[8]}px`}>
                        {section.details.map(entry => (
                          <DetailBlock>
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
          <div className="bg-icon-top">
              <BgGradEllipse />
            </div>
            <div className="bg-icon-bottom">
              <BgGradEllipse />
            </div>
        </ContentWrapper>
      </Container>
    )
}

const ContentWrapper = styled(Wrapper)`
  padding: 150px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  
  .bg-icon-top {
    position: absolute;
    top: 0;
    left: -60%;
    z-index: 0;
  }
  .bg-icon-bottom {
    position: absolute;
    bottom: 0;
    right: -40%;
    transform: rotate3d(1, 1, 1, 1deg);
    z-index: 0;
  }

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

const BgWrapper = styled.div`
  position: relative;

`;