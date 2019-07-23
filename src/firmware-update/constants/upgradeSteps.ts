export const UPGRADE_STEPS = {
  INIT: 'init',
  CHECK_DEVICE_COMMUNICATION: 'check-device-communication',
  LOCKOUT_CHECK: 'lockout-check',
  LOCKED_OUT: 'lock-out',
  RESET_INSTRUCTION: 'reset-instruction',
  RESET_DEVICE_CONFIRMATION: 'reset-device-confirmation',
  FIRMWARE_CHECK: 'firmware-check',
  FIRMWARE_UPGRADE_INSTRUCTION: 'firmware-upgrade-instruction',
  CHECK_FOR_BOOTLOADER_MODE: 'check_for_bootloader_mode',
  UPGRADING_FIRMWARE: 'upgrading-firmware',
  UPGRADING_FIRMWARE_FAILURE: 'upgrading-firmware-failure',
  FIRMWARE_UPGRADE_SUCCESS: 'firmware-upgrade-success',
  CHECK_FOR_PIN: 'check-for-pin',
  VERIFY_METRO: 'verify-metro',
  BOOTLOADER_CHECK: 'bootloader-check',
  DEVICE_VERIFIED: 'device-verified',
  UPLOAD: 'upload',
  DEVICELOCKED: 'device-locked',
}
