import { useTheme } from "@emotion/react"
import useMatchBreakpoints from "../../../hooks/useMatchBreakpoints"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BlueButton, ButtonContainer, ColouredContainer, TextParagraph, TextTitle, WhiteButton } from "../../../pages/LandingPage/styles";


export const Header = (props) => {
  const { isMobile } = useMatchBreakpoints()
  const theme = useTheme();
    return (
      <ColouredContainer background={theme.isDark ? "#000000c4": "#8091f2c4"} >
          <Row style={{margin: '0 16px'}}>
            <Col>
              <TextTitle fontSize={isMobile ? "32px" : "40px"}>
                {props.data.Header ? props.data.Header.title : 'Loading'}
              </TextTitle>
              <TextParagraph fontSize={isMobile ? "26px" : "32px"}>
                {props.data.Header ? props.data.Header.paragraph : 'Loading'}
              </TextParagraph>
            </Col>
          </Row>
          <Row>
            <ButtonContainer md={{ span: 6, offset: 3 }}>
              <BlueButton>App Coming Soon</BlueButton>
              <WhiteButton>Read Docs</WhiteButton>
            </ButtonContainer>
          </Row>
      </ColouredContainer>
    )
}
