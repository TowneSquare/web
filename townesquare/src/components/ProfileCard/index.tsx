import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import useMatchBreakpoints from '../../hooks/useMatchBreakpoints';
import { Col, Row, Wrapper } from '../../styles/common';
import { Profile } from '../../types/profile';
import { shortenAddress } from '../../utils/utils';
import { Card, Text } from '../Foundation';
import { CopiedTooltip } from '../Tooltip';
const pfp = require('../../assets/images/cryptoApePFP.png');


const ProfileCard = ({data}: {data: Profile}) => {
    const theme = useTheme();
    const { isMobile } = useMatchBreakpoints();
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
        <Card background={'#2F2F2F'} borderRadius={theme.radii.large}>
            <Wrapper padding="1rem">
                <Col>
                    <Row 
                        className="profile-left-col"
                        gap={`${isMobile ? theme.spacing[2] : theme.spacing[3]}px`} 
                        style={{width: '160px'}}
                        >
                        <ProfileAvatar className="circle-avatar">
                            <img src={data.avatarUrl ?? pfp} alt="profile-avatar" />
                        </ProfileAvatar>
                        <AddressWrapper onClick={() => copyTextToClipboard(data.address)}>
                            <Text bold fontSize={isMobile ? "14px" : "18px"}>{shortenAddress(data.address)}</Text>
                            {showCopied && 
                                <CopiedTooltip>
                                    <Text>Copied!</Text>
                                </CopiedTooltip>}
                        </AddressWrapper>
                        <Row gap={`${theme.spacing[4]}px`}>
                            <Text bold fontSize={isMobile ? "16px" : "18px"}>
                                TowneSquare Collection
                            </Text>
                            <div>
                                {data.isCreator && <Text fontWeight={400} fontSize={isMobile ? "12px" : "14px"}>Creator NFT</Text>}
                                {data.isFounder && <Text fontWeight={400} fontSize={isMobile ? "12px" : "14px"}>Founder NFT</Text>}
                            </div>
                        </Row>
                    </Row>
                   
                    <Row className="profile-right-col" gap={`${isMobile ? theme.spacing[2] : theme.spacing[3]}px`}>
                        <Row className="memberships" gap={`${theme.spacing[1]}px`}>
                            <Text bold fontSize={isMobile ? "14px" : "18px"} style={{marginLeft: `${theme.spacing[1]}px`}}>
                                DAO Membership
                            </Text>
                            <MembershipWrapper>
                                {data.DAOs.map((dao, i) => (
                                    <BorderedWrapper key={`dao-${i+1}`} className={`dao-item-${i+1}`}>
                                        <Text fontSize={isMobile ? "10px" : "12px"}>
                                            {`${dao.name} - 
                                                ${dao.since > 12 
                                                    ? `${(dao.since - (dao.since % 12)) / 12}yr ` + `${dao.since % 12}`
                                                    : dao.since
                                                    } months`}
                                        </Text>
                                    </BorderedWrapper>
                                ))}
                            </MembershipWrapper>
                        </Row>

                        <Row className="profile-collections">
                            <Text bold fontSize={isMobile ? "14px" : "18px"}>
                                NFT Collections
                            </Text>
                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
                                {data.collections.map(collection => (
                                    <BorderedWrapper>
                                        <Text key={`${collection.id}`} fontSize={isMobile ? "11px" : "12px"}>{collection.name}</Text>
                                    </BorderedWrapper>
                                ))}
                            </div>
                            <Text bold fontSize={isMobile ? "14px" : "18px"}>
                                Credentials
                            </Text>
                            <Row>
                                {data.credentials.map(cred => (
                                    <BorderedWrapper>
                                        <Text key={`${cred}`} fontSize={isMobile ? "11px" : "12px"}>{cred}</Text>
                                    </BorderedWrapper>
                                        ))}
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
    border-radius: ${props => props.theme.radii.small};
    overflow: hidden;
    background: ${props => props.theme.colors.overlay};
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

const MembershipWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

const BorderedWrapper = styled.div`
    border-radius: ${props => props.theme.radii.small};
    border: 1px solid ${props => props.theme.colors.textPrimary};
    padding: ${props => `${props.theme.spacing[0]}px ${props.theme.spacing[3]}px`};
    margin: ${props => `${props.theme.spacing[1]}px ${props.theme.spacing[0]}px`};
    text-align: start;
    width: fit-content;
`;

const AddressWrapper = styled.div`
    cursor: pointer;
    position: relative;
`;

export default ProfileCard;