import { render } from '@redwoodjs/testing/web'

import SideNavigation from './SideNavigation'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SideNavigation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SideNavigation />)
    }).not.toThrow()
  })
})
