import { Flex, Image, Text } from "../../../pages/SocialProfile/styles";
import styled from "@emotion/styled";

const Commands = () => {
  const Command = ({ item }: { item: any }) => {
    return (
      <Flex direction="column" width="100%" items="center">
        <Image src={item.image} width="24px" />
        <OutlineButton width="100%" margin="17px 0 0 0">
          {item.label}
        </OutlineButton>
      </Flex>
    );
  };

  return (
    <Flex width="100%" mt="33px" columnGap="10px">
      {commandList.map((item, index) => {
        return <Command item={item} key={index} />;
      })}
    </Flex>
  );
};

export default Commands;

const commandList = [
  {
    label: "RECEIVE",
    image: "/receive.svg",
  },
  {
    label: "TRANSFER",
    image: "/transfer.svg",
  },
  {
    label: "TRADE",
    image: "/trade.svg",
  },
];

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
