// IMPORTING PACKAGES/MODULES
import { useState } from 'react'

import { AccountBalance, Face2 } from '@mui/icons-material'
import { Box, Tabs, Typography } from '@mui/material'

import Alert from 'src/components/Alert/Alert'
import Button from 'src/components/Button/Button'
import Input from 'src/components/Input/Input'
import { accountAtom } from 'src/contexts/atoms'
import './onboardingForm.css'

import Tab from '../Tab/Tab'
import TabPanel from '../TabPanel/TabPanel'

// INPUT FIELD VALIDATION METHODS
/**
 * @name validDisplayName
 * @description METHOD TO VALIDATE DISPLAY NAME
 * @param {*} displayName EMAIL STRING
 * @returns {Boolean} WHETHER EMAIL IS VALIDATED OR NOT
 */
const validDisplayName = (displayName) => {
  const regex = /^[A-Za-z\s'-]{2,}$/
  return regex.test(displayName)
}

/**
 * @name validateDisplayNameLength
 * @description METHOD TO VALIDATE EMAIL LENGTH
 * @param {*} displayName EMAIL STRING
 * @returns {Boolean} WHETHER EMAIL HAS A MAX LENGTH OR NOT
 */
const validateDisplayNameLength = (displayName) => {
  // SETTING LOCAL VARIABLES
  const minLength = 2
  const maxLength = 20

  if (displayName.length >= minLength && displayName.length <= maxLength)
    return true
  else return false
}

const OnboardingForm = () => {
  // SETTING LOCAL STATE
  const [tabValue, setTabValue] = useState(0)
  const [displayName, setDisplayName] = useState('')
  const [isSubmissionInProcess, setIsSubmissionInProcess] = useState(false)

  // INPUT FIELD VALIDATION STATES
  const [submitErrorText, setSubmitErrorText] = useState('')
  const [displayNameErrorText, setDisplayNameErrorText] = useState('')

  // GETTING ATOMIC STATES
  const [account, setAccount] = useState(accountAtom)

  // METHODS
  /**
   * @name setTab
   * @description METHOD TO SET TAB VALUE
   * @param {*} event EVENT OBJECT
   * @param {*} value VALUE
   * @returns {undefined} undefined
   */
  const setTab = (event, value) => setTabValue(value)

  // METHODS
  /**
   * @name setOnboarding
   * @description METHOD TO EXECUTE COMPLETION OF ONBOARDING PROCESS
   * @param {*} event EVENT OBJECT
   * @returns {undefined} undefined
   */
  const setOnboarding = async (event) => {
    event.preventDefault()
    setIsSubmissionInProcess(true)
    await signUp({ displayName: displayName, password: password })
      .then((userData) => {
        // STORING NEW USER DATA
        const input = {
          displayName: userData.user.displayName,
          guid: userData.user.uid,
        }
        // signupUser(input)
      })
      .catch((error) => setSubmitErrorText(error.message))
      .finally(() => setIsSubmissionInProcess(false))
  }

  /**
   * @name setDisplayNameField
   * @description METHOD TO SET EMAIL VALUE
   * @returns {undefined} undefined
   */
  const setDisplayNameField = (event) => {
    setDisplayName(event.target.value)

    if (
      !validDisplayName(event.target.value.trim()) ||
      !validateDisplayNameLength(event.target.value.trim())
    ) {
      // VALIDATING EMAIL LENGTH
      if (!validateDisplayNameLength(event.target.value.trim())) {
        setDisplayNameErrorText(
          'The name should have more than 2 characters and less than 20 characters'
        )
      }
      // VALIDATING EMAIL VALUE
      else if (!validDisplayName(event.target.value.trim())) {
        setDisplayNameErrorText(
          'The name can only contain uppercase or lowercase letter, whitespace, apostrophe, or hyphen'
        )
      }
    } else {
      setDisplayNameErrorText('')
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
    if (displayNameErrorText !== '')
      setSubmitErrorText('Resolve the errors mentioned above')
    else {
      setSubmitErrorText('')
      setOnboarding(event)
    }
  }

  return (
    <>
      <Box className="auth-form-text-container">
        <Typography variant="h2" className="auth-form-title">
          One last step
        </Typography>
        <Typography variant="body1" className="auth-form-subtitle">
          Please select account type and enter your name
        </Typography>
      </Box>

      <Tabs
        value={tabValue}
        onChange={setTab}
        variant="fullWidth"
        className="onboarding-tabs"
        TabIndicatorProps={{
          sx: { display: 'none' },
        }}
      >
        <Tab
          label="Individual"
          icon={<Face2 fontSize="medium" />}
          iconPosition="start"
          size="large"
        />
        <Tab
          label={'Organisation'}
          icon={<AccountBalance fontSize="medium" />}
          iconPosition="start"
          size="large"
        />
      </Tabs>
      <TabPanel value={0} index={tabValue} className="onboarding-tab-panel">
        <form className="auth-form onboarding-form" onSubmit={submitForm}>
          <Input
            placeholder="Enter your name"
            required={true}
            startAdornment={<Face2 />}
            fullWidth={true}
            type="text"
            value={displayName}
            margin="large"
            color={displayNameErrorText !== '' ? 'error' : 'primary'}
            onInput={setDisplayNameField}
            errorText={displayNameErrorText}
            disabled={isSubmissionInProcess}
            label="Enter your name"
          />
          <Button
            type="submit"
            size="medium"
            variant="contained"
            fullWidth={true}
            color="primary"
            margin="large"
            disabled={isSubmissionInProcess}
          >
            {isSubmissionInProcess ? 'Submitting ...' : 'Submit'}
          </Button>
          {submitErrorText !== '' && (
            <Alert fullWidth={true} margin="medium" severity="error">
              {submitErrorText}
            </Alert>
          )}
        </form>
      </TabPanel>
      <TabPanel value={1} index={tabValue} className="onboarding-tab-panel">
        <form className="auth-form onboarding-form" onSubmit={submitForm}>
          <Input
            placeholder="Enter your organisation's name"
            required={true}
            startAdornment={<AccountBalance />}
            fullWidth={true}
            type="text"
            value={displayName}
            margin="large"
            color={displayNameErrorText !== '' ? 'error' : 'primary'}
            onInput={setDisplayNameField}
            errorText={displayNameErrorText}
            disabled={isSubmissionInProcess}
            label="Enter your organisation's name"
          />
          <Button
            type="submit"
            size="medium"
            variant="contained"
            fullWidth={true}
            color="primary"
            margin="large"
            disabled={isSubmissionInProcess}
          >
            {isSubmissionInProcess ? 'Submitting ...' : 'Submit'}
          </Button>
          {submitErrorText !== '' && (
            <Alert fullWidth={true} margin="medium" severity="error">
              {submitErrorText}
            </Alert>
          )}
        </form>
      </TabPanel>
    </>
  )
}

export default OnboardingForm
