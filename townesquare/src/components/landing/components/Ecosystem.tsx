import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import useMatchBreakpoints from "../../../hooks/useMatchBreakpoints"
import { Col, Container, Row, Wrapper } from "../../../styles/common"
import { Text } from "../../Foundation"

export const Ecosystem = (props) => {
  const { isMobile } = useMatchBreakpoints()
  const theme = useTheme();
    return (
      <Container background={theme.colors.secondaryLight} >
        <ContentWrapper>
          <Row style={{margin: '0 16px'}}>
            <Text fontSize={isMobile ? "32px" : "40px"} style={{marginLeft: '1rem'}}>
              Fully integrated with a suite of ecosystem tools
            </Text>
            <Col>
            <DetailBlock>
              <Row style={{padding: '1rem'}}>
                <Text bold fontSize="20px">
                  Solana Pay
                </Text>
                <Text fontSize={isMobile ? "14px" : "16px"}>
                  Integrated with Solana Pay to enable social transactions
                  in Web3 and real-world settings
                </Text>
              </Row>
            </DetailBlock>
            <DetailBlock>
              <Row style={{padding: '1rem'}}>
                <Text bold fontSize="20px">
                  Metaplex
                </Text>
                <Text fontSize={isMobile ? "14px" : "16px"}>
                  Access to NFT-related data is made possible with
                  integrations with Metaplex to enrich Web3 social experience
                </Text>
              </Row>
            </DetailBlock>
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

const DetailBlock = styled.div`
  min-width: calc(100vw / 3);
  max-width: calc(100vw / 2);

  @media(min-width: 638px) {
    width: calc(100vw / 4);
    max-width: 300px;
    min-width: 240px;
  }
`;