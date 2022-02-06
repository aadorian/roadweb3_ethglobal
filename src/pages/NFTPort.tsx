import { useEthers } from '@usedapp/core'
import React , { useState, useEffect } from 'react'
import ReactJson from 'react-json-view'
import { Container, ContentBlock, ContentRow, MainContent, Section, SectionRow } from '../components/base/base'
import { Label } from '../typography/Label'
import { TextInline } from '../typography/Text'
import { Title } from '../typography/Title'
import Avatar from 'react-avatar';
import { AccountButton } from '../components/account/AccountButton'
import { Constants } from '../Constants'

export function NFTPort() {
    const [nftPort, setNFTPort] = useState(null);
    const { account ,chainId} = useEthers()
    const NFT_ADDRESS = Constants.NFT_ADDRESS
	useEffect(() => {
		getData();
		async function getData() {
      const headers = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '431eb0e9-8304-4c4f-9bf0-c50eb7eeebd0'
     
        }}
		  const response = await fetch(`https://api.nftport.xyz/v0/nfts/${account}?chain=polygon&page_number=1&include=default`,headers )
		  const data = await response.json();
      
		  setNFTPort(data) ;
		}
	  }, []);
            
  return (
    <MainContent>
      <Container>
        <Section>
          <SectionRow>
          <Title><Avatar round="20px" style={{opacity: 0.8}} src='https://i.imgur.com/cOQzFs0.png' /> Retrieve NFTs owned by an account  </Title> 
          <AccountButton /> </SectionRow>
      
          <TextInline> Retrieve NFTs owned by an account {account}
            <Label> {account} </Label>
            </TextInline>
          <ContentBlock>
          <ReactJson src={{nftPort}} />
          </ContentBlock>
        </Section>
      </Container>
    </MainContent>
  )
}