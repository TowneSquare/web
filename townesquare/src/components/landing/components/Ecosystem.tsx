import useMatchBreakpoints from "../../../hooks/useMatchBreakpoints"
import { Col, Container, Row, Wrapper } from "../../../styles/common"
import { Text } from "../../Foundation"

export const Ecosystem = (props) => {
  const { isMobile } = useMatchBreakpoints()
    return (
      <Container>
        <Wrapper>
          <Row>
            <Text bold fontSize={isMobile ? "32px" : "40px"}>
              Fully integrated with a suite of ecosystem tools
            </Text>
            <Col>
              <Row>
                <Text bold>
                  Solana Pay
                </Text>
                <Text>
                  Integrated with Solana Pay to enable social transactions
                  in Web3 and real-world settings
                </Text>
              </Row>
              <Row>
                <Text bold>
                  Metaplex
                </Text>
                <Text>
                  Access to NFT-related data is made possible with
                  integrations with Metaplex to enrich Web3 social experience
                </Text>
              </Row>
            </Col>
          </Row>
        </Wrapper>
      </Container>
    )
}