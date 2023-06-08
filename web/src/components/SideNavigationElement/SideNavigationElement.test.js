import { render } from '@redwoodjs/testing/web'

import SideNavigationElement from './SideNavigationElement'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SideNavigationElement', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SideNavigationElement />)
    }).not.toThrow()
  })
})
