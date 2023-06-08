// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <HopTimeline {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import HopTimeline from './HopTimeline'

export const generated = () => {
  return <HopTimeline />
}

export default {
  title: 'Components/HopTimeline',
  component: HopTimeline,
}
