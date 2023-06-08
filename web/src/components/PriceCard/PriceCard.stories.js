// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <PriceCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import PriceCard from './PriceCard'

export const generated = () => {
  return <PriceCard />
}

export default {
  title: 'Components/PriceCard',
  component: PriceCard,
}
