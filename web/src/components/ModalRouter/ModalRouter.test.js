import { render } from '@redwoodjs/testing/web'

import ModalRouter from './ModalRouter'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ModalRouter', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ModalRouter />)
    }).not.toThrow()
  })
})
