import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

import { Flex, Image, Text } from "../../../pages/SocialProfile/styles";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

interface Props {
  data: any;
}

const Balance = ({ item, isLast }: { item: any; isLast: boolean }) => {
  const theme = useTheme();
  return (
    <>
      <Flex width="100%" items="center" pl="10px">
        <Text fontSize="16px" fontWeight="700">
          {item.symbol}
        </Text>
      </Flex>
      <Flex items="center">
        <Image src="/monitoring.svg" width="24px" />
      </Flex>
      <Flex items="center">
        <Text fontSize="12px" fontWeight="400" color="#FF3E95">
          {item.change}
        </Text>
      </Flex>
      <Flex direction="column" justify="center">
        <Text fontSize="16px" fontWeight="700" color="#F2F0FF">
          {item.amount}
        </Text>
        <Text
          fontSize="10px"
          fontWeight="700"
          color={theme.colors.textSecondary}
        >
          {item.usd.toLocaleString()}&nbsp;USD
        </Text>
      </Flex>
      {!isLast && <Seperator />}
    </>
  );
};

const Balances: React.FC<Props> = ({ data }) => {
  return (
    <Flex direction="column" width="100%" mt="45px">
      <Text fontSize="20px" fontWeight="400">
        Balance
      </Text>
      <PanelGrid>
        {data.balances.map((item, index) => {
          return (
            <Balance
              item={item}
              isLast={data.balances.length - 1 == index}
              key={index}
            />
          );
        })}
      </PanelGrid>
    </Flex>
  );
};

export default Balances;

const PanelGrid = styled.div`
  display: grid;
  grid-template-columns: 50% auto auto auto;
  gap: 10px;
  border: solid 1px #b5b3bc;
  border-radius: 8px;
  margin-top: 5px;
`;

const Seperator = styled.div`
  grid-column: 1/5;
  border: solid 1px #b5b3bc;
  border-radius: 8px;
`;
