import { render } from '@redwoodjs/testing/web'

import Tab from './Tab'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Tab', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Tab />)
    }).not.toThrow()
  })
})
