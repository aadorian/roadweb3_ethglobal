import React from 'react'
import { formatEther } from '@ethersproject/units'
import { useEtherBalance, useEthers } from '@usedapp/core'
import { Container, ContentBlock, ContentRow, MainContent, Section, SectionRow } from '../components/base/base'
import { Label } from '../typography/Label'
import { TextInline } from '../typography/Text'
import { Title } from '../typography/Title'
import Avatar from 'react-avatar';
import Iframe from 'react-iframe'
import { useClipboard } from 'use-clipboard-copy';

import { AccountButton } from '../components/account/AccountButton'


export function Graph() {

    const clipboard = useClipboard();
 

  const handleClick = React.useCallback(
    () => {
      const url = 'https://api.studio.thegraph.com/query/20621/roadweb3/0.0.2'
      clipboard.copy(url); // programmatically copying a value
    },
    [clipboard],
  );
   const handleGraphQLClick = React.useCallback(
    () => {
      const url = `{
      approvals(first: 5) {
        id
        owner
        approved
        tokenId
      }
      approvalForAlls(first: 5) {
        id
        owner
        operator
        approved
      }
    }`
      clipboard.copy(url); // programmatically copying a value
    },
    [clipboard],
  );
   
   return (
    <MainContent>
      <Container>
        <Section>
       
       
          <SectionRow>
            <Title><Avatar   src={'https://i.imgur.com/pes9RM2.png'} /> The Graph</Title>
             <AccountButton />
          </SectionRow>
          <ContentBlock>
          <button onClick={handleClick}> Click here  <Avatar  size='50px' src={'https://i.imgur.com/eTNoIJT.png'} /> to copy GraphQL URL </button>
          <button onClick={handleGraphQLClick}> Click here <Avatar  size='50px' src={'https://i.imgur.com/eTNoIJT.png'} /> to copy GraphQL example code  </button>
      
            </ContentBlock>
            <Iframe url="https://www.graphqlbin.com/v2/new"
        width="775px"
        height="450px"
        id="myId"
        className="myClassname"
        position="relative"/>
      
       </Section>
      </Container>
    </MainContent>
  )
}
