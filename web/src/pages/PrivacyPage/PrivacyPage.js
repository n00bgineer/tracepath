// IMPORTING PACKAGES/MODULES
import { Box, Typography } from '@mui/material'

import { MetaTags } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

import 'src/pages/ToSPage/policyPage.css'

const PrivacyPolicy = () => {
  return (
    <>
      <MetaTags title="Privacy" description="Privacy policy page" />

      <Header />
      <Box className="policy-container">
        <Typography variant="h2" className="policy-header">
          Privacy Policy
        </Typography>
        <Typography variant="body2" className="policy-last-update">
          Last Updated On: May 20th 2023
        </Typography>
      </Box>
      <Footer />
    </>
  )
}

export default PrivacyPolicy
