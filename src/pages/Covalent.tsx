import React, { useEffect, useState } from 'react'

import { AccountButton } from '../components/account/AccountButton'
import { Container, MainContent, Section, SectionRow } from '../components/base/base'
import { SendEthForm } from '../components/SendEthForm/SendEthForm'
import { Title } from '../typography/Title'
import ReactJson from 'react-json-view'
import { useEthers } from '@usedapp/core'
import { TextInline } from '../typography/Text'
import { Label } from '../typography/Label'
import Avatar from 'react-avatar';

export const Covalent = () => {
  const { account, chainId } = useEthers()
  const [apiCovalent, setBooks] = useState(null);
  const secret = 'ckey_9e777d2b774a4099b40ab45f203' 
  const url = `https://api.covalenthq.com/v1/${chainId}/address/${account}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=${secret}`
	useEffect(() => {
		getData();
		async function getData() {
		  const response = await fetch(url);
		  const data = await response.json();
		  setBooks(data) ;
		}
	  }, []);
  return (
    <MainContent>
      <Container>
        <Section>
          <SectionRow>
            <Title><Avatar round="10px" style={{opacity: 0.8}} src='https://i.imgur.com/cOQzFs0.png' />Covalent API Call</Title>
         
            <TextInline>  Token balances  ERC20/ERC721/ERC1155 of 
            {' '}<Label>{account}</Label> {' '}
           
               using Covalent API. </TextInline>
            <AccountButton />
            
          </SectionRow>
    
          
          <ReactJson   collapsed={2} displayDataTypes={false} theme={{
                base00: "white",
                base01: "#a876f5",
                base02: "#a876f5",
                base03: "#9c54fc",
                base04: "#9c54fc",
                base05: "#444",
                base06: "#444",
                base07: "#444",
                base08: "#444",
                base09: "#9c54fc",
                base0A: "rgba(70, 70, 230, 1)",
                base0B: "rgba(70, 70, 230, 1)",
                base0C: "rgba(70, 70, 230, 1)",
                base0D: "rgba(70, 70, 230, 1)",
                base0E: "rgba(70, 70, 230, 1)",
                base0F: "#d0baf5"
            }}
               
             src={{apiCovalent}} />
        </Section>
      </Container>
    </MainContent>
  )
}

