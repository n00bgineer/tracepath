// IMPORTING PACKAGES/MODULES
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useRecoilState } from 'recoil'

import { Router, Route, Set, Private } from '@redwoodjs/router'

import { useAuth } from './auth'
import { darkThemeAtom } from './contexts/atoms'
import NavigationLayout from './layouts/NavigationLayout/NavigationLayout'
import DarkTheme from './themes/darkTheme'
import LightTheme from './themes/lightTheme'

const Routes = () => {
  // GETTING ATOMIC STATES
  const [isDarkTheme] = useRecoilState(darkThemeAtom)

  return (
    <ThemeProvider theme={isDarkTheme === true ? DarkTheme : LightTheme}>
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
