import { render } from '@redwoodjs/testing/web'

import ReportData from './ReportData'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ReportData', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReportData />)
    }).not.toThrow()
  })
})
