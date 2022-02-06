import React from 'react'
import { AccountButton } from '../components/account/AccountButton'
import { Container, MainContent, Section, SectionRow } from '../components/base/base'
import { SendNFTForm } from '../components/SendEthForm/SendNFTForm'
import { Title } from '../typography/Title'
import Avatar from 'react-avatar';




export const Buy= () => {
 
  return (
    <MainContent>
      <Container>
        <Section>
       
          <SectionRow>
          <Title><Avatar round="10px"  src='https://i.imgur.com/cOQzFs0.png' /> Buy a tweet</Title>
            <AccountButton />
           
          </SectionRow>
          <SectionRow>
         
          </SectionRow>
          <SendNFTForm />
        
        </Section>
      </Container>
    </MainContent>
  )
}
