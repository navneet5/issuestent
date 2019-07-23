import React from 'react'
import styled from '@emotion/styled'
import { Link as _Link } from 'react-router-dom'

import { colors } from '../theme'
import { APP_ROUTES } from '../constants'

import backgroundImage from '../assets/bg-image.png'
import metroLogo from '../assets/logo.svg'

export const Header: React.FC<{}> = () => (
  <Container>
    <Link to={APP_ROUTES.HOME}>
      <img src={metroLogo} alt='' />
    </Link>
    <Background />
  </Container>
)

const Container = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '40vh',
  width: '100%',
  background: colors.background.secondary,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const Background = styled.div({
  opacity: 0.5,
  width: '100%',
  height: '100%',
  background: `url(${backgroundImage})`,
  backgroundSize: 'cover',
})

const Link = styled.div({
  position: 'absolute',
  top: 50,
  zIndex: 10,
}).withComponent(_Link)
