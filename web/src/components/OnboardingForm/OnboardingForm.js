// IMPORTING PACKAGES/MODULES
import { useState } from 'react'

import { AccountBalance, AssignmentInd } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { useRecoilState } from 'recoil'

import { useMutation } from '@redwoodjs/web'

import Alert from 'src/components/Alert/Alert'
import Button from 'src/components/Button/Button'
import Input from 'src/components/Input/Input'
import { UPDATE_USER_MUTATION } from 'src/components/User/EditUserCell'
import { accountAtom, modalTypeAtom } from 'src/contexts/atoms'
import './onboardingForm.css'

import Tab from '../Tab/Tab'
import TabPanel from '../TabPanel/TabPanel'
import Tabs from '../Tabs/Tabs'

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
  const maxLength = 30

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
  const [account, setAccount] = useRecoilState(accountAtom)
  const [modalType, setModalType] = useRecoilState(modalTypeAtom)

  // EXECUTING GQL MUTATION
  // MUTATION FOR UPDATING USER
  const [updateUser] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: (res) => setAccount(res.createUser),
    onError: (error) => {
      setSubmitErrorText(error.message)
      console.error('ERROR OCCURED WHILE SIGNING IN')
      console.error(error)
    },
  })

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
   * @param {*} accountType TYPE OF ACCOUNT
   * @returns {undefined} undefined
   */
  const setOnboarding = async (event, accountType) => {
    event.preventDefault()
    setIsSubmissionInProcess(true)

    // STORING ACCOUNT INFO
    const id = account.id
    const input = {
      accountType: accountType,
      displayName: displayName,
    }
    console.log(account, input)

    // CALLING UPDATE FUNCTION
    await updateUser({ variables: { id, input } }).finally(() => {
      setIsSubmissionInProcess(false)
      setModalType('')
    })
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
      if (!validateDisplayNameLength(event.target.value.trim()))
        setDisplayNameErrorText(
          'The name should have more than 2 characters and less than 30 characters'
        )
      // VALIDATING EMAIL VALUE
      else if (!validDisplayName(event.target.value.trim()))
        setDisplayNameErrorText(
          'The name can only contain uppercase or lowercase letter, whitespace, apostrophe, or hyphen'
        )
    } else {
      setDisplayNameErrorText('')
    }
  }

  /**
   * @name OnSubmitIndv
   * @description METHOD TO SUBMIT FORM FOR UPDATING INDIVIDUAL DATA
   * @param {*} event EVENT OBJECT
   * @returns {undefined} undefined
   */
  const OnSubmitIndv = (event) => {
    event.preventDefault()
    if (displayNameErrorText !== '')
      setSubmitErrorText('Resolve the errors mentioned above')
    else {
      setSubmitErrorText('')
      setOnboarding(event, 'INDIVIDUAL')
    }
  }

  /**
   * @name OnSubmitOrg
   * @description METHOD TO SUBMIT FORM FOR UPDATING ORGANISATION DATA
   * @param {*} event EVENT OBJECT
   * @returns {undefined} undefined
   */
  const OnSubmitOrg = (event) => {
    event.preventDefault()
    if (displayNameErrorText !== '')
      setSubmitErrorText('Resolve the errors mentioned above')
    else {
      setSubmitErrorText('')
      setOnboarding(event, 'ORGANIZATION')
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
          icon={<AssignmentInd fontSize="medium" />}
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
        <form className="auth-form onboarding-form" onSubmit={OnSubmitIndv}>
          <Input
            placeholder="Enter your name"
            required={true}
            startAdornment={<AssignmentInd />}
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
        <form className="auth-form onboarding-form" onSubmit={OnSubmitOrg}>
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
