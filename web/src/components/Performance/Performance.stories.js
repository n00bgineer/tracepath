// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Performance {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Performance from './Performance'

export const generated = () => {
  return <Performance />
}

export default {
  title: 'Components/Performance',
  component: Performance,
}
