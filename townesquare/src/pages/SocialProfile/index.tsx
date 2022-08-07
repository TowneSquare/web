import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { shortenAddress } from "../../utils/utils";
import { Box, Flex } from "./styles";
import Page from "../../components/Foundation/Page";

import Navbar from "../../components/SocialProfile/Navbar";
import Profile from "../../components/SocialProfile/Profile";
import { dummyProfile } from "./constants";
import Wallet from "../../components/SocialProfile/Wallet";

const SocialProfile = () => {
  const location = useLocation();
  const [isProfile, setIsProfile] = useState(true);

  const [displayAddress, setDisplayAddress] = useState<string>("");

  useEffect(() => {
    const path = location.pathname.split("/");
    const profileAccount = path[path.length - 1]; // TODO: Make the url endpoint to queried user wallet address
    setDisplayAddress(shortenAddress(profileAccount));
  }, [location.pathname]);

  return (
    <Page className="profile-layout">
      <Flex
        justify="center"
        bg="rgb(34,28,62)"
        style={{ fontFamily: "Outfit", color: "white" }}
      >
        <Flex
          direction="column"
          minWidth="360px"
          maxWidth="360px"
          justify="center"
          items="center"
          mb="171px"
        >
          <Navbar isProfile={isProfile} setIsProfile={setIsProfile} />
          {isProfile && <Profile data={dummyProfile} />}
          {!isProfile && <Wallet data={dummyProfile} />}
          {/* <Row items="center">
            <CoverPhotoWrapper className="cover-photo-container">
              <ProfileCard data={dummyProfile} />
            </CoverPhotoWrapper>
          </Row> */}
        </Flex>
      </Flex>
    </Page>
  );
};

export default SocialProfile;
