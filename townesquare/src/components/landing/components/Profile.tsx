import { useTheme } from "@emotion/react"
import styled from "@emotion/styled";
import useMatchBreakpoints from "../../../hooks/useMatchBreakpoints"
import {  ColouredContainer, 
          ProfileAssetWrapper,
          CoverPhotoLandingWrapper, 
          ProfileCardMain } from "../../../pages/LandingPage/styles";
import { dummyProfile } from "../../../pages/SocialProfile/constants";
import { Col, Row, Wrapper } from "../../../styles/common";
import { Text, Title } from "../../Foundation";
const profileAsset = require("../../../assets/images/profileAsset.png")

console.log(profileAsset)

export const Profile = (props) => {
  const { isMobile, isTablet } = useMatchBreakpoints()
  const theme = useTheme();
  console.log(isMobile, isTablet)
    return (
      <ColouredContainer background={theme.colors.bg} >
        <ContentWrapper>
          {isTablet || isMobile ? (
            <>
             <Row gap={`${theme.spacing[5]}px`} style={{paddingLeft: isMobile || isTablet ? '0' : `${theme.spacing[6]}px`, zIndex: 1, position: 'relative'}}>
             <Title scale="md" textAlign="center">
               {props.data.Profile ? props.data.Profile.title : 'Loading'}
             </Title>
             <Text fontSize="25px" textAlign="center">
               {props.data.Profile ? props.data.Profile.paragraph : 'Loading'}
             </Text>
           </Row>
            <Row items="end">
              <ProfileCardWrapper>
                {/* <CoverPhotoLandingWrapper className="cover-photo-container">
                  <ProfileCardMain data={dummyProfile}/> */}
                  <ProfileAssetWrapper>
                    <img src={profileAsset} />
                  </ProfileAssetWrapper>
                {/* </CoverPhotoLandingWrapper> */}
              </ProfileCardWrapper>
            </Row>
            </>
          ) : (<ProfileCol justify="space-around">
            <ProfileRow gap={`${theme.spacing[5]}px`} style={{marginTop: `172px`, maxWidth: '756px'}}>
              <Title scale="lg" textAlign={"left"} style={{minWidth: '690px', fontSize: '74px'}}>
                {props.data.Profile ? props.data.Profile.title : 'Loading'}
              </Title>
              <Text fontSize="25px" textAlign={"left"}>
                {props.data.Profile ? props.data.Profile.paragraph : 'Loading'}
              </Text>
            </ProfileRow>
            <ProfileCardWrapper>
              {/* <CoverPhotoLandingWrapper className="cover-photo-container">
                  <ProfileCardMain data={dummyProfile}/> */}
                  <ProfileAssetWrapper>
                    <img src={profileAsset} />
                  </ProfileAssetWrapper>
              {/* </CoverPhotoLandingWrapper> */}
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
  // width: 100%;
  // min-width: 630px;
  // max-width: 630px;
  // transform: translateX(10%);
  margin: auto;
  position: relative;
  z-index: 1;
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
      // text-align: center !important;
    }
  }
`
