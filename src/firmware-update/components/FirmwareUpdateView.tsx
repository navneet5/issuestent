import React from 'react'

import { UPGRADE_STEPS } from '../constants/upgradeSteps'
import VerifyDeviceContainer from './VerifyDeviceContainer'
import { DeviceVerified } from './DeviceVerified'
import CheckForBootloaderMode from './CheckForBootloaderMode'
import UploadFirmware from './UploadFirmware'
import DeviceLocked from './DeviceLocked'
import { connect } from 'stent/lib/react'

interface Props {
  state: string
}

const FirmwareUpdateView: React.FC<Props> = ({state}) => {
  const renderMap = {
    [UPGRADE_STEPS.INIT]: <VerifyDeviceContainer />,
    [UPGRADE_STEPS.DEVICE_VERIFIED]: <DeviceVerified />,
    [UPGRADE_STEPS.FIRMWARE_CHECK]:  <CheckForBootloaderMode />,
    [UPGRADE_STEPS.UPLOAD]: <UploadFirmware />,
    [UPGRADE_STEPS.DEVICELOCKED]: <DeviceLocked/>
  }

  return (
    <>
      {renderMap[state]}
    </>
  )
}

export default connect(FirmwareUpdateView)
    .with('MetroVerify')
    .map((machine) => ({
      state: machine.state.name
    }))
