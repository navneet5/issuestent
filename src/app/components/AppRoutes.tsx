import React from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'

import { APP_ROUTES } from 'global'
import { FirmwareUpdate } from 'firmware-update'
// import { AccountRedemption } from 'account-redemption'

export interface RouteProps {
  path: string
  component(routeProps: RouteComponentProps): JSX.Element
  exact?: boolean
}

export const ROUTES: any[] = [
  {
    path: APP_ROUTES.HOME,
    component: FirmwareUpdate,
    exact: true,
  },
  {
    path: APP_ROUTES.HOMEPARAM,
    component: FirmwareUpdate,
    exact: true,
  },
  {
    path: APP_ROUTES.VERIFY_DEVICE,
    component: FirmwareUpdate,
    exact: true,
  }
  // },
  // {
  //   path: APP_ROUTES.ACCOUNT_REDEMPTION,
  //   component: AccountRedemption,
  //   exact: true,
  // },
]

export const AppRoutes = () => (
  <Switch>
    {ROUTES.map((routeProps: RouteProps) => <Route key={routeProps.path} {...routeProps} />)}
  </Switch>
)
