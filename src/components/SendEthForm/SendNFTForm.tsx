import React, { useEffect, useState } from 'react'
import { formatEther } from '@ethersproject/units'
import { BigNumber } from 'ethers'
import { ContentBlock } from '../base/base'
import { TextBold } from '../../typography/Text'
import { Colors, BorderRad, Transitions } from '../../global/styles'
import styled from 'styled-components'
import { Button } from '../base/Button'
import { useContractFunction, useEtherBalance, useEthers, useSendTransaction } from '@usedapp/core'
import { utils } from 'ethers'
import { StatusAnimation } from '../Transactions/NFTTransactionForm'
import { Fonts } from '../../global/styles'
import ERC721Interface from '../../abi/ERC721.json'
import { ERC20Interface, shortenAddress, useContractCall,  useToken, useTokenBalance } from '@usedapp/core'
import Avatar from 'react-avatar';
import { Falsy } from '@usedapp/core/dist/esm/src/model/types'
import { formatUnits } from '@ethersproject/units'
import { Contract } from '@ethersproject/contracts'
import { Constants } from '../../Constants'
const myInterface = new utils.Interface(ERC721Interface)

const nftInterface = new utils.Interface(ERC721Interface)
const NFTContractAddress = Constants.NFT_ADDRESS
const contract = new Contract(NFTContractAddress, nftInterface)

const InputComponent = () => {
  const { account } = useEthers()
  const { state, send ,events} = useContractFunction(contract, 'safeMint', { transactionName: 'Wrap' })

  const [tokenId, setTokenId] = useState('0')
  const [address, setAddress] = useState('')
  const [uri ,setUri] = useState('')  
  const [disabled, setDisabled] = useState(false)

  const depositEther = () => {
    send(address,tokenId,uri)
  }
   const handleClick = () => {
    setDisabled(true)
    depositEther()
 
  }
  const currentAddress = account +''
  useEffect(() => {
    if (state.status != 'Mining') {
      setDisabled(false)
      setTokenId('0')
      setUri('')
      setAddress('')
    }
  }, [state])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>

      <InputRow>
      <Input
          id={`EthInput`}
          type="number"
          step="0.01"
          value={tokenId}
          onChange={(e) => setTokenId(e.currentTarget.value)}
          min="0"
          disabled={disabled}
        />
        <FormTicker><Label>-</Label></FormTicker>
        <AddressInput
          id={`AddressInput`}
          type="text"
          value={address}
          placeholder="0x..."
          onChange={(e) => setAddress(e.currentTarget.value)}
          disabled={disabled}
        />
         <FormTicker><Label>-</Label></FormTicker>
         <URIInput
          id={`URIInput`}
          type="text"
          value={uri}
          placeholder="http://"
          onChange={(e) => setUri(e.currentTarget.value)}
          disabled={disabled}
        />
        <SmallButton disabled={!account || disabled} onClick={handleClick}>
          Buy
        </SmallButton>
      </InputRow>
     
      <StatusAnimation transaction={state} />
    </div>
  )
}

export const SendNFTForm = () => {
  const { account } = useEthers()
  const balance = useEtherBalance(account)
  return (
    <ContentBlock style={{ padding: 0 }}>
      <TitleRow>
        <CellTitle> <Avatar round="10px" size= "50px" src='https://i.imgur.com/8gAClAR.png' /> 
         </CellTitle>
      </TitleRow>
      <LabelRow>
        <Label style={{ marginLeft: '20px' }} htmlFor={'EthInput'}>
          Twitter ID?
        </Label>
        <Label style={{ marginLeft: '150px' }} htmlFor={'AddressInput'}>
          Address?
        </Label>
        <Label style={{ marginLeft: '150px' }} htmlFor={'URIInput'}>
          URI?
        </Label>
      </LabelRow>
      <InputComponent />
    </ContentBlock>
  )
}


const CellTitle = styled(TextBold)`
  font-size: 18px;
`

const LabelRow = styled.div`
  display: flex;
  margin: 32px 0 24px 0;
`

const Label = styled.label`
  font-weight: 700;
  cursor: pointer;
  transition: ${Transitions.all};

  &:hover,
  &:focus-within {
    color: ${Colors.Yellow[500]};
  }
`

const TitleRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: ${Colors.Gray['300']} 1px solid;
  padding: 16px;
`

const BalanceWrapper = styled.div`
  color: ${Colors.Gray['600']};
  font-size: 14px;
`

const Input = styled.input`
  height: 100%;
  width: 4 px;
  padding: 0 0 0 24px;
  border: 0;
  border-radius: ${BorderRad.m};
  -moz-appearance: textfield;
  outline: none;
  font-family: ${Fonts.Helvetica};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
  }
`

const AddressInput = styled(Input)`
  width: 200px;
  padding: 0 0 0 10px;
  font-family: ${Fonts.Helvetica};
  &:hover,
  &:focus-within {
    color: ${Colors.Yellow[500]};
  }
`
const URIInput = styled(Input)`
  width: 200px;
  padding: 0 0 0 10px;
  font-family: ${Fonts.Helvetica};
  &:hover,
  &:focus-within {
    color: ${Colors.Yellow[500]};
  }
`

const InputRow = styled.div`
  height: 44px;
  display: flex;
  margin: 0 auto;
  color: ${Colors.Gray['600']};
  align-items: center;
  border: ${Colors.Gray['300']} 1px solid;
  border-radius: ${BorderRad.m};
  overflow: hidden;
  transition: ${Transitions.all};

  &:hover,
  &:focus-within {
    border-color: ${Colors.Black[900]};
  }
`

const FormTicker = styled.div`
  padding: 0 1  px;
`

const SmallButton = styled(Button)`
  display: flex;
  justify-content: center;
  min-width: 50px;
  height: 100%;
  padding: 8px 24px;

  &:disabled {
    color: ${Colors.Gray['600']};
    cursor: unset;
  }

  &:disabled:hover,
  &:disabled:focus {
    background-color: unset;
    color: unset;
  }
`
