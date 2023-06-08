// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Button {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Button from './Button'

export const generated = () => {
  return <Button />
}

export default {
  title: 'Components/Button',
  component: Button,
}
