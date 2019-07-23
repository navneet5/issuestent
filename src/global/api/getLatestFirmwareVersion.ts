import { apiConfig } from 'settings'

export const getLatestFirmwareVersion = async () => {
  try {
    const result = await fetch(`${apiConfig.endpoint}/v1/verify_firmware`, {
      method: 'POST',
    })
    return result.json()
  } catch (error) {
    console.error(error)
  }
}