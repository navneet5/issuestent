import React from 'react'
import styled from '@emotion/styled'

import { Button as _Button, NavButton as _NavButton } from './Button'

import rightArrow from '../assets/arrow-right.svg'

interface ButtonProps {
  onClick(): any
}

export const ContinueButton: React.FC<ButtonProps> = ({ onClick, ...rest }) => (
  <Button onClick={onClick} {...rest}>
    CONTINUE
    <Icon src={rightArrow} />
  </Button>
)

interface NavButtonProps {
  to: string
}

export const ContinueNavButton: React.FC<NavButtonProps> = ({ to, ...rest }) => (
  <NavButton to={to} {...rest}>
    CONTINUE
    <Icon src={rightArrow} />
  </NavButton>
)

const Button = styled(_Button)({
  padding: '10px 15px',
})

const NavButton = styled(_NavButton)({
  padding: '10px 15px',
})

const Icon = styled.img({
  paddingLeft: 10,
  paddingTop: 1,
  width: 27,
})
