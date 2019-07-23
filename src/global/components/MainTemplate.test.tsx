import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { MainTemplate } from './MainTemplate'

describe('MainTemplate', () => {
  let mainTemplate: ShallowWrapper
  const TestChild = () => <div>Child!</div>

  beforeEach(() => {
    mainTemplate = shallow(
      <MainTemplate>
        <TestChild />
      </MainTemplate>
    )
  })

  it('Renders children', () => {
    const child = mainTemplate.find(TestChild)
    expect(child).toHaveLength(1)
  })
})
