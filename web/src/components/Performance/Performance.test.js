import { render } from '@redwoodjs/testing/web'

import Performance from './Performance'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Performance', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Performance />)
    }).not.toThrow()
  })
})
