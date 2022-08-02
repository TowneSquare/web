import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { shortenAddress } from "../../utils/utils";
import { CoverPhotoWrapper } from "./styles"
import { Row } from "../../styles/common";
import Page from "../../components/Foundation/Page";
import ProfileCard from "../../components/ProfileCard";
import { dummyProfile } from "./constants";

const SocialProfile = () => {
  const location = useLocation();
  const theme = useTheme()
//   const [profileImg, setProfileImg] = useState<string>();
  const [displayAddress, setDisplayAddress] = useState<string>('');

  useEffect(() => {
    const path = location.pathname.split('/');
    const profileAccount = path[path.length - 1];  // TODO: Make the url endpoint to queried user wallet address
    setDisplayAddress(shortenAddress(profileAccount));
  }, [location.pathname])

  return (
    <Page className="profile-layout">
        <Row items="center">
          <CoverPhotoWrapper className="cover-photo-container">
            <ProfileCard data={dummyProfile}/>
          </CoverPhotoWrapper>
          {/* <Row items="center">
            <FollowInfo className="follow-info">
              <InfoItem>
                <p className="row-item-title">Followers</p>
                <p className="row-item-value">12</p>
              </InfoItem>
              <InfoItem>
              <p className="row-item-title">Following</p>
                <p className="row-item-value">12</p>
              </InfoItem>
            </FollowInfo>
              <InfoBox className="info-box">
                  <UsernameInfoBox className="username-info">
                    <Col align="center">
                      <p className="username">User123</p>
                      <button className="address-copy-btn" disabled={!displayAddress} onClick={() => copyTextToClipboard(displayAddress)}>
                        <p className="abbreviated-wallet-address">{displayAddress}</p>
                      </button>
                    </Col>
                    {showCopied && <CopiedTooltip>
                      <p>Copied!</p>
                    </CopiedTooltip>}
                  </UsernameInfoBox>

                  <Col className="profile-socials" align="start">
                    <button id="twitter" className="social-link">
                      Twitter
                    </button>
                    <button id="website" className="social-link">
                      Website
                    </button>
                  </Col>

                  <div className="profile-bio">
                    <p>Hello! This is user's bio. </p>
                  </div>
              </InfoBox>
          </Row> */}
        </Row>
    </Page>
  )
}


export default SocialProfile;