import { render } from '@redwoodjs/testing/web'

import FeaturesCard from './FeaturesCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FeaturesCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeaturesCard />)
    }).not.toThrow()
  })
})
