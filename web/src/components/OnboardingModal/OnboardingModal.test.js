import { render } from '@redwoodjs/testing/web'

import OnboardingModal from './OnboardingModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OnboardingModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OnboardingModal />)
    }).not.toThrow()
  })
})
