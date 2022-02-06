import React from 'react'
import { formatEther } from '@ethersproject/units'
import { ERC20Interface, shortenAddress, useContractCall, useEtherBalance, useEthers, useToken, useTokenBalance } from '@usedapp/core'
import { Container, ContentBlock, ContentRow, MainContent, Section, SectionRow } from '../components/base/base'
import { Label } from '../typography/Label'
import { TextInline } from '../typography/Text'
import { Title } from '../typography/Title'
import { NftGallery } from 'react-nft-gallery';
import { AccountButton } from '../components/account/AccountButton'
import { formatUnits } from '@ethersproject/units'
import { Falsy } from '@usedapp/core/dist/esm/src/model/types'
import Avatar from 'react-avatar';

function useMyTokenBalance(
    tokenAddress: string | Falsy,
    address: string | Falsy
  ) {
    const [tokenBalance] =
      useContractCall(
        address &&
          tokenAddress && {
            abi: ERC20Interface, // ABI interface of the called contract
            address: tokenAddress, // On-chain address of the deployed contract
            method: "balanceOf", // Method to be called
            args: [address], // Method arguments - address to be checked for balance
          }
      ) ?? [];
    return tokenBalance;
  }

export function Nft() {
  const { account } = useEthers()

  const userBalance = useEtherBalance(account)

  
  const accountString =   account + ''  
  const IMG_NFT = 'https://i.imgur.com/7MxAhF3.png1'
  return (
    <MainContent>
      <Container>
        <Section>
          <SectionRow>
          <Title><Avatar round="20px"  src={IMG_NFT} /> My NFTs </Title>
          
         
            <AccountButton />
          </SectionRow>
        
          <ContentBlock>
          

            {account && (
              <ContentRow>
                <Label>Account:</Label> <TextInline>{account}</TextInline>
              </ContentRow>
            )}
            {userBalance && (
              <ContentRow>
                <Label>Balance:</Label> <TextInline>{formatEther(userBalance)}</TextInline> 
              </ContentRow>
            )}
          
              </ContentBlock>
              <ContentBlock>
              <NftGallery ownerAddress={accountString} />
              </ContentBlock>
        </Section>
      </Container>
    </MainContent>
  )
}


