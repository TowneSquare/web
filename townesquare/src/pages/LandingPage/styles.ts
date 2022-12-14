import styled from '@emotion/styled';
import { Text } from "../../components/Foundation";
import { Button } from "../../components/Foundation/Button";
import { 
  Container,
  Col,
} from "../../../node_modules/react-bootstrap/esm/index";
import { Wrapper } from "../../styles/common";
import ProfileCard from './../../components/ProfileCard';

export const ContentWrapper = styled(Wrapper)`
  padding: 128px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  
  > * {
    z-index: 1;
  }
`;

export const ColouredContainer = styled(Container)<{background?: string}>`
  background: ${props => props.background ?? 'transparent'};
  padding-bottom: 20px;
`;

export const InfoContainer = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const TextTitle = styled(Text)`
  padding: 32px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const TextSubTitle = styled(Text)`
  padding: 32px 0;
  width: 100%;
  display: flex;
  justify-content: left;
`;

export const TextParagraph = styled(Text)`
  display: flex;
  justify-content: center;
`

export const TextLeftParagraph = styled(Text)`
  display: flex;
  justify-content: left;
`

export const ButtonContainer = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  

@media screen and (max-width: 390px){
  flex-direction: column;
}
`

export const MainButtons = styled(Button)`
  padding: 15px 30px 15px 30px;
  margin: 15px;
  z-index: 10;
`

export const BlueButton = styled(MainButtons)`
  background: linear-gradient(45deg, #0368FF 0%, #5899FF 100%);
  border-radius: 8px;
  // border-color: blue;
  // border-style: solid;
  // &:hover {
  //   background: linear-gradient(90deg, #5899FF 100%, #0368FF 0%);
  // }

  &:disabled {
    opacity: 0.4;
  }
`

export const WhiteButton = styled(MainButtons)`
  background: rgba(140, 116, 255, 0.18);

  /* Message/Modal */
  border: 1px solid #3C384D;
  border-radius: 8px;
  &:hover {
    background: white;
    color: black;
  }  
`

export const GradientButton = styled(MainButtons)`
  background: linear-gradient(135deg, #0368FF 0%, #FF3E95 100%);

`

export const ProfileCardMain = styled(ProfileCard)`
  height: 100%;
  max-width: 720px;
`

export const CoverPhotoLandingWrapper = styled.div<{imgUrl?: string}>`
  width: 100%;
  min-width: calc(100vw - 50px);
  max-width: calc(100vw - 50px);
  margin: 2rem 0rem 2rem 0rem;
  height: 100%;
  background: transparent;
  border-radius: ${props => props.theme.radii.large};
  background-image: url(${props => props.imgUrl ?? "none"});
  position: relative;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.64);
  border: 4px solid #5899FF;

  .edit-action {
    position: absolute;
    bottom: 5%;
  }

  .show-edit-button {
    position: absolute;
    right: 3%;
    bottom: 0;
    transform: translateY(60px);
  }

  @media(min-width: 638px) {
    min-width: calc(100vw - 200px);
    max-width: calc(100vw - 200px);
  }
  
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  `;

export const ProfileAssetWrapper = styled.div`
  width: 100%;
  height: 100%;

  @media(max-width: 1223px) {
    margin-top: ${props => props.theme.spacing[5]}px;
  }
`;