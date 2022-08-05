import styled from "@emotion/styled";
import React, { Dispatch, SetStateAction } from "react";

import { Box, Flex, Image } from "../../pages/SocialProfile/styles";

interface Props {
  isProfile: boolean;
  setIsProfile: Dispatch<SetStateAction<boolean>>;
}
const Navbar: React.FC<Props> = ({ isProfile, setIsProfile }) => {
  return (
    <Flex items="center" justify="center" margin="10px 0 31px 0">
      <Box cursor="pointer">
        <Image src="/undo.svg" alt="undo" width="25px" cursor="pointer" />
      </Box>
      <Flex radius="10px" bg="#8c74ff1f" ml="30px">
        <NavButton selected={isProfile} onClick={() => setIsProfile(true)}>
          Profile
        </NavButton>
        <NavButton selected={!isProfile} onClick={() => setIsProfile(false)}>
          Wallet
        </NavButton>
      </Flex>
      <Box ml="30px" cursor="pointer">
        <Image src="/setting.svg" alt="setting" width="25px" />
      </Box>
    </Flex>
  );
};

export default Navbar;

const NavButton = styled.div<{ selected?: boolean }>`
  display: flex;
  width: 128px;
  height: 31px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 700;
  color: #f2f0ff;
  cursor: pointer;
  background: ${(props) =>
    props.selected ? "linear-gradient(#0368FF,#FF3E95)" : "transparent"};
`;
