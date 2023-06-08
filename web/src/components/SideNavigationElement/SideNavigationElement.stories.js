// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <SideNavigationElement {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import SideNavigationElement from './SideNavigationElement'

export const generated = () => {
  return <SideNavigationElement />
}

export default {
  title: 'Components/SideNavigationElement',
  component: SideNavigationElement,
}
