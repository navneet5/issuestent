import { UPGRADE_STEPS } from '../constants/upgradeSteps'
import { getMetro, getLatestFirmwareVersion } from '../../global'
import { call } from 'stent/lib/helpers'

const checkDeviceCommunication = function*(state) {
    const metro = getMetro()

    const retriesResp = yield call(metro.get_retries)
  
//    const test = retriesResp.then(res => res.json())
//    const tst = retriesResp.then((res) => {
//        if (res.remainingTries <= 0) {
//             console.log(res)
//            return {name: UPGRADE_STEPS.LOCKED_OUT}
//         } 
//        })
 
}

const stateChange = (stateName) => {
  return { name: stateName}
}

export {checkDeviceCommunication}
