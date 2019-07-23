import React from 'react'
import styled from '@emotion/styled'

import { Container, Title, ContinueNavButton, APP_ROUTES } from 'global'

import emptyUsbImage from 'global/assets/empty-usb.svg'

export const DeviceVerified: React.FC<{}> = () => (
  <Container>
    <Title>
      Your Metro has been verified!
    </Title>
    <Image src={emptyUsbImage} alt='' />
    <ContinueNavButton to={APP_ROUTES.HOME}>
      CONTINUE
    </ContinueNavButton>
  </Container>
)

const Image = styled.img({
  padding: '20px 0 50px',
})
