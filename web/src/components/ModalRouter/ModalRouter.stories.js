// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ModalRouter {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ModalRouter from './ModalRouter'

export const generated = () => {
  return <ModalRouter />
}

export default {
  title: 'Components/ModalRouter',
  component: ModalRouter,
}
