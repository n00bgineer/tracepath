import { render } from '@redwoodjs/testing/web'

import DataLoading from './DataLoading'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Loading', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DataLoading />)
    }).not.toThrow()
  })
})
