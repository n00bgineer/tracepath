// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <BottomNavigation {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import BottomNavigation from './BottomNavigation'

export const generated = () => {
  return <BottomNavigation />
}

export default {
  title: 'Components/BottomNavigation',
  component: BottomNavigation,
}
