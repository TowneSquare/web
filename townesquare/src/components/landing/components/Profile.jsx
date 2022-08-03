import { useTheme } from "@emotion/react"
import useMatchBreakpoints from "../../../hooks/useMatchBreakpoints"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  ColouredContainer, 
  TextLeftParagraph, 
          TextSubTitle, 
          CoverPhotoLandingWrapper, 
          ProfileCardMain } from "../../../pages/LandingPage/styles";
import { dummyProfile } from "./../../../pages/SocialProfile/constants";




export const Profile = (props) => {
  const { isMobile } = useMatchBreakpoints()
  const theme = useTheme();
    return (
      <ColouredContainer background={theme.isDark ? "#000000c4": "#7286abc4"} >
          <Row style={{margin: '0 16px'}}>
            <Col md={{ span: 3, offset: 2 }}>
              <TextSubTitle fontSize={isMobile ? "32px" : "40px"}>
                {props.data.Profile ? props.data.Profile.title : 'Loading'}
              </TextSubTitle>
              <TextLeftParagraph fontSize={isMobile ? "26px" : "32px"}>
                {props.data.Profile ? props.data.Profile.paragraph : 'Loading'}
              </TextLeftParagraph>
            </Col>
            <Col  md={{ span: 5, offset: 1 }}>
              <CoverPhotoLandingWrapper className="cover-photo-container">
                <ProfileCardMain data={dummyProfile}/>
              </CoverPhotoLandingWrapper>
            </Col>
          </Row>
      </ColouredContainer>
    )
}