import React, { useState } from 'react'
import styled from '@emotion/styled'

import {
  Container,
  Title,
  getMetro,
  Button,
} from 'global'

import emptyUsbImage from 'global/assets/empty-usb.svg'
import { connect } from 'stent/lib/react'

const CheckForBootloaderMode: React.FC<any> = ({uploadFirmWare}) => {
  const [error, setError] = useState('')

  const handleUpdate = async () => {
    try {
      const metro = await getMetro()
      const isReady = await metro.is_bootloader()
      if (isReady && isReady.inBootloaderState) {
        uploadFirmWare()
      } else {
        setError('Unable to verify device is in bootloader mode')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      {error && <Error>{error}</Error>}
      <Title>
        You need to upgrade your firmware.
      </Title>
      <p>
        Please hold down the button on the metro before plugging it into the computer.
        Press the Start Update button below when the device is in bootloader mode.
      </p>
      <Image src={emptyUsbImage} alt='' />
      <Button onClick={handleUpdate}>
        Start Update
      </Button>
    </Container>
  )
}

const Image = styled.img({
  padding: '20px 0 50px',
})

const Error = styled.p({
  color: 'red',
  fontSize: 18,
  marginTop: 20,
})

export default connect(CheckForBootloaderMode)
    .with('MetroVerify')
    .map((machine) => ({
      uploadFirmWare: machine.uploadFirmWare,
      error: machine.state.error
    }))
