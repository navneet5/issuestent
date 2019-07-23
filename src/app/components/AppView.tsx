import React from 'react'
import { Global } from '@emotion/core'

import { AppRoutes } from './AppRoutes'
import { globalStyles } from '../styles/globalStyles'

export const AppView = () => (
  <>
    <Global styles={globalStyles} />
    <AppRoutes />
  </>
)
