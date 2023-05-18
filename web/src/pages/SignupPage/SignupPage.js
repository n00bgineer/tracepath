// IMPORTING PACKAGES/MODULES
import { Box, Typography } from '@mui/material'

import { MetaTags } from '@redwoodjs/web'

import './authPage.css'
import SignupForm from './SignupForm'

const SignupPage = () => {
  return (
    <>
      <MetaTags title="Signup" description="Signup page" />

      <Box className="auth-page">
        <Box className="auth-form-container">
          <Box className="brand-info-container">
            <img
              src="https://res.cloudinary.com/dgu9rv3om/image/upload/v1683873993/tracepath/assets/logo1-cropped_hcmo16.png"
              alt="Tracepath logo"
              className="logo"
            />
            <Typography variant="body1" className="brand-name">
              Tracepath
            </Typography>
          </Box>
          <SignupForm />
        </Box>
      </Box>
    </>
  )
}

export default SignupPage
