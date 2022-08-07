import React, { useState } from "react";

import { Flex, Text } from "../../../pages/SocialProfile/styles";
import styled from "@emotion/styled";

interface Props {
  data: any;
}

const MultiChain: React.FC<Props> = ({ data }) => {
  const [chain, setChain] = useState("Solana");

  return (
    <Flex width="100%" direction="column" mt="33px">
      <Flex
        width="100%"
        height="44px"
        border="solid 1px #F2F0FF"
        radius="8px"
        position="relative"
      >
        <Flex
          position="absolute"
          top="-8px"
          left="16px"
          bg="#221C3E"
          padding="0 5px 0 5px"
        >
          <Text fontSize="10px" fontWeight="400" color="#B5B3BC">
            Multi-Chain switch
          </Text>
        </Flex>
        <Flex
          width="100%"
          margin="0 16px 0 16px"
          items="center"
          justify="space-between"
        >
          <ChainSelect
            name="chains"
            id="chains"
            style={{ width: "100%" }}
            value={chain}
            onChange={(e) => setChain(e.target.value)}
          >
            <ChainItem value="solana">SOLANA</ChainItem>
            <ChainItem value="near">NEAR</ChainItem>
            <ChainItem value="ethereum">ETHEREUM</ChainItem>
          </ChainSelect>
        </Flex>
      </Flex>
      {/* <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select> */}

      <Flex mt="10px" ml="16px">
        <Text fontSize="10px" fontWeight="400" color="#B5B3BC">
          Select your prefered network
        </Text>
      </Flex>
    </Flex>
  );
};

export default MultiChain;

const ChainSelect = styled.select`
  width: 100%;
  border: none;
  background: transparent;
  color: white;
  &:focus-visible {
    outline: none;
  }
`;

const ChainItem = styled.option`
  color: white;
  background: #221c3e;
`;
