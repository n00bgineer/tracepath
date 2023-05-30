import { render } from '@redwoodjs/testing/web'

import HopTimeline from './HopTimeline'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HopTimeline', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HopTimeline />)
    }).not.toThrow()
  })
})
