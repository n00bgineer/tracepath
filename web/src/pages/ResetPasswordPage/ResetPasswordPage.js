// IMPORTING PACKAGES/MODULES
import { Box, Typography } from '@mui/material'

import { MetaTags } from '@redwoodjs/web'

import '../SignupPage/authPage.css'

import ResetPasswordForm from './ResetPasswordForm'

const ResetPasswordPage = () => {
  return (
    <>
      <MetaTags title="Reset Password" description="Reset Password page" />

      <Box className="auth-page">
        <Box className="auth-form-container">
          <Box className="brand-info-container">
            <img
              src="https://res.cloudinary.com/dgu9rv3om/image/upload/v1683873993/tracepath/assets/logo1-cropped_hcmo16.png"
              alt="Tracepath logo"
              className="logo"
              loading="lazy"
            />
            <Typography variant="body1" className="brand-name">
              Tracepath
            </Typography>
          </Box>
          <ResetPasswordForm />
        </Box>
      </Box>
    </>
  )
}

export default ResetPasswordPage
