import React from 'react'
import { formatEther } from '@ethersproject/units'
import { useEtherBalance, useEthers, useLookupAddress } from '@usedapp/core'
import { Container, ContentBlock, ContentRow, MainContent, Section, SectionRow } from '../components/base/base'
import { Label } from '../typography/Label'
import { TextInline } from '../typography/Text'
import { Title } from '../typography/Title'
var QRCode = require('qrcode.react');
import { AccountButton } from '../components/account/AccountButton'
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


const STAKING_CONTRACT = '0x00000000219ab540356cBB839Cbe05303d7705Fa'
function Header() {
 
  return ('')
}

export function About() {
  const { account } = useEthers()
  const ens = useLookupAddress()
  const userBalance = useEtherBalance(account)
  const stakingBalance = useEtherBalance(STAKING_CONTRACT)
 
 
  
  return (
    <MainContent>
      <Container>
    
        <Section>
          <SectionRow>
            <Title><Avatar round="20px"  src={'https://i.imgur.com/LvfqO3Q.png' } /> About</Title>
            <AccountButton />
          </SectionRow>
          <ContentBlock>
                     <ContentRow>
                   
              </ContentRow>
            
              {account && 
              <QRCode value={account} />}
              <Label>Account:</Label> <TextInline>{account}  </TextInline>{' '}
            
          </ContentBlock>
        
          <ContentBlock>
          
 <TwitterHashtagButton
  tag={'Polygon'}
/> 
          <ContentRow>
          
              </ContentRow>
          </ContentBlock>
          
        </Section>
      </Container>
    </MainContent>
  )
}
