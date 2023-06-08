// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <OnboardingForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import OnboardingForm from './OnboardingForm'

export const generated = () => {
  return <OnboardingForm />
}

export default {
  title: 'Components/OnboardingForm',
  component: OnboardingForm,
}
