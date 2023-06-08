// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <FaqCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import FaqCard from './FaqCard'

export const generated = () => {
  return <FaqCard />
}

export default {
  title: 'Components/FaqCard',
  component: FaqCard,
}
