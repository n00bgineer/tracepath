// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Select {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Select from './Select'

export const generated = () => {
  return <Select />
}

export default {
  title: 'Components/Select',
  component: Select,
}
