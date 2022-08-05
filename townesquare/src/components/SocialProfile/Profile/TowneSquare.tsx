import React, { useState } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { Box, Flex, Text, Image } from "../../../pages/SocialProfile/styles";

interface Props {
  data: any;
}
const itemsShowLine = 3;

const TowneSquare: React.FC<Props> = ({ data }) => {
  const theme = useTheme();
  const [daoSeeMore, setDaoSeeMore] = useState(false);
  const [collectionSeeMore, setCollectionSeeMore] = useState(false);

  const daoShowLine = daoSeeMore ? data.DAOs.length : itemsShowLine;
  const collectionShowLine = collectionSeeMore? data.collections.length : itemsShowLine;

  return (
    <Flex direction="column" mt="21px" width="100%">
      <Text fontSize="20px">TowneSquare</Text>
      <Flex mt="16px" columnGap="30px">
        {data.isCreator && <OutlineButton width="103px">Creator</OutlineButton>}
        {data.isFounder && (
          <OutlineButton width="103px">
            Founder
          </OutlineButton>
        )}
      </Flex>
      <Box mt="20px">
        <Text fontSize="14px" fontWeight="600">
          DAO members
        </Text>
        <Flex direction="column" mt="8px">
          {data.DAOs.slice(0, daoShowLine).map((item, index) => {
            return (
              <Flex key={index} mt="11px">
                <Image src={item.image} width="21px" />
                <Box ml="16px">
                  <Text
                    fontSize="12px"
                    fontWeight="400"
                    color={theme.colors.textSecondary}
                  >
                    {item.name}
                  </Text>
                </Box>
              </Flex>
            );
          })}
        </Flex>
        {data.DAOs.length > itemsShowLine && !daoSeeMore && (
          <Flex
            width="100%"
            justify="end"
            cursor="pointer"
            onClick={() => setDaoSeeMore(true)}
          >
            <Text
              fontSize="10px"
              fontWeight="300"
              color={theme.colors.textSecondary}
            >
              ...see more
            </Text>
          </Flex>
        )}
      </Box>
      <Box mt="50px">
        <Text fontSize="14px" fontWeight="600">
          NFT Collection
        </Text>
        <Flex flexWrap="wrap" columnGap="30px" rowGap="20px" justify="space-evenly" mt="8px">
          {data.collections.slice(0, collectionShowLine).map((item, index) => {
            return (
              <OutlineButton padding="0 12px" key={index}>{item.name}</OutlineButton>
            );
          })}
        </Flex>
        {data.collections.length > itemsShowLine && !collectionSeeMore && (
          <Flex
            width="100%"
            justify="end"
            cursor="pointer"
            onClick={() => setCollectionSeeMore(true)}
          >
            <Text
              fontSize="10px"
              fontWeight="300"
              color={theme.colors.textSecondary}
            >
              ...see more
            </Text>
          </Flex>
        )}
      </Box>
      <Box mt="50px">
        <Text fontSize="14px" fontWeight="600">
          Credentials
        </Text>
        <Flex mt="8px" width="100%" justify="space-between">
          {data.credentials.map((item, index) => {
            return (
              <Text fontSize="12px" fontWeight="400">
                {item}
              </Text>
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
};

export default TowneSquare;

const OutlineButton = styled.div<{
  margin?: string;
  width?: string;
  padding?: string;
}>`
  display: flex;
  width: ${(props) => props.width};
  height: 31px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 700;
  color: #b5b3bc;
  cursor: pointer;
  border: solid 1px #b5b3bc;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;
