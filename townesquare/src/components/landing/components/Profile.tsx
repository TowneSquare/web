import { useTheme } from "@emotion/react"
import styled from "@emotion/styled";
import useMatchBreakpoints from "../../../hooks/useMatchBreakpoints"
import {  ColouredContainer, 
          CoverPhotoLandingWrapper, 
          ProfileCardMain } from "../../../pages/LandingPage/styles";
import { dummyProfile } from "../../../pages/SocialProfile/constants";
import { Col, Row, Wrapper } from "../../../styles/common";
import { Text, Title } from "../../Foundation";

export const Profile = (props) => {
  const { isMobile, isTablet } = useMatchBreakpoints()
  const theme = useTheme();
  console.log(isMobile, isTablet)
    return (
      <ColouredContainer background={theme.colors.bg} >
        <ContentWrapper>
          {isTablet || isMobile ? (
            <>
             <Row gap={`${theme.spacing[5]}px`} style={{paddingLeft: isMobile || isTablet ? '0' : `${theme.spacing[6]}px`, zIndex: 1}}>
             <Title scale="md" textAlign="left">
               {props.data.Profile ? props.data.Profile.title : 'Loading'}
             </Title>
             <Text fontSize="25px">
               {props.data.Profile ? props.data.Profile.paragraph : 'Loading'}
             </Text>
           </Row>
            <Row>
              <Row items="end">
                <ProfileCardWrapper>
                  <CoverPhotoLandingWrapper className="cover-photo-container">
                    <ProfileCardMain data={dummyProfile}/>
                  </CoverPhotoLandingWrapper>
                </ProfileCardWrapper>
              </Row>
            </Row>
            </>
          ) : (<ProfileCol>
            <ProfileRow gap={`${theme.spacing[5]}px`} style={{paddingLeft: `${theme.spacing[7]}px`, marginTop: `${theme.spacing[7]}px`}}>
              <Title scale="md" textAlign="left" style={{minWidth: '690px'}}>
                {props.data.Profile ? props.data.Profile.title : 'Loading'}
              </Title>
              <Text fontSize="25px" textAlign="left">
                {props.data.Profile ? props.data.Profile.paragraph : 'Loading'}
              </Text>
            </ProfileRow>
            <ProfileCardWrapper>
              <CoverPhotoLandingWrapper className="cover-photo-container">
                <ProfileCardMain data={dummyProfile}/>
              </CoverPhotoLandingWrapper>
            </ProfileCardWrapper>
          </ProfileCol>)}
        </ContentWrapper>
      </ColouredContainer>
    )
}
// #0368FF
const ContentWrapper = styled(Wrapper)`
  padding: 128px 0;
  > * {
    z-index: 1;
  }
`;

const ProfileCardWrapper = styled.div`
  width: 100%;
  min-width: 630px;
  max-width: 630px;
  transform: translateX(10%);
`;

const ProfileCol = styled(Col)`
  max-width: 1440px;
  margin: auto;
  > * {
    z-index: 1;
  }
    `

const ProfileRow = styled(Row)`
  @media (min-width:1440px) {
    > * {
      text-align: center !important;
    }
  }
`
