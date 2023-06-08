// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ScreenLoading {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ScreenLoading from './ScreenLoading'

export const generated = () => {
  return <ScreenLoading />
}

export default {
  title: 'Components/ScreenLoading',
  component: ScreenLoading,
}
