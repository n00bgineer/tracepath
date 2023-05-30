// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ReportData {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ReportData from './ReportData'

export const generated = () => {
  return <ReportData />
}

export default {
  title: 'Components/ReportData',
  component: ReportData,
}
