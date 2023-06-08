import { render } from '@redwoodjs/testing/web'

import SplashModal from './SplashModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SplashModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SplashModal />)
    }).not.toThrow()
  })
})
