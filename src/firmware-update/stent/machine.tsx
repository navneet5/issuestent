import { Machine } from 'stent';
import transitions from './transitions';
import { UPGRADE_STEPS } from '../constants/upgradeSteps'

const InitialState: any = {name: UPGRADE_STEPS.INIT}

const machine: any = Machine.create(
    'MetroVerify',
    { state: InitialState, transitions }
)
