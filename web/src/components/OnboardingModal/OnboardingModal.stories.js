// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <OnboardingModal {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import OnboardingModal from './OnboardingModal'

export const generated = () => {
  return <OnboardingModal />
}

export default {
  title: 'Components/OnboardingModal',
  component: OnboardingModal,
}
