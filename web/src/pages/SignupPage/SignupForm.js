// IMPORTING PACKAGES/MODULES
import { useEffect, useState } from 'react'

import {
  Email,
  Google,
  Lock,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material'
import { Box, Link, Typography } from '@mui/material'
import { GoogleAuthProvider } from 'firebase/auth'

import { Link as RedwoodLink, routes } from '@redwoodjs/router'
import { navigate } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import Alert from 'src/components/Alert/Alert'
import Button from 'src/components/Button/Button'
import IconButton from 'src/components/IconButton/IconButton'
import Input from 'src/components/Input/Input'
import { useAppContext } from 'src/contexts/context'

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

const SignupForm = () => {
  // SETTING LOCAL STATE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAuthInProcess, setIsAuthInProcess] = useState(false)
  const [isPasswordVisible, setPasswordVisibility] = useState(false)

  // INPUT FIELD VALIDATION STATES
  const [emailErrorText, setEmailErrorText] = useState('')
  const [submitErrorText, setSubmitErrorText] = useState('')
  const [passwordErrorText, setPasswordErrorText] = useState('')

  // GETTING AUTH CONTEXT
  const { signUp, loading, isAuthenticated } = useAuth()

  // GETTING CONTEXT VALUES
  const { signupUser, signinGoogleUser } = useAppContext()

  // SETTING AUTHENTICATION PROVIDER
  const provider = new GoogleAuthProvider()
  provider.addScope('https://www.googleapis.com/auth/userinfo.email')
  provider.addScope('https://www.googleapis.com/auth/userinfo.profile')

  // METHODS
  /**
   * @name setGoogleLogin
   * @description METHOD TO EXECUTE LOGIN USING GOOGLE
   * @param {*} event EVENT OBJECT
   * @returns {undefined} undefined
   */
  const setGoogleLogin = async (event) => {
    event.preventDefault()
    setIsAuthInProcess(true)
    await signUp(provider)
      .then((userData) => {
        // STORING NEW USER DATA
        const input = {
          email: userData.user.email,
          guid: userData.user.uid,
        }
        signinGoogleUser(input)
      })
      .catch((error) => {
        setSubmitErrorText(error.message)
      })
      .finally(() => {
        setIsAuthInProcess(false)
      })
  }

  /**
   * @name setSignup
   * @description METHOD TO EXECUTE MAIL SIGNUP
   * @param {*} event EVENT OBJECT
   * @returns {undefined} undefined
   */
  const setSignup = async (event) => {
    event.preventDefault()
    setIsAuthInProcess(true)
    await signUp({ email: email, password: password })
      .then((userData) => {
        // STORING NEW USER DATA
        const input = {
          email: userData.user.email,
          guid: userData.user.uid,
        }
        signupUser(input)
      })
      .catch((error) => {
        setSubmitErrorText(error.message)
      })
      .finally(() => {
        setIsAuthInProcess(false)
      })
  }

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
    if (emailErrorText !== '' || passwordErrorText !== '')
      setSubmitErrorText('Resolve the errors mentioned above')
    else {
      setSubmitErrorText('')
      setSignup(event)
    }
  }

  // SETTING SIDE EFFECTS
  useEffect(() => {
    if (isAuthenticated) navigate(routes.generate())
  }, [isAuthenticated])

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
      <form className="auth-form signup-form" onSubmit={submitForm}>
        <Button
          size="medium"
          variant="outlined"
          fullWidth={true}
          startIcon={<Google />}
          margin="medium"
          color="primary"
          disabled={loading || isAuthInProcess}
          onClick={setGoogleLogin}
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
          disabled={loading || isAuthInProcess}
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
          color={passwordErrorText !== '' ? 'error' : 'primary'}
          onInput={setPasswordField}
          errorText={passwordErrorText}
          disabled={loading || isAuthInProcess}
          label="password"
        />
        <Button
          type="submit"
          size="medium"
          variant="contained"
          fullWidth={true}
          color="primary"
          margin="large"
          disabled={loading || isAuthInProcess}
        >
          {isAuthInProcess ? 'Signing in ...' : 'Sign up'}
        </Button>
        {submitErrorText !== '' && (
          <Alert fullWidth={true} margin="medium" severity="error">
            {submitErrorText}
          </Alert>
        )}
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
