import React from 'react'
import styled from '@emotion/styled'

import { Container as _Container, Title, Text, Button } from 'global'
import emptyUsbImage from 'global/assets/empty-usb.svg'

interface Props {
  onContinue(): void
}

export const VerifyDeviceView: React.FC<Props> = ({
  onContinue,
}) => (
  <Container>
    <Title>
      Welcome to your new Metro
    </Title>
    <Text>
      Begin the verification process by connecting your Metro the your computer and then clicking verify button below.
    </Text>
    <Image src={emptyUsbImage} alt='' />
    <Button onClick={onContinue}>
      VERIFY YOUR METRO
    </Button>
  </Container>
)

const Container = styled(_Container)({
  padding: '0 15%',
})

const Image = styled.img({
  padding: '20px 0 50px',
})
