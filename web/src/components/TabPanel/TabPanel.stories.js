// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <TabPanel {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import TabPanel from './TabPanel'

export const generated = () => {
  return <TabPanel />
}

export default {
  title: 'Components/TabPanel',
  component: TabPanel,
}
