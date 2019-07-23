import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { colors } from '../theme'

export const Button = styled.button({
  borderRadius: 5,
  border: 'none',
  boxShadow: 'none',
  backgroundColor: colors.background.sub,
  color: colors.background.secondary,
  padding: '10px 40px',
  textDecoration: 'none',
})

export const NavButton = Button.withComponent(Link)
