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

import Alert from 'src/components/Alert/Alert'
import Button from 'src/components/Button/Button'
import IconButton from 'src/components/IconButton/IconButton'
import Input from 'src/components/Input/Input'

// INPUT FIELD VALIDATION METHODS
/**
 * @name validateEmail
 * @description METHOD TO VALIDATE EMAIL
 * @param {*} email EMAIL STRING
 * @returns {Boolean} WHETHER EMAIL IS VALIDATED OR NOT
 */
const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return regex.test(email)
}

/**
 * @name validateEmailLength
 * @description METHOD TO VALIDATE EMAIL LENGTH
 * @param {*} email EMAIL STRING
 * @returns {Boolean} WHETHER EMAIL HAS A MAX LENGTH OR NOT
 */
const validateEmailLength = (email) => {
  const maxLength = 50
  if (email.length <= maxLength) return true
  else return false
}

/**
 * @name validatePassword
 * @description METHOD TO VALIDATE PASSWORD
 * @param {*} password PASSWORD STRING
 * @returns {Boolean} WHETHER PASSWORD IS FOLLOWING A CERTAIN PATTERN OR NOT
 */
const validatePassword = (password) => {
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%])/
  return regex.test(password)
}

/**
 * @name validatePasswordLength
 * @description METHOD TO VALIDATE PASSWORD LENGTH
 * @param {*} email PASSWORD STRING
 * @returns {Boolean} WHETHER PASSWORD HAS A MAX LENGTH OR NOT
 */
const validatePasswordLength = (email) => {
  const minLength = 8
  const maxLength = 50
  if (email.length >= minLength && email.length <= maxLength) return true
  else return false
}

const SigninForm = () => {
  // SETTING LOCAL STATE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordVisible, setPasswordVisibility] = useState(false)

  // INPUT FIELD VALIDATION STATES
  const [emailErrorText, setEmailErrorText] = useState('')
  const [submitErrorText, setSubmitErrorText] = useState('')
  const [passwordErrorText, setPasswordErrorText] = useState('')

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
  const setEmailField = (event) => {
    setEmail(event.target.value)

    if (
      !validateEmail(event.target.value.trim()) ||
      !validateEmailLength(event.target.value.trim())
    ) {
      // VALIDATING EMAIL VALUE
      if (!validateEmail(event.target.value.trim())) {
        setEmailErrorText(
          'e-mail address is not in the required format (e.g. harrypotter@hogwarts.edu)'
        )
      }
      // VALIDATING EMAIL LENGTH
      else if (!validateEmailLength(event.target.value.trim())) {
        setEmailErrorText("e-mail address can't have more than 50 characters")
      }
    } else {
      setEmailErrorText('')
    }
  }

  /**
   * @name setPasswordField
   * @description METHOD TO SET PASSWORD VALUE
   * @returns {undefined} undefined
   */
  const setPasswordField = (event) => {
    setPassword(event.target.value)

    if (
      !validatePassword(event.target.value.trim()) ||
      !validatePasswordLength(event.target.value.trim())
    ) {
      // VALIDATING PASSWORD VALUE
      if (!validatePassword(event.target.value.trim())) {
        setPasswordErrorText(
          'The password should atleast have an uppercase, a lowercase character, a digit and a special character (i.e. !, @, #, $, %)'
        )
      }
      // VALIDATING PASSWORD LENGTH
      else if (!validatePasswordLength(event.target.value.trim())) {
        setPasswordErrorText(
          'The password should have between 8 and 50 characters'
        )
      }
    } else {
      setPasswordErrorText('')
    }
  }

  /**
   * @name submitForm
   * @description METHOD TO SUBMIT FORM
   * @param {*} event EVENT OBJECT
   * @returns {undefined} undefined
   */
  const submitForm = (event) => {
    event.preventDefault()
    if (!(emailErrorText === '' || passwordErrorText === ''))
      setSubmitErrorText('Resolve the errors mentioned above')
    else setSubmitErrorText('')
  }

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
      <form className="auth-form signup-form" onSubmit={submitForm}>
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
          color={emailErrorText !== '' ? 'error' : 'primary'}
          onInput={setEmailField}
          errorText={emailErrorText}
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
          margin="medium"
          color={passwordErrorText !== '' ? 'error' : 'primary'}
          onInput={setPasswordField}
          errorText={passwordErrorText}
          label="password"
        />
        <Typography variant="body2" className="auth-link forgot-password-link">
          <Link
            component={RedwoodLink}
            to={routes.resetPassword()}
            className="auth-link"
          >
            Forgot your password?
          </Link>
        </Typography>
        <Button
          size="medium"
          variant="contained"
          fullWidth={true}
          color="primary"
        >
          Log in
        </Button>
        {submitErrorText !== '' && (
          <Alert fullWidth={true} margin="medium" severity="error">
            {submitErrorText}
          </Alert>
        )}
      </form>
      <Box className="auth-page-links-container">
        <Typography variant="body2">
          New to Tracepath?{' '}
          <Link
            component={RedwoodLink}
            to={routes.signup()}
            className="auth-link"
          >
            Sign up
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

export default SigninForm
