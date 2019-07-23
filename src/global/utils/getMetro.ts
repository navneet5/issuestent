import { Metro as MetroBase } from 'eos-metro-api'
import * as U2FTransport from 'eos-metro-transport-u2f'

const transport = new U2FTransport.U2FTransport()
let Metro: MetroBase

export const getMetro = () => {
  if (Metro) {
    return Metro
  } else {
    Metro = new MetroBase([transport])
    return Metro
  }
}
