import { render } from '@redwoodjs/testing/web'

import SiteMetaCard from './SiteMetaCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SiteMetaCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SiteMetaCard />)
    }).not.toThrow()
  })
})
