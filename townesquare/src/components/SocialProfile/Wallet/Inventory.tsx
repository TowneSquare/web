import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

import { Flex, Image, Text } from "../../../pages/SocialProfile/styles";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

interface Props {
  data: any;
}

const InventoryItem = ({ item, isLast }: { item: any; isLast: boolean }) => {
  const theme = useTheme();
  return (
    <>
      <Flex
        width="100%"
        height="44px"
        items="center"
        pl="10px"
        justify="space-between"
        padding="0 12px"
      >
        <Text fontSize="16px" fontWeight="700">
          {item.label}
        </Text>
        <Text fontSize="16px" fontWeight="700">
          {item.mark}
        </Text>
      </Flex>
      {!isLast && <Flex width="100%" border="solid 1px #b5b3bc" />}
    </>
  );
};

const Inventory: React.FC<Props> = ({ data }) => {
  return (
    <Flex direction="column" width="100%" mt="45px">
      <Text fontSize="20px" fontWeight="400">
        Inventory
      </Text>
      <Flex
        direction="column"
        width="100%"
        border="solid 1px #b5b3bc"
        radius="8px"
        mt="5px"
      >
        {data.inventory.map((item, index) => {
          return (
            <InventoryItem
              item={item}
              isLast={data.balances.length - 1 == index}
              key={index}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Inventory;
