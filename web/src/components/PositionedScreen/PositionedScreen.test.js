import { render } from '@redwoodjs/testing/web'

import PositionedScreen from './PositionedScreen'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PositionedScreen', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PositionedScreen />)
    }).not.toThrow()
  })
})
