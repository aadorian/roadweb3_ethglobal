import React from 'react'
import { useBlockMeta, useBlockNumber, useEthers } from '@usedapp/core'
import { Container, ContentBlock, ContentRow, MainContent, Section, SectionRow } from '../components/base/base'
import { Label } from '../typography/Label'
import { TextInline } from '../typography/Text'
import Avatar from 'react-avatar';
import { Title } from '../typography/Title'

export function Block() {
  const blockNumber = useBlockNumber()
  const { chainId } = useEthers()
  const { timestamp, difficulty } = useBlockMeta()
  const IMG_BLOCK = 'https://i.imgur.com/791oaoI.png'
  return (
    <MainContent>
      <Container>
        <Section> <SectionRow>
            <Title><Avatar round="20px" style={{opacity: 0.8}} src={IMG_BLOCK} /> BlockChain Block </Title>
        
          </SectionRow>
        
          <ContentBlock>
            <ContentRow>
              <Label>Chain id:</Label> <TextInline>{chainId}</TextInline>
            </ContentRow>
            <ContentRow>
              <Label>Current block:</Label> <TextInline>{blockNumber}</TextInline>
            </ContentRow>
            {difficulty && (
              <ContentRow>
                <Label>Current difficulty:</Label> <TextInline>{difficulty.toString()}</TextInline>
              </ContentRow>
            )}
            {timestamp && (
              <ContentRow>
                <Label>Current block timestamp:</Label> <TextInline>{timestamp.toLocaleString()}</TextInline>
              </ContentRow>
            )}
          </ContentBlock>
        </Section>
      </Container>
    </MainContent>
  )
}
