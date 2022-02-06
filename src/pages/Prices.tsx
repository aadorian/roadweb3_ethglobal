import React from 'react'
import { useCoingeckoPrice, useCoingeckoTokenPrice } from '@usedapp/coingecko'
import { Container, ContentBlock, ContentRow, MainContent, Section, SectionRow } from '../components/base/base'
import { Label } from '../typography/Label'
import { TextInline } from '../typography/Text'
import { Title } from '../typography/Title'
import Avatar from 'react-avatar';

export function Prices() {
  const etherPrice = useCoingeckoPrice('ethereum', 'usd')
  const WETH_CONTRACT = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
  const wethPrice = useCoingeckoTokenPrice(WETH_CONTRACT, 'usd')

  return (
    <MainContent>
      <Container>
        <Section>
          <SectionRow>
          <Title><Avatar round="20px" style={{opacity: 0.1}} src={'https://i.imgur.com/RymKDqs.png' } /> Price</Title>
      
          </SectionRow>
          <ContentBlock>
            {etherPrice && (
              <ContentRow>
                <Label>Ethereum price:</Label> <Label>$ </Label>
                <TextInline>{etherPrice}</TextInline>
              </ContentRow>
            )}
            {wethPrice && (
              <ContentRow>
                <Label>WETH price:</Label> <Label>$ </Label>
                <TextInline>{wethPrice}</TextInline>
              </ContentRow>
            )}
          </ContentBlock>
        </Section>
      </Container>
    </MainContent>
  )
}
