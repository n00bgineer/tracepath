// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Header {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Header from './Header'

export const generated = () => {
  return <Header />
}

export default {
  title: 'Components/Header',
  component: Header,
}
