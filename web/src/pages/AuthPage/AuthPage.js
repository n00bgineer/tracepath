import { useState } from 'react'

import {
  AccountCircle,
  Email,
  Google,
  Lock,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material'
import { Box, FormControl } from '@mui/material'

import { MetaTags } from '@redwoodjs/web'

import Button from 'src/components/Button/Button'
import IconButton from 'src/components/IconButton/IconButton'
import Input from 'src/components/Input/Input'

const AuthPage = () => {
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

  return (
    <>
      <MetaTags title="Auth" description="Auth page" />

      <Box>
        <FormControl>
          <Button
            size="large"
            variant="outlined"
            fullWidth={true}
            startIcon={<Google />}
            margin="large"
            color="secondary"
          >
            Continue with Google
          </Button>
          <Input
            placeholder="Email"
            required={true}
            startAdornment={<Email />}
            fullWidth={true}
            type="email"
            margin="large"
            color="secondary"
          />
          <Input
            placeholder="Password"
            required={true}
            startAdornment={<Lock />}
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
            color="secondary"
          />
          <Button
            size="large"
            variant="contained"
            fullWidth={true}
            startAdornment={<AccountCircle />}
            color="secondary"
          >
            Signup
          </Button>
        </FormControl>
      </Box>
    </>
  )
}

export default AuthPage
