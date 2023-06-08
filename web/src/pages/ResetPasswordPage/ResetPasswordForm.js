// IMPORTING PACKAGES/MODULES
import { useState } from 'react'

import { Email } from '@mui/icons-material'
import { Box, Link, Typography } from '@mui/material'

import { Link as RedwoodLink, routes } from '@redwoodjs/router'

import Alert from 'src/components/Alert/Alert'
import Button from 'src/components/Button/Button'
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

const ResetPasswordForm = () => {
  // SETTING LOCAL STATE
  const [email, setEmail] = useState('')

  // INPUT FIELD VALIDATION STATES
  const [emailErrorText, setEmailErrorText] = useState('')
  const [submitErrorText, setSubmitErrorText] = useState('')

  // METHODS
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
          'The e-mail address is not in the required format (e.g. harrypotter@hogwarts.edu)'
        )
      }
      // VALIDATING EMAIL LENGTH
      else if (!validateEmailLength(event.target.value.trim())) {
        setEmailErrorText(
          "The e-mail address can't have more than 50 characters"
        )
      }
    } else {
      setEmailErrorText('')
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
    if (!(emailErrorText === ''))
      setSubmitErrorText('Resolve the errors mentioned above')
    else setSubmitErrorText('')
  }

  return (
    <>
      <Box className="auth-form-text-container">
        <Typography variant="h2" className="auth-form-title">
          Reset password
        </Typography>
        <Typography variant="body1" className="auth-form-subtitle">
          Submit your e-mail and we will send you the instructions to reset your
          password
        </Typography>
      </Box>
      <form className="auth-form signup-form" onSubmit={submitForm}>
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
        <Button
          type="submit"
          size="medium"
          variant="contained"
          fullWidth={true}
          color="primary"
          margin="medium"
        >
          Sign up
        </Button>
        {submitErrorText !== '' && (
          <Alert fullWidth={true} margin="medium" severity="error">
            {submitErrorText}
          </Alert>
        )}
      </form>
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

export default ResetPasswordForm
