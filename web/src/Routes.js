// IMPORTING PACKAGES/MODULES
import { useEffect } from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { useRecoilState } from 'recoil'

import { Router, Route, Set, Private } from '@redwoodjs/router'

import { useAuth } from './auth'
import { darkModeAtom } from './contexts/atoms'
import NavigationLayout from './layouts/NavigationLayout/NavigationLayout'
import DarkTheme from './themes/darkTheme'
import LightTheme from './themes/lightTheme'

const Routes = () => {
  // GETTING ATOMIC STATES
  const [isDarkMode, setDarkMode] = useRecoilState(darkModeAtom)

  /**
   * @name setLocalStorage
   * @description METHOD TO DO SET LOCAL STORAGE STORAGE
   * @returns {undefined} undefined
   */
  const setLocalStorage = () => {
    // SETTING THEME STATE TO SET THEME
    if (window.localStorage.getItem('isDarkMode') === null) window.localStorage.setItem('isDarkMode', `${isDarkMode}`)
    else setDarkMode(window.localStorage.getItem('isDarkMode') === 'false' ? false : true)
  }

  useEffect(() => {
    setLocalStorage()
  }, [])

  return (
    <ThemeProvider theme={isDarkMode === true ? DarkTheme : LightTheme}>
      <CssBaseline />
      <Router useAuth={useAuth}>
        <Set wrap={NavigationLayout}>
          <Private unauthenticated="landing">
            <Route path="/generate" page={ReportNewReportPage} name="generate" />
            <Route path="/account" page={UserUserPage} name="account" />
          </Private>
          <Route path="/explore" page={ReportReportsPage} name="explore" />
          <Route path="/report/{id}" page={ReportReportPage} name="report" />
        </Set>
        <Route path="/" page={LandingPage} name="landing" prerender={true} />
        <Route path="/tos" page={ToSPage} name="tos" prerender={true} />
        <Route path="/privacy" page={PrivacyPage} name="privacy" prerender={true} />
        <Route path="/signin" page={SigninPage} name="signin" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Route notfound page={NotFoundPage} />
      </Router>
    </ThemeProvider>
  )
}

export default Routes
