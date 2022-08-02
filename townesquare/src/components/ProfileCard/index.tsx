import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { Col, Row, Wrapper } from '../../styles/common';
import { Profile } from '../../types/profile';
import { shortenAddress } from '../../utils/utils';
import { Card, Text } from '../Foundation';
import { CopiedTooltip } from '../Tooltip';

const ProfileCard = ({data}: {data: Profile}) => {
    const theme = useTheme();
    const [showCopied, setShowCopied] = React.useState(false);
    
  const fallbackCopyTextToClipboard = (text: string) => {
    const elem = document.createElement('textarea')
    elem.value = text

    document.body.appendChild(elem)
    elem.select()
    document.execCommand('copy')
    document.body.removeChild(elem)
  }

  const copyTextToClipboard = (text: string) => {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text)
      return
    }
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setShowCopied(true);
      })
      .catch((err) => {
        
        console.error('Async: Could not copy text: ', err)
      })
      .finally(() => {
        setTimeout(() => {
          setShowCopied(false);
        }, 3000);
      })
  }

    return (
        <Card background={theme.colors.secondaryLight}>
            <Wrapper padding="1rem">
                <Col>
                    <Row 
                        className="profile-left-col"
                        gap={`${theme.spacing[3]}px`} 
                        items="center" 
                        style={{width: '160px'}}
                        >
                        <ProfileAvatar className="circle-avatar">
                            <img src={data.avatarUrl ?? "./logo.png"} alt="profile-avatar" />
                        </ProfileAvatar>
                        <AddressWrapper onClick={() => copyTextToClipboard(data.address)}>
                            <Text bold fontSize="18px">{shortenAddress(data.address)}</Text>
                            {showCopied && 
                                <CopiedTooltip>
                                    <Text>Copied!</Text>
                                </CopiedTooltip>}
                        </AddressWrapper>
                        <Row items="center">
                            <Text bold textAlign="center">
                                TowneSquare Collection
                            </Text>
                            {data.isCreator && <Text>Creator NFT</Text>}
                            {data.isFounder && <Text>Founder NFT</Text>}
                        </Row>
                    </Row>

                    <Row className="profile-right-col" gap={`${theme.spacing[3]}px`}>
                        <Row className="memberships" gap={`${theme.spacing[1]}px`}>
                            <Text bold fontSize="18px" style={{marginLeft: `${theme.spacing[1]}px`}}>
                                DAO Membership
                            </Text>
                            {data.DAOs.map(dao => (
                                <DAOMembership>
                                    <Text fontSize="12px">
                                        {`${dao.name} - 
                                            ${dao.since > 12 
                                                ? `${(dao.since - (dao.since % 12)) / 12}yr ` + `${dao.since % 12}`
                                                : dao.since
                                                } months`}
                                    </Text>
                                </DAOMembership>
                            ))}
                        </Row>

                        <Row className="profile-collections">
                            <Text bold fontSize="18px">
                                NFT Collections
                            </Text>
                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
                                {data.collections.map(collection => (
                                    <Text>{collection.name}</Text>
                                ))}
                            </div>
                            <Text bold fontSize="18px">
                                Credentials
                            </Text>
                            <Row>
                                {data.credentials.map(cred => (<Text>{cred}</Text>))}
                            </Row>
                        </Row>
                    </Row>
                </Col>
            </Wrapper>
        </Card>
    )
}

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
    background: ${props => props.theme.colors.primaryLight};
    display:grid;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;

    .edit-action {
        position: absolute;
        bottom: 5%;
        right: 5%;
    }

    > * img {
        display: block;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;

const DAOMembership = styled.div`
    border-radius: ${props => props.theme.radii.default};
    border: 1px solid ${props => props.theme.colors.textPrimary};
    padding: ${props => `${props.theme.spacing[0]}px ${props.theme.spacing[3]}px`};
    text-align: start;
`;

const AddressWrapper = styled.div`
    cursor: pointer;
    position: relative;
`;

export default ProfileCard;