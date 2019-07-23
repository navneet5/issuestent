import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Title as _Title, LinearProgress, getLatestFirmwareVersion, getMetro } from 'global'
import { firmware } from 'settings'
import { connect } from 'stent/lib/react'

const UploadFirmware: React.FC<any> = (props) => {
  const [progress, setProgress] = useState(0)

  const startUpload = async () => {
    try {
      const latestVersion = await getLatestFirmwareVersion()
      const firmwareURL = `${firmware.downloadEndpoint}/${latestVersion.version}.json`
      await getMetro().handleFirmware('', firmwareURL, handleUpload)
    } catch (error) {
      console.error(error)
    }
  }

  const handleUpload = (currentProgress: number) => {
    setProgress(currentProgress)

    if (currentProgress === 100) {
      props.verified()
    }
  }

  useEffect(() => {
    startUpload()
  }, [])

  return (
    <>
      <Title>
        Upgrading device...
      </Title>
      <LinearProgress value={progress} />
    </>
  )
}

const Title = styled(_Title)({
  marginBottom: 30,
})

export default connect(UploadFirmware)
    .with('MetroVerify')
    .map((machine) => ({
      verified: machine.verified,
    }))
