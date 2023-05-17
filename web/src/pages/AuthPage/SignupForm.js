// IMPORTING PACKAGES/MODULES
import { useState } from 'react'

import {
  Email,
  Google,
  Lock,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material'
import { Box, FormControl, Typography } from '@mui/material'

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
        <Typography variant="body1" className="auth-form-subtitle">
          Create an account
        </Typography>
      </Box>
      <FormControl className="auth-form signup-form">
        <Button
          size="large"
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
          label="email"
        />
        <Input
          placeholder="Password"
          required={true}
          startAdornment={<Lock />}
          value={password}
          endAdornment={
            <IconButton>
              {isPasswordVisible ? (
                <VisibilityOff onClick={setTogglePasswordVisibility} />
              ) : (
                <Visibility onClick={setTogglePasswordVisibility} />
              )}
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
          size="large"
          variant="contained"
          fullWidth={true}
          color="primary"
        >
          Sign up
        </Button>
      </FormControl>
    </>
  )
}

export default SignupForm
