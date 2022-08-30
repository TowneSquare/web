import styled from '@emotion/styled';
import { useTheme } from "@emotion/react";
import { Text } from "../../Foundation";
import { Container } from "../../../../node_modules/react-bootstrap/esm/index";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LogoRoundIcon from '../../svgs/LogoRound';
import { BsTwitter, BsDiscord, BsMedium } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';

export const Footer = (props) => {
    const theme = useTheme();
    return (
      <ColouredFooterContainer background={theme.colors.bg}>
        <footer className="page-footer font-small pt-4">
          <div className="container-fluid text-md-left">
              <Row>
                  <Col className="col-md-2 mt-md-0 mt-3" style={{ justifyContent: "left", display: "inline-block" }}>
                      <TextTitleFooter>Follow us on</TextTitleFooter>
                        <a href="https://mobile.twitter.com/TowneSquarexyz">
                          <BsTwitter size={30} style={{ color: '#F2F0FF', paddingRight: "8px", marginRight: "8px"}} />
                        </a>
                        <a href="https://discord.com/">
                          <BsDiscord size={30} style={{ color: '#F2F0FF', paddingRight: "8px", margin: "8px"}}/>
                        </a>   
                        <a href="https://medium.com/">
                          <BsMedium size={30} style={{ color: '#F2F0FF', paddingRight: "8px", margin: "8px"}}/>
                        </a>   
                        <a href="https://telegram.org/">
                          <FaTelegramPlane size={30} style={{ color: '#F2F0FF', paddingRight: "8px", marginLeft: "8px" }} />
                        </a>   
                  </Col>

                  <hr className="clearfix w-100 d-md-none pb-0"/>

                  <Col className="col-md-2 mb-md-0 mb-3">
                      <FooterSubheading className="">About us</FooterSubheading>
                      <FooterListStyled className="list-unstyled">
                        <FooterInfo>
                          <LinkFooter href="/team">
                            Team
                          </LinkFooter>
                        </FooterInfo>
                      </FooterListStyled>
                  </Col>

                  <Col className="col-md-2 mb-md-0 mb-3">
                      <FooterSubheading className="">Community</FooterSubheading>
                      <FooterListStyled className="list-unstyled">
                        <FooterInfo>
                          <LinkFooter href="https://mobile.twitter.com/TowneSquarexyz">
                            Twitter
                          </LinkFooter>
                        </FooterInfo>
                        <FooterInfo>
                          <LinkFooter href="https://discord.gg/2BWvwPSAWW">
                            Discord
                          </LinkFooter>
                        </FooterInfo>
                        <FooterInfo>
                          <LinkFooter href="https://medium.com/">
                            Medium
                          </LinkFooter>
                        </FooterInfo>
                        <FooterInfo>
                          <LinkFooter href="https://telegram.org/">
                            Telegram
                          </LinkFooter>
                        </FooterInfo>
                      </FooterListStyled>
                  </Col>

                  <Col className="col-md-2 mb-md-0 mb-3">
                      <FooterSubheading className="">Documentation</FooterSubheading>
                      <FooterListStyled className="list-unstyled">
                        <FooterInfo>
                          <LinkFooter href="https://docs.townesquare.xyz/townesquare-whitepaper/">
                            Gitbook
                          </LinkFooter>
                        </FooterInfo>
                        <FooterInfo>
                          <LinkFooter href="https://github.com/d2Dreamer/TowneSquare/tree/main">
                            Github
                          </LinkFooter>
                        </FooterInfo>
                      </FooterListStyled>
                  </Col>

                  <Col className="col-md-2 mb-md-0 mb-3">
                      <FooterSubheading className="">Legal</FooterSubheading>
                      <FooterListStyled className="list-unstyled">
                          <FooterInfo><LinkFooter href="/termsofservice">Terms of service</LinkFooter></FooterInfo>
                          <FooterInfo><LinkFooter href="/privacypolicy">Privacy policy</LinkFooter></FooterInfo>
                          <FooterInfo><LinkFooter href="/disclaimer">Disclaimer</LinkFooter></FooterInfo>
                      </FooterListStyled>
                  </Col>

                  <Col className="col-md-2 mb-md-0 mb-3">
                    <div style={{ textAlign: "right", marginBottom: "16px"}}>
                      <LogoRoundIcon />
                    </div>
                    <CopyrightText style={{ fontSize: "18px", textAlign: "right" }}>
                      ©TownSquare2022
                    </CopyrightText>
                  </Col>
              </Row>
          </div>
        </footer>
      </ColouredFooterContainer>
    )
  }

const TextTitleFooter = styled(Text)`
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 140%;

  /* identical to box height, or 34px */

  /* Text/Primary */
  color: #F2F0FF;

  /* Title effect */
  text-shadow: 2px 4px 12px rgba(255, 0, 184, 0.65);
`;

const CopyrightText = styled(Text)`
  font-family: 'Outfit';
  font-style: normal;
  font-size: 24px;
  line-height: 140%;

  /* identical to box height, or 34px */

  /* Text/Primary */
  color: #F2F0FF;
`

const LinkFooter = styled.a`
  color: inherit;
  text-decoration: none;
  line-height: 2;
`

const FooterSubheading = styled.h5`
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;

  /* identical to box height, or 34px */

  /* Text/Primary */
  color: #F2F0FF;
`

const FooterInfo = styled.li`
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;

  /* identical to box height, or 28px */

  /* Text/Secondary */
  color: #B5B3BC;
`

const FooterListStyled = styled.ul`
  li.menu-item:not(:last-child) { 
    margin-bottom: 3px;  
  }
`

const ColouredFooterContainer = styled(Container)<{background?: string}>`
  position: relative;
  z-index: 2;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  background: ${props => props.background ?? '#221C3E'};
  padding: 50px;
  -webkit-box-shadow:0 0 20px #312553; 
  -moz-box-shadow: 0 0 20px #312553; 
  box-shadow:0 0 20px #312553;
`;