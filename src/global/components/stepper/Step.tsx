import React from 'react'
import styled from '@emotion/styled'

import checkmarkIcon from '../../assets/checkmark.svg'

interface StepProps {
  label: string
  order: number
  checked?: boolean
}

export const Step: React.FC<StepProps> = ({
  label,
  order,
  checked = false,
}) => (
  <View>
    {checked ? <img src={checkmarkIcon} alt='' /> : <Circle>{order}</Circle>}
    <Text>{label}</Text>
  </View>
)

const View = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 100,
  zIndex: 10,
})

const Text = styled.p({
  fontSize: 12,
  color: '#fff',
})

const Circle = styled.div({
  background: '#043D4A',
  borderRadius: '50%',
  height: 24,
  width: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
})
