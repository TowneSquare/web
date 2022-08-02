import styled from "@emotion/styled";
import FormGroup from "@mui/material/FormGroup"
import Input from "@mui/material/Input";
import { Row } from "../../styles/common";

// export const Layout = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   height: 100%;
//   width: 100%;
//   justify-content: start;
//   justify-items: center;

//   .profile-header {

//     .bottom-div {
//       position: fixed;
//       bottom: 2%;
//       right: 3%;

//       .edit-profile-buttons {
//         cursor: pointer;
//         position: sticky;
//         right: 0;
//         bottom: 0;
//         background: transparent;
//         padding:.5rem 1rem 1rem 1rem;
//         border-radius: ${props => props.theme.radii.default};
//         transition: all 0.1s ease-in-out;

//         &:hover {
//           background: #d6d7db24;
//         }

//         p {
//           color: ${props => props.theme.colors.textPrimary};
//         }
//       }
//     }
//   }


// `;

export const CoverPhotoWrapper = styled.div<{imgUrl?: string}>`
  cursor: pointer;
  width: 100%;
  min-width: calc(100vw - 50px);
  max-width: calc(100vw - 50px);
  margin-top: 2rem;
  height: 100%;
  min-height: 300px;
  max-height: 300px;
  background: ${({ theme }) => theme.colors.cardOverlay};
  border-radius: ${props => props.theme.radii.default};
  background-image: url(${props => props.imgUrl ?? "none"});
  position: relative;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.3);

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

  @media(min-width: 1024px) {
    min-width: calc(100vw - 200px);
    max-width: calc(100vw - 200px);
    min-height: 400px;
    max-height: 400px;
  }
  
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  `;
  
  export const Blur = styled.div<{w?: string, h?: string}>`
  height: ${props => props.h ?? '100%'};
  width: ${props => props.w ?? '100%'};
  background: rgb(0,0,0, 0.3);
  // background: #1FB49BA8;
  radius: 5px;
  image-blend-mode: overlay, normal;
  filter: blur(4px);
  `;
  
export const ProfileAvatar = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  min-width: 140px;
  max-width: 140px;
  min-height: 140px;
  max-height: 140px;
  border-radius: ${props => props.theme.radii.default};
  overflow: hidden;
  position: relative;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  display:grid;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;

  .edit-action {
    position: absolute;
    bottom: 5%;
    right: 5%;
  }
  
  .blur-profileimg {
    position: absolute;
  }

  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.primary};
    transform: translateY(2px);
  }
`;

export const Section = styled.div`
  display: grid;
  grid-auto-flow: column;
  height: 100%;
`;

export const InfoBox = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height: 100%;
  min-height: 210px;
  max-height: 250px;
  justify-items: center;
  background: ${props => `${props.theme.colors.card}`};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: ${props => props.theme.radii.default};

  @media(min-width: 1024px) {
    width: 400px;
  }

  .profile-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: start;
    grid-gap: .5rem;
    padding-bottom: 1.5rem;
  } 

  .profile-socials {
    transform: translateY(-30px);
  }
  .profile-bio {
    transform: translateY(-60px);
    color: ${props => props.theme.colors.textPrimary};
    font-size: 14px;
  }
`;

export const GridWrap = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  `;
  
  export const InfoItem = styled.div`
  display: grid;
  grid-auto-flow: row;
  width: 160px;
  border-radius: ${props => props.theme.radii.default};
  
  .row-item-title {
    text-align: center;
    font-size: 24px;
    margin: 1rem 1rem 0 1rem;
    color: ${props => props.theme.colors.textPrimary};
  }
  .row-item-value {
    font-size: 18px;
    color: ${props => props.theme.colors.textPrimary};
    text-align: center;
  }

`;

export const UsernameInfoBox = styled(Row)`
  align-items: center;
  border-radius: ${props => props.theme.radii.small};
  background: ${props => props.theme.colors.tertiary};
  transform: translateY(8px);
  padding: 0 1rem;
  margin-bottom: 1rem;
  height: 40px;
  position: relative;

  p {
    color: ${props => props.theme.colors.textPrimary};
    font-size: 14px;
  }
  
  .edit-form-active {
    cursor: pointer;
  }

  .edit-form-close {
    cursor: pointer;
  }

  .address-copy-btn {
    cursor: pointer;
    background: transparent;
    border: none;
    box-shadow: none;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
`;

export const CopiedTooltip = styled.div`
  width: 100px;
  height: 80px;
  background: ${props => props.theme.colors.card};
  border-radius: ${props => props.theme.radii.small};
  margin: 1rem;
  display: grid;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  transform: translateY(60px);

  p {
    color: ${props => props.theme.colors.textPrimary};
    font-size: 14px;
  }
`;

export const EditForm = styled(FormGroup)`
  padding: .75rem 1rem;
  background: ${props => props.theme.colors.card};
`;

export const EditAction = styled.div<{color?: string, size?: number}>`
  cursor: pointer;
  position: absolute;
  bottom: 1rem;
  right: 30px;
  background: #FFFFFF31;
  border-radius: ${props => props.theme.radii.circle};
  height: ${props => props.size ? `${props.size}px` : '40px'};
  width: ${props => props.size ? `${props.size}px` : '40px'};
  display: grid;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: all 0.15s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  svg {
    margin-top: 2px;
    height: ${props => props.size ? `${props.size / 1.5}px` : '28px'};
    width: ${props => props.size ? `${props.size / 1.5}px` : '28px'};
  }
`;

export const EditProfileIcon = styled.div<{bg?: string, hoverColor?: string}>`
  curser: pointer;
  border-radius: ${props => props.theme.radii.circle};
  height: 35px;
  width: 35px;
  position: absolute;
  right: 5px;
  bottom: 5px;
  z-index: 1;
  display: grid;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
  background: ${props => props.bg ?? props.theme.colors.bg};
  transition: all 0.15s ease-in-out;

  &:hover {
    cursor: pointer;
    background: ${props => props.hoverColor ?? 'inherit'};
  }

`;

export const TextField = styled(Input)`
  opacity: 0.3;
  color: ${props => props.theme.colors.textSecondary};
  width: 100%;
  max-width: 150px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  cursor: pointer;
`;

export const FollowInfo = styled.div`

  border-radius: ${props => props.theme.radii.default};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  align-items: center;
  justify-content: space-between;
`;