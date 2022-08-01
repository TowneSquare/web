import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { shortenAddress } from "../../utils/utils";
import { Blur,
    ProfileAvatar, 
    CopiedTooltip,
     CoverPhotoWrapper, 
     InfoBox, 
     InfoItem,
      Layout, 
      UsernameInfoBox,
       FollowInfo 
    } from "./styles"
import { Col, Row } from "../../styles/common";

const SocialProfile = () => {
  const location = useLocation();
  const [coverPhoto, setCoverPhoto] = useState<string>();
  const [profileImg, setProfileImg] = useState<string>();
  const [displayAddress, setDisplayAddress] = useState<string>('');
  const [showCopied, setShowCopied] = useState(false);

  useEffect(() => {
    const path = location.pathname.split('/');
    const profileAccount = path[path.length - 1];  // TODO: Make the url endpoint to queried user wallet address
    setDisplayAddress(shortenAddress(profileAccount));
  }, [location.pathname])

  const fallbackCopyTextToClipboard = (text: string) => {
    const elem = document.createElement('textarea')
    elem.value = text

    document.body.appendChild(elem)
    elem.select()
    document.execCommand('copy')
    document.body.removeChild(elem)
    
  }

  const copyTextToClipboard = (text: string) => {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text)
      return
    }
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setShowCopied(true);
      })
      .catch((err) => {
        
        console.error('Async: Could not copy text: ', err)
      })
      .finally(() => {
        setTimeout(() => {
          setShowCopied(false);
        }, 3000);
      })
  }

  return (
    <Layout className="profile-layout">
      <div>
        <Row items="center">
          <CoverPhotoWrapper className="cover-photo-container">
            <div />
          </CoverPhotoWrapper>
          <ProfileAvatar className="circle-avatar">
            {coverPhoto && <img src={coverPhoto} alt="profile-avatar" />}
            <Blur className="blur-profileimg"/>
          </ProfileAvatar>

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
            {/* <Row id="admin-action-edit" className="profile-actions"> */}
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
                <Button id="twitter" className="social-link">
                  Twitter
                </Button>
                <Button id="website" className="social-link">
                  Website
                </Button>
              </Col>

              <div className="profile-bio">
                <p>Hello! This is user's bio. </p>
              </div>
          </InfoBox>
        </Row>
      </div>
    </Layout>
  )
}


export default SocialProfile;