// IMPORTING PACKAGES/MODULES
import { useEffect } from 'react'

import { useApolloClient } from '@apollo/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useRecoilState } from 'recoil'

import { Router, Route, Set, Private } from '@redwoodjs/router'

import { QUERY as USER_ACCOUNT_QUERY } from 'src/components/User/UserCell/UserCell'

import { firebaseClient, useAuth } from './auth'
import ModalRouter from './components/ModalRouter/ModalRouter'
import { accountAtom, darkModeAtom, modalTypeAtom } from './contexts/atoms'
import NavigationLayout from './layouts/NavigationLayout/NavigationLayout'
import DarkTheme from './themes/darkTheme'
import LightTheme from './themes/lightTheme'

const Routes = () => {
  // GETTING ATOMIC STATES
  const [account, setAccount] = useRecoilState(accountAtom)
  const [isDarkMode, setDarkMode] = useRecoilState(darkModeAtom)
  const [modalType, setModalType] = useRecoilState(modalTypeAtom)

  // GETTING AUTH CONTEXT
  const { isAuthenticated } = useAuth()

  // INITIALISING APOLLO CLIENT
  const client = useApolloClient()

  // USING AUTH STATE CHANGE FUNCTION TO FETCH USER PROFILE DATA
  const { firebaseApp, firebaseAuth } = firebaseClient
  const auth = firebaseAuth.getAuth(firebaseApp)

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

  /**
   * @name setAccountLoad
   * @description METHOD TO LOAD ACCOUNT DETAILS
   * @param {*} guid UNIQUE ID
   * @returns {undefined} undefined
   */
  const setAccountLoad = async (guid) => {
    setModalType('splash')
    await client
      .query({
        query: USER_ACCOUNT_QUERY,
        variables: {
          id: guid,
        },
      })
      .then((res) => setAccount(res.data.user))
      .catch((error) => console.error(error.message))
      .finally(() => {
        setModalType('')
      })
  }

  useEffect(() => {
    setLocalStorage()
  }, [])

  // HANDLING SIDE EFFECTS
  useEffect(() => {
    if (isAuthenticated && !account) {
      firebaseAuth.onAuthStateChanged(auth, async (user) => {
        if (user !== null) setAccountLoad(user.uid)
      })
    }
  }, [isAuthenticated, account])

  return (
    <ThemeProvider theme={isDarkMode === true ? DarkTheme : LightTheme}>
      <CssBaseline />
      <ModalRouter />
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
