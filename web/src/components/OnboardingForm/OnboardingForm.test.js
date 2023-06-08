import { render } from '@redwoodjs/testing/web'

import OnboardingForm from './OnboardingForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OnboardingForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OnboardingForm />)
    }).not.toThrow()
  })
})
