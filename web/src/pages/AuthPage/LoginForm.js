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

const LoginForm = () => {
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
        <Typography variant="body2" className="auth-form-subtitle">
          Sign in to continue exploring Tracepath
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
        />
        <Button
          size="large"
          variant="contained"
          fullWidth={true}
          color="primary"
        >
          Log in
        </Button>
      </FormControl>
    </>
  )
}

export default LoginForm
