// IMPORTING PACKAGES/MODULES// IMPORTING PACKAGES/MODULES
import { Box, Typography } from '@mui/material'

import 'src/pages/SignupPage/authPage.css'

import OnboardingForm from '../OnboardingForm/OnboardingForm'

const OnboardingModal = () => {
  return (
    <Box
      className="full-modal onboarding-modal"
      sx={{ bgcolor: 'background.default' }}
    >
      <Box className="auth-form-container">
        <Box className="brand-info-container">
          <img
            src="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1683873993/tracepath/assets/logo1-cropped_hcmo16.png"
            alt="Tracepath logo"
            className="logo"
            loading="lazy"
          />
          <Typography variant="body1" className="brand-name">
            Tracepath
          </Typography>
        </Box>
        <OnboardingForm />
      </Box>
    </Box>
  )
}

export default OnboardingModal
