import { render } from '@redwoodjs/testing/web'

import ToSPage from './ToSPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ToSPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ToSPage />)
    }).not.toThrow()
  })
})
