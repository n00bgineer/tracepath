import { render } from '@redwoodjs/testing/web'

import FaqCard from './FaqCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FaqCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FaqCard />)
    }).not.toThrow()
  })
})
