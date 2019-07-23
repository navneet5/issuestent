import React from 'react'

import { StepperView } from './StepperView'

interface Props {
  step: number
}

export const StepperContainer: React.FC<Props> = ({
  step,
}) => {
  return (
   <StepperView step={step} />
  )
}
