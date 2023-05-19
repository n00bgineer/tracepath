// IMPORTING PACKAGES/MODULES
import { useState } from 'react'

import {
  Email,
  Google,
  Lock,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material'
import { Box, Typography, Link } from '@mui/material'

import { Link as RedwoodLink, routes } from '@redwoodjs/router'

import Button from 'src/components/Button/Button'
import IconButton from 'src/components/IconButton/IconButton'
import Input from 'src/components/Input/Input'

const SigninForm = () => {
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
          Welcome back
        </Typography>
        <Typography variant="body1" className="auth-form-subtitle">
          Log in to Tracepath to generate reports, explore performance metrics,
          and take control of your application&rsquo;s success
        </Typography>
      </Box>
      <form className="auth-form signup-form">
        <Button
          size="medium"
          variant="outlined"
          fullWidth={true}
          startIcon={<Google />}
          margin="large"
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
        />
        <Button
          size="medium"
          variant="contained"
          fullWidth={true}
          color="primary"
        >
          Log in
        </Button>
      </form>
      <Box className="auth-page-links-container">
        <Typography variant="body1">
          New to Tracepath?{' '}
          <Link
            component={RedwoodLink}
            to={routes.signup()}
            className="auth-link"
          >
            Sign up
          </Link>
        </Typography>
        <Typography variant="body1">
          <Link
            component={RedwoodLink}
            to={routes.resetPassword()}
            className="auth-link"
          >
            Forgot password?
          </Link>
        </Typography>
        <Typography variant="body1">
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

export default SigninForm
