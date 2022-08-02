import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { shortenAddress } from "../../utils/utils";
import { CoverPhotoWrapper } from "./styles"
import { Row } from "../../styles/common";
import Page from "../../components/Foundation/Page";
import ProfileCard from "../../components/ProfileCard";
import { dummyProfile } from "./constants";

const SocialProfile = () => {
  const location = useLocation();
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
        </Row>
    </Page>
  )
}


export default SocialProfile;