import { render } from '@redwoodjs/testing/web'

import BottomNavigation from './BottomNavigation'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BottomNavigation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BottomNavigation />)
    }).not.toThrow()
  })
})
