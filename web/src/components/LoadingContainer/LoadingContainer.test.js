import { render } from '@redwoodjs/testing/web'

import LoadingContainer from './LoadingContainer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LoadingContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoadingContainer />)
    }).not.toThrow()
  })
})
