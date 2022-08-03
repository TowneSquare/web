import { useTheme } from "@emotion/react"
import useMatchBreakpoints from "../../../hooks/useMatchBreakpoints"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  ColouredContainer, TextTitle, TextParagraph, InfoContainer } from "../../../pages/LandingPage/styles";


export const ContentMarketplace = (props) => {
  const { isMobile } = useMatchBreakpoints()
  const theme = useTheme();
    return (
      <ColouredContainer class="p-4" background={theme.isDark ? "#000000c4": "#a8caffc4"} >
          <Row style={{margin: '0 16px'}}>
            <Col>
              <TextTitle fontSize={isMobile ? "32px" : "40px"}>
                {props.data.Marketplace ? props.data.Marketplace.title : 'Loading'}
              </TextTitle>
              <TextParagraph fontSize={isMobile ? "26px" : "32px"}>
                {props.data.Marketplace ? props.data.Marketplace.paragraph : 'Loading'}
              </TextParagraph>
            </Col>
          </Row>
          <Row  style={{margin: '0 16px'}}>
            <InfoContainer>
              {props.data.Marketplace ? props.data.Marketplace.Cards.card1 : 'Loading'}
            </InfoContainer>
            <InfoContainer>
              {props.data.Marketplace ? props.data.Marketplace.Cards.card2 : 'Loading'}
            </InfoContainer>
            <InfoContainer>
              {props.data.Marketplace ? props.data.Marketplace.Cards.card3 : 'Loading'}
            </InfoContainer>
          </Row>
      </ColouredContainer>
    )
}