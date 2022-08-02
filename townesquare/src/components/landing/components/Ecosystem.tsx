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
        <Wrapper padding={isMobile ? "16px 32px" : "48px 64px"}>
          <Row>
            <Text bold fontSize={isMobile ? "28px" : "40px"} style={{marginLeft: '1rem'}}>
              Fully integrated with a suite of ecosystem tools
            </Text>
            <Col>
            <DetailBlock>
              <Row style={{padding: '1rem'}}>
                <Text bold>
                  Solana Pay
                </Text>
                <Text fontSize={isMobile ? "12px" : "14px"}>
                  Integrated with Solana Pay to enable social transactions
                  in Web3 and real-world settings
                </Text>
              </Row>
            </DetailBlock>
            <DetailBlock>
              <Row style={{padding: '1rem'}}>
                <Text bold>
                  Metaplex
                </Text>
                <Text fontSize={isMobile ? "12px" : "14px"}>
                  Access to NFT-related data is made possible with
                  integrations with Metaplex to enrich Web3 social experience
                </Text>
              </Row>
            </DetailBlock>
            </Col>
          </Row>
        </Wrapper>
      </Container>
    )
}

const DetailBlock = styled.div`
  width: calc(100vw / 3);
  min-width: 100px;

  @media(min-width: 638px) {
    width: calc(100vw / 4);
    max-width: 300px;
    min-width: 200px;
  }
`;