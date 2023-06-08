import { render } from '@redwoodjs/testing/web'

import PriceCard from './PriceCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PriceCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PriceCard />)
    }).not.toThrow()
  })
})
