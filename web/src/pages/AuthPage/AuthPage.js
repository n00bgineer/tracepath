// IMPORTING PACKAGES/MODULES
import { useState } from 'react'

import { AccountCircle, Login } from '@mui/icons-material'
import { Box, Tabs, Typography } from '@mui/material'

import { MetaTags } from '@redwoodjs/web'

import './authPage.css'
import Tab from 'src/components/Tab/Tab'

import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

/**
 * @name a11yProps
 * @description GENERATES TAB PROPS
 * @param {*} index TAB INDEX
 * @returns {Object} TAB PROPS
 */
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const AuthPage = () => {
  const [tabValue, setTabValue] = useState(0)

  const handleChange = (event, newValue) => setTabValue(newValue)

  return (
    <>
      <MetaTags title="Auth" description="Auth page" />

      <Box className="auth-page">
        <Box className="auth-form-container">
          <Box className="brand-info-container">
            <img
              src="https://res.cloudinary.com/dgu9rv3om/image/upload/v1683873993/tracepath/assets/logo1-cropped_hcmo16.png"
              alt="Tracepath logo"
              className="logo"
            />
            <Typography variant="body1" className="brand-name">
              Tracepath
            </Typography>
          </Box>
          <Box className="auth-tab-container">
            <Tabs
              value={tabValue}
              onChange={handleChange}
              variant="fullWidth"
              sx={{
                '&	.MuiTabs-indicator': { display: 'none' },
                '&.MuiTabs-root': {
                  padding: '10px',
                  border: '1px solid #000',
                  borderRadius: '9999px',
                  borderColor: 'divider',
                },
              }}
            >
              <Tab
                label="Sign up"
                icon={<AccountCircle />}
                iconPosition="start"
                size="large"
                {...a11yProps(0)}
              />
              <Tab
                label="Sign in"
                icon={<Login />}
                iconPosition="start"
                size="large"
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
          {tabValue === 0 ? <SignupForm /> : <LoginForm />}
        </Box>
      </Box>
    </>
  )
}

export default AuthPage
