import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'

import { Title, Text, NavButton, APP_ROUTES } from 'global'
import { GettingStartedView } from './GettingStartedView'

describe('GettingStartedView', () => {
  let gettingStartedView: ShallowWrapper

  beforeEach(() => {
    gettingStartedView = shallow(
      <GettingStartedView />
    )
  })

  it('Renders a title', () => {
    expect(gettingStartedView.find(Title).text()).toEqual('Welcome to your new Metro')
  })

  it('Renders the text', () => {
    expect(gettingStartedView.find(Text).text()).toEqual(
      'Begin the verification process by connecting your Metro the your computer and then clicking verify button below.'
    )
  })

  it('renders a NavButton', () => {
    expect(gettingStartedView.find(NavButton).prop('to')).toEqual(
      APP_ROUTES.DEVICE_VERIFIED
    )
  })
})
