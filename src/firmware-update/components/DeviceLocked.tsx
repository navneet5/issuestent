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

const DeviceLocked: React.FC<any> = ({uploadFirmWare}) => {

  const handleUpdate = async () => {
    try {
      const metro = await getMetro()
      const isReady = await metro.is_bootloader()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      <p>
       Oh no, it looks like you’ve been locked out of your device
      </p>
      <p>
       For your protection ... If you enter the incorrect password 8 times. We lock the device. 
      </p>
      <Image src={emptyUsbImage} alt='' />
      <Button onClick={handleUpdate}>
        Start Update
      </Button>
    </Container>
  )
}

const Image = styled.img({
  padding: '20px 0 50px'
})

/* Rectangle Copy 3.22 */

// /* MovR - Production */

// position: absolute;
// height: 107px;
// left: 25.69%;
// right: 25.76%;
// top: calc(50% - 107px/2 - 294px);

// /* Heading/h3 */
// font-family: AntartidaRounded Essential;
// font-size: 24px;
// line-height: 37px;
// text-align: center;
// letter-spacing: 0.06em;

// /* Neutral/7 */
// background: #292F35;

const Error = styled.p({
  color: 'red',
  fontSize: 18,
  marginTop: 20,
})

export default connect(DeviceLocked)
    .with('MetroVerify')
    .map((machine) => ({
      uploadFirmWare: machine.uploadFirmWare
    }))
