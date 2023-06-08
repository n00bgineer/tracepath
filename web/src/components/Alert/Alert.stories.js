// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Alert {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Alert from './Alert'

export const generated = () => {
  return <Alert />
}

export default {
  title: 'Components/Alert',
  component: Alert,
}
