import React from 'react'
import styled from '@emotion/styled'

import { STEPS, SingleStep } from '../../constants/steps'
import { Step } from './Step'

interface Props {
  step: number
}

export const StepperView: React.FC<Props> = ({
  step,
}) => (
  <View>
    {STEPS.map((singleStep: SingleStep) => (
      <Step
        key={singleStep.label}
        checked={step >= singleStep.order}
        {...singleStep}
      />
    ))}
  </View>
)

const View = styled.div({
  display: 'flex',
  zIndex: 10,
  marginBottom: 15,
})
