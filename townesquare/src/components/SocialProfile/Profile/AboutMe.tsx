import { useTheme } from "@emotion/react";
import React from "react";
import { Flex, Text, Image } from "../../../pages/SocialProfile/styles";

interface Props {
  data: any;
}
const AboutMe: React.FC<Props> = ({ data }) => {
  const theme = useTheme();
  return (
    <Flex
      direction="column"
      mt="21px"
      width="100%"
    >
      <Flex width="100%" justify="space-between">
        <Text fontSize="20px">About Me</Text>
        <Image src="/edit.svg"/>
      </Flex>
      <Text fontSize="12px" color={theme.colors.textSecondary}>{data.aboutme}</Text>
    </Flex>
  );
};

export default AboutMe;
