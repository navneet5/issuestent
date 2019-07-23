import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { Route } from 'react-router-dom'

import { AppRoutes, ROUTES } from './AppRoutes'
import { Home, DeviceVerified } from 'onboarding'
import { APP_ROUTES } from 'global'

describe('AppRoutes', () => {
  let appRoutes: ShallowWrapper

  beforeEach(() => {
    appRoutes = shallow(<AppRoutes />)
  })

  it('Renders the correct routes', () => {
    expect(appRoutes.find(Route)).toHaveLength(ROUTES.length)
  })

  it('renders a HOME route', () => {
    expect(appRoutes.containsMatchingElement(
      <Route
        path={APP_ROUTES.HOME}
        component={Home}
        exact
      />
    )).toBe(true)
  })

  it('renders a DEVICE_VERIFIED route', () => {
    expect(appRoutes.containsMatchingElement(
      <Route
        path={APP_ROUTES.DEVICE_VERIFIED}
        component={DeviceVerified}
        exact
      />
    )).toBe(true)
  })
})
