import React from 'react'
import { VerifyDeviceView } from './VerifyDeviceView'
import { connect } from 'stent/lib/react'
import { async } from 'q';

const VerifyDeviceContainer: React.FC<any> = ({
  checkDeviceCommunication
}) => {

  const onContinue = () => {
  checkDeviceCommunication()
  }

  return (
    <VerifyDeviceView
      onContinue={onContinue}
    />
  )
}

export default connect(VerifyDeviceContainer)
    .with('MetroVerify')
    .map((machine) => ({
      checkDeviceCommunication: machine.checkDeviceCommunication,
      state: machine.state.name
    }))
