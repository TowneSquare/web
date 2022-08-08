import React from "react";
import { Flex, Text } from "../../../pages/SocialProfile/styles";
import Balances from "./Balances";
import Commands from "./Commands";
import Inventory from "./Inventory";
import MultiChain from "./MultiChain";

interface Props {
  data: any;
}

const Wallet: React.FC<Props> = ({ data }) => {
  return (
    <Flex width="100%" direction="column">
      <Flex ml="15px">
        <Text
          fontSize="10px"
          fontWeight="400"
          color="#B5B3BC"
          wordBreak="break-word"
        >
          Wallet Address
        </Text>
      </Flex>
      <Flex
        width="100%"
        height="26px"
        bg="#8C74FF14"
        items="center"
        justify="center"
        radius="8px"
        mt="5px"
      >
        <Text
          fontSize="12px"
          fontWeight="400"
          color="#F2F0FF"
          wordBreak="break-word"
        >
          {data.address}
        </Text>
      </Flex>
      <MultiChain data={data} />
      <Commands />
      <Balances data={data} />
      <Inventory data={data} />
    </Flex>
  );
};

export default Wallet;
