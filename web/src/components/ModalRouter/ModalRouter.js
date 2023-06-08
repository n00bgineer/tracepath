// IMPORTING PACKAGES/MODULES
import { useRecoilState } from 'recoil'

import { modalTypeAtom } from 'src/contexts/atoms'

import OnboardingModal from '../OnboardingModal/OnboardingModal'
import SplashModal from '../SplashModal/SplashModal'

const ModalRouter = () => {
  // GETTING ATOMIC STATES
  const [modalType] = useRecoilState(modalTypeAtom)

  if (modalType === 'splash') return <SplashModal />
  else if (modalType === 'onboarding') return <OnboardingModal />
  else return <></>
}

export default ModalRouter
