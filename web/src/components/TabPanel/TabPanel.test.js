import { render } from '@redwoodjs/testing/web'

import TabPanel from './TabPanel'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TabPanel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TabPanel />)
    }).not.toThrow()
  })
})
