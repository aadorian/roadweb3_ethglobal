import React from 'react'
import { formatEther } from '@ethersproject/units'
import { useCoingeckoPrice, useCoingeckoTokenPrice } from '@usedapp/coingecko'
import { useContractCall, useEtherBalance, useEthers, useToken } from '@usedapp/core'
import { Container, ContentBlock, ContentRow, MainContent, Section, SectionRow } from '../components/base/base'
import { Label } from '../typography/Label'
import { TextInline } from '../typography/Text'
import { Title } from '../typography/Title'
import Avatar from 'react-avatar';
import Iframe from 'react-iframe'
import ERC721ABI from '../abi/ERC721.json'
import { utils } from 'ethers'
import styled from 'styled-components'
import { BorderRad, Colors } from '../global/styles'
import { AccountButton } from '../components/account/AccountButton'
import { Falsy } from '@usedapp/core/dist/esm/src/model/types'
import { formatUnits } from '@ethersproject/units'
import { BigNumber } from 'ethers'
import { Constants } from '../Constants'

const formatter = new Intl.NumberFormat('en-us', {
  minimumFractionDigits: 4,
  maximumFractionDigits: 4,
})

const myInterface = new utils.Interface(ERC721ABI)
function useOwnerNFTContract(
  tokenAddress: string | Falsy,
  tokenID: string | Falsy
) {
  const [tokenData] =
    useContractCall(
      tokenID &&
        tokenAddress && {
          abi: myInterface, // ABI interface of the called contract
          address: tokenAddress, // On-chain address of the deployed contract
          method: "owner", // Method to be called
          args: [], // Method arguments - address to be checked for balance
        }
    ) ?? [];
  return tokenData;
}
function useBalanceOfNFTContract(
  tokenAddress: string | Falsy,
  tokenID: string | Falsy
) {
  const [tokenData] =
    useContractCall(
      tokenID &&
        tokenAddress && {
          abi: myInterface, // ABI interface of the called contract
          address: tokenAddress, // On-chain address of the deployed contract
          method: "balanceOf", // Method to be called
          args: [tokenID], // Method arguments - address to be checked for balance
        }
    ) ?? [];
  return tokenData;
}


export function Balance() {
  const { account } = useEthers()
  const userBalance = useEtherBalance(account)
  const maticPrice = useCoingeckoPrice('matic-network', 'usd')
  const MATIC_CONTRACT = '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0'
  const NFT_ADDRESS = Constants.NFT_ADDRESS
  const ownerBalance = useOwnerNFTContract(NFT_ADDRESS,account)
  const balanceActualAddress = useBalanceOfNFTContract(NFT_ADDRESS,account)
  
   return (
    <MainContent>
      <Container>
        <Section>
          <SectionRow>
            <Title><Avatar round="20px"  src={'https://i.imgur.com/j62vHyV.png'} /> Balance</Title>
             <AccountButton />
          </SectionRow>
          <ContentBlock>
          {maticPrice && (
              <ContentRow>
                <Label>Matic price <TextInline>(@CoinGecko):</TextInline></Label><BalanceWrapper><Label>${maticPrice}</Label> </BalanceWrapper>
                
              </ContentRow>
            )}
            {ownerBalance && (
              <ContentRow>
                <Label>Address of the contract owner:</Label> <TextInline>{ownerBalance}</TextInline>
                </ContentRow>
              )}
            {userBalance && (
              <ContentRow>
                <Label>Token balance: <TextInline>{formatEther(userBalance)}</TextInline> </Label>
              </ContentRow>
            )}
           
            {balanceActualAddress && (
               <ContentRow>
                <BalanceWrapper><Label>Your have :</Label><Avatar round="5px"  src={'https://i.imgur.com/KmQhnWr.png'} /> 
                    {formatUnits(balanceActualAddress, 0)}
                 <Label>Token/s</Label> </BalanceWrapper>
               
                 <TextInline> @  your account <Label>{account}</Label> address. </TextInline>
                </ContentRow>
               )}
          
            
          </ContentBlock>
            
       </Section>
      </Container>
    </MainContent>
  )
}

const BalanceWrapper = styled.div`
  color: ${Colors.Gray['600']};
  font-size: 50px;
  margin: 2px 0 24px 0;
  font-weight: 700;
  align-self: flex-center;
`

