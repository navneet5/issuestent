import { UPGRADE_STEPS } from '../constants/upgradeSteps'
import {checkDeviceCommunication} from './tansitionutils'

const transitions: any = {
  [UPGRADE_STEPS.INIT]: {
    'check device communication': checkDeviceCommunication,
  },
  [UPGRADE_STEPS.LOCKED_OUT]: {
    'reset instruction': UPGRADE_STEPS.RESET_INSTRUCTION
  },
  [UPGRADE_STEPS.RESET_INSTRUCTION]: {
    'reset device confirmation': UPGRADE_STEPS.UPLOAD
  },
  [UPGRADE_STEPS.RESET_DEVICE_CONFIRMATION]: {
    'init': UPGRADE_STEPS.INIT
  },
  [UPGRADE_STEPS.FIRMWARE_UPGRADE_INSTRUCTION]: {
    'check for bootloader mode': UPGRADE_STEPS.CHECK_FOR_BOOTLOADER_MODE
  },
  // [UPGRADE_STEPS.FIRMWARE_UPGRADE]: {
  //   'firmware upgrade success': UPGRADE_STEPS.FIRMWARE_UPGRADE_SUCCESS
  // },
  [UPGRADE_STEPS.DEVICE_VERIFIED]: {
    'check for pin': UPGRADE_STEPS.CHECK_FOR_PIN
  }
}

export default transitions
