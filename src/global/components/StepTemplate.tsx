import React from 'react'
import styled from '@emotion/styled'

import { colors } from '../theme'

import { StepperContainer } from './stepper/StepperContainer'
import { Header } from './Header'
import { Footer } from './Footer'

interface StepTemplateProps {
  children: JSX.Element
  step: number
}

export const StepTemplate: React.FC<StepTemplateProps> = ({ step, children }) => (
  <Container>
    <Wrapper>
      <Header />
      <StepperContainer step={step} />
    </Wrapper>
    <Card>
      {children}
    </Card>
    <Footer />
  </Container>
)

const Container = styled.div({
  width: '100%',
  height: '100%',
  background: colors.background.primary,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
})

const Card = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  borderRadius: 5,
  background: colors.text.secondary,
  padding: '40px 80px',
  width: 700,
  minHeight: 450,
  zIndex: 10,

  ['@media (max-width: 700px)']: { // eslint-disable-line
    width: '100%',
  }
})

const Wrapper = styled.div({
  height: '29vh',
  justifyContent: 'center',
  alignItems: 'flex-end',
  display: 'flex',
})
