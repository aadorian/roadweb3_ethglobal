import React from 'react'
import { AccountButton } from '../components/account/AccountButton'
import { Container, MainContent, Section, SectionRow } from '../components/base/base'
import { SendEthForm } from '../components/SendEthForm/SendEthForm'
import { Title } from '../typography/Title'
import Avatar from 'react-avatar';

import { Button } from '../components/base/Button'


export const SendEtherPage = () => {
 
  return (
    <MainContent>
      <Container>
        <Section>
       
          <SectionRow>
          <Title><Avatar round="10px"  src='https://i.imgur.com/cOQzFs0.png' />Send ERC-20 Tokens</Title>
        
            <AccountButton />
           
          </SectionRow>
          <SectionRow>
         
          </SectionRow>
          <SendEthForm />
        
        </Section>
      </Container>
    </MainContent>
  )
}
