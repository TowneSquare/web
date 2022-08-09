import styled from '@emotion/styled';
import { Text } from "../../components/Foundation";
import { Button } from "../../components/Foundation/Button";
import { 
  Container,
  Col,
} from "../../../node_modules/react-bootstrap/esm/index";
import ProfileCard from './../../components/ProfileCard';

export const ColouredContainer = styled(Container)<{background?: string}>`
  max-width: 100%;
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
`

export const MainButtons = styled(Button)`
  padding: 15px 30px 15px 30px;
  margin: 15px;
`

export const BlueButton = styled(MainButtons)`
  color: white;
  background-color: blue;
  border-color: blue;
  border-style: solid;
  &:hover {
    color: blue;
    background-color: white;
    border-color: blue;
  }
`

export const WhiteButton = styled(MainButtons)`
  color: black;
  background-color: white;
  border-color: black;
  border-style: solid;
  &:hover {
    color: white;
    background-color: black;
    border-color: black;
  }
`

export const ProfileCardMain = styled(ProfileCard)`
  height: 100%;
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