// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <SiteMetaCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import SiteMetaCard from './SiteMetaCard'

export const generated = () => {
  return <SiteMetaCard />
}

export default {
  title: 'Components/SiteMetaCard',
  component: SiteMetaCard,
}
