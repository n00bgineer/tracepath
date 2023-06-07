// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <SplashModal {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import SplashModal from './SplashModal'

export const generated = () => {
  return <SplashModal />
}

export default {
  title: 'Components/SplashModal',
  component: SplashModal,
}
