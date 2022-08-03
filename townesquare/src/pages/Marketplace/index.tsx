import Page from "../../components/Foundation/Page";
import { Text } from "../../components/Foundation";
import useMatchBreakpoints from "../../hooks/useMatchBreakpoints";
import { Layout, Step, StepContent } from "./styles";

const Marketplace = () => {
  const { isMobile } = useMatchBreakpoints();
  return (
    <Page className="profile-layout">
      <Layout mt="100px">
        <Text fontSize={isMobile ? "40px" : "60px"} textAlign="center">
          Content NFT Marketplace
        </Text>
      </Layout>
      <Layout mt="40px">
        <Text fontSize={isMobile ? "20px" : "30px"} textAlign="center">
          Tokenize your Web 3 content and sell it in our content marketplace
        </Text>
      </Layout>
      <Layout mt="50px">
        <Step direction={isMobile ? "column" : "row"}>
          <StepContent>
            <Text fontSize={isMobile ? "15px" : "20px"} textAlign="center">
              Link your Twitter profile to your TowneSquare profile
            </Text>
          </StepContent>
          <StepContent>
            <Text fontSize={isMobile ? "15px" : "20px"} textAlign="center">
              Select the tweet content you want to monetize and make into NFT
            </Text>
          </StepContent>
          <StepContent>
            <Text fontSize={isMobile ? "15px" : "20px"} textAlign="center">
              Auction and sell it on TowneSquare’s NFT marketplace
            </Text>
          </StepContent>
        </Step>
      </Layout>
    </Page>
  );
};

export default Marketplace;
