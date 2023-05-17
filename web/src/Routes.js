// IMPORTING PACKAGES/MODULES
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useRecoilState } from 'recoil'

import { Router, Route } from '@redwoodjs/router'

import { darkThemeAtom } from './contexts/atoms'
import DarkTheme from './themes/darkTheme'
import LightTheme from './themes/lightTheme'

const Routes = () => {
  // GETTING ATOMIC STATES
  const [isDarkTheme] = useRecoilState(darkThemeAtom)

  return (
    <ThemeProvider theme={isDarkTheme === true ? DarkTheme : LightTheme}>
      <CssBaseline />
      <Router>
        <Route path="/" page={LandingPage} name="landing" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/signin" page={SigninPage} name="signin" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Route notfound page={NotFoundPage} />
      </Router>
    </ThemeProvider>
  )
}

export default Routes
