import styled from '@emotion/styled';
import useMatchBreakpoints from "../../../hooks/useMatchBreakpoints";
import { useTheme } from "@emotion/react";
import { Text } from "../../Foundation";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ColouredContainer, ContentWrapper } from "../../../pages/LandingPage/styles"
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LogoRoundIcon from '../../svgs/LogoRound';

export const Footer = (props) => {
    const { isMobile, isTablet } = useMatchBreakpoints()
    const theme = useTheme();
    return (
      <ColouredContainer background={theme.colors.bg}>
        <footer className="page-footer font-small pt-4">
          <div className="container-fluid text-md-left">
              <Row>
                  <Col className="col-md-2 mt-md-0 mt-3" style={{ justifyContent: "left" }}>
                      <TextTitleFooter>Follow us on</TextTitleFooter>
                      {<TwitterIcon style={{ color: '#F2F0FF', paddingRight: "5px"}} />}
                      {<TelegramIcon style={{ color: '#F2F0FF', paddingRight: "5px" }} />}
                      {<TwitterIcon style={{ color: '#F2F0FF', paddingRight: "5px" }} />}
                      {<TelegramIcon style={{ color: '#F2F0FF' }} />}

                  </Col>

                  <hr className="clearfix w-100 d-md-none pb-0"/>

                  <Col className="col-md-2 mb-md-0 mb-3">
                      <FooterSubheading className="">About us</FooterSubheading>
                      <FooterListStyled className="list-unstyled">
                          <FooterInfo>Team</FooterInfo>
                      </FooterListStyled>
                  </Col>

                  <Col className="col-md-2 mb-md-0 mb-3">
                      <FooterSubheading className="">Community</FooterSubheading>
                      <FooterListStyled className="list-unstyled">
                          <FooterInfo>Twitter</FooterInfo>
                          <FooterInfo>Discord</FooterInfo>
                          <FooterInfo>Medium</FooterInfo>
                          <FooterInfo>Telegram</FooterInfo>
                      </FooterListStyled>
                  </Col>

                  <Col className="col-md-2 mb-md-0 mb-3">
                      <FooterSubheading className="">Documentation</FooterSubheading>
                      <FooterListStyled className="list-unstyled">
                          <FooterInfo>Gitbook</FooterInfo>
                          <FooterInfo>Github</FooterInfo>
                      </FooterListStyled>
                  </Col>

                  <Col className="col-md-2 mb-md-0 mb-3">
                      <FooterSubheading className="">Legal</FooterSubheading>
                      <FooterListStyled className="list-unstyled">
                          <FooterInfo>Terms of service</FooterInfo>
                          <FooterInfo>Privacy policy</FooterInfo>
                          <FooterInfo>Disclaimer</FooterInfo>
                      </FooterListStyled>
                  </Col>

                  <Col className="col-md-2 text-right mb-md-0 mb-3">
                    <div style={{ textAlign: "right"}}>
                      <LogoRoundIcon />
                    </div>
                    <TextTitleFooter style={{ fontSize: "18px" }}>
                      @TownSquare2022
                    </TextTitleFooter>
                  </Col>
              </Row>
          </div>
        </footer>
      </ColouredContainer>
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