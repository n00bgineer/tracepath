// IMPORTING PACKAGES/MODULES
import { useState } from 'react'

import {
  Email,
  Google,
  Lock,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material'
import { Box, Link, Typography } from '@mui/material'

import { Link as RedwoodLink, routes } from '@redwoodjs/router'

import Button from 'src/components/Button/Button'
import IconButton from 'src/components/IconButton/IconButton'
import Input from 'src/components/Input/Input'

const SignupForm = () => {
  // SETTING LOCAL STATE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordVisible, setPasswordVisibility] = useState(false)

  // METHODS
  /**
   * @name setTogglePasswordVisibility
   * @description METHOD TO TOGGLE PASSWORD VISIBILITY
   * @returns {undefined} undefined
   */
  const setTogglePasswordVisibility = () =>
    setPasswordVisibility(!isPasswordVisible)

  /**
   * @name setEmailField
   * @description METHOD TO SET EMAIL VALUE
   * @returns {undefined} undefined
   */
  const setEmailField = (event) => setEmail(event.target.value)

  /**
   * @name setPasswordField
   * @description METHOD TO SET PASSWORD VALUE
   * @returns {undefined} undefined
   */
  const setPasswordField = (event) => setPassword(event.target.value)

  return (
    <>
      <Box className="auth-form-text-container">
        <Typography variant="h2" className="auth-form-title">
          Create an account
        </Typography>
        <Typography variant="body1" className="auth-form-subtitle">
          Sign up to Tracepath for effortless application monitoring, actionable
          insights, and improved performance optimization
        </Typography>
      </Box>
      <form className="auth-form signup-form">
        <Button
          size="medium"
          variant="outlined"
          fullWidth={true}
          startIcon={<Google />}
          margin="medium"
          color="primary"
        >
          Continue with Google
        </Button>
        <Typography className="auth-separator">or</Typography>
        <Input
          placeholder="Email"
          required={true}
          startAdornment={<Email />}
          fullWidth={true}
          type="email"
          value={email}
          margin="large"
          color="primary"
          onInput={setEmailField}
          label="email"
        />
        <Input
          placeholder="Password"
          required={true}
          startAdornment={<Lock />}
          value={password}
          endAdornment={
            <IconButton onClick={setTogglePasswordVisibility}>
              {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          }
          fullWidth={true}
          type={isPasswordVisible ? 'text' : 'password'}
          margin="large"
          color="primary"
          onInput={setPasswordField}
          label="password"
        />
        <Button
          size="medium"
          variant="contained"
          fullWidth={true}
          color="primary"
        >
          Sign up
        </Button>
      </form>
      <Box className="auth-page-tac-container">
        <Typography variant="body2" color="default">
          By signing up or logging in, you agree to our{' '}
          <Link component={RedwoodLink} to={routes.tos()} className="auth-link">
            Terms of use
          </Link>{' '}
          and{' '}
          <Link
            component={RedwoodLink}
            to={routes.privacy()}
            className="auth-link"
          >
            Privacy policy
          </Link>{' '}
        </Typography>
      </Box>
      <Box className="auth-page-links-container">
        <Typography variant="body2">
          Have an account?{' '}
          <Link
            component={RedwoodLink}
            to={routes.signin()}
            className="auth-link"
          >
            Sign in
          </Link>
        </Typography>
        <Typography variant="body2">
          <Link
            component={RedwoodLink}
            to={routes.landing()}
            className="auth-link"
          >
            Back to Home
          </Link>
        </Typography>
      </Box>
    </>
  )
}

export default SignupForm
