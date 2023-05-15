// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <IconButton {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import IconButton from './IconButton'

export const generated = () => {
  return <IconButton />
}

export default {
  title: 'Components/IconButton',
  component: IconButton,
}
