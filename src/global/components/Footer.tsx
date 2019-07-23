import React from 'react'
import styled from '@emotion/styled'

import { colors } from '../theme'

import nyLogo from '../assets/ny-logo.svg'

export const Footer: React.FC<{}> = () => (
  <Container>
    <p>
      The Metro hardware key device is built by EOS New York, a top 21 block producer on the
      EOS blockchain. © 2018 eosnewyork.io. All Rights Reserved.
    </p>
    <Logo src={nyLogo} alt='' />
  </Container>
)

const Container = styled.div({
  margin: '100px 0 125px',
  width: '50%',
  textAlign: 'center',
  color: colors.text.primary,
})

const Logo = styled.img({
  marginTop: 20,
})
