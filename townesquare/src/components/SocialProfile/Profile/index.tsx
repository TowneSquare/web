import React from "react";
import AboutMe from "./AboutMe";
import TowneSquare from "./TowneSquare";
import { Box, Flex, Text, Image } from "../../../pages/SocialProfile/styles";
import { useNavigate } from "react-router-dom";

interface Props {
  data: any;
}
const Profile: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Flex direction="column" width="100%">
      <Flex direction="row" width="100%">
        <Flex items="center">
          <Image src={data.image} width="150px" height="150px" />
        </Flex>
        <Flex direction="column" justify="center" ml="21px">
          <Flex ml="5px">
            <Text fontSize="14px" fontWeight="600">
              {data.name}
            </Text>
          </Flex>
          <Flex
            direction="column"
            bg="#8c74ff1f"
            padding="12px"
            radius="10px"
            mt="6px"
          >
            <Text fontSize="12px" wordBreak="break-word">
              {data.address}
            </Text>
            <Box height="8px" />
            <Text fontSize="12px">{data.domain}</Text>
          </Flex>
          <Flex mt="10px" width="100%">
            <Image src="/bird.svg" width="21px" />
            <Flex
              width="100%"
              ml="15px"
              border="solid #2F80ED 1px"
              radius="10px"
              justify="center"
              items="center"
              fontSize="10px"
              cursor="pointer"
              onClick={() => navigate(data.profileLink)}
            >
              Connect Profile
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <AboutMe data={data} />
      <TowneSquare data={data} />
    </Flex>
  );
};

export default Profile;
