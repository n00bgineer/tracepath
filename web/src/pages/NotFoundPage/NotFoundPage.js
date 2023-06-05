// IMPORTING PACKAGES/MODULES
import { Box, Card, Typography } from '@mui/material'

import './notFoundPage.css'
import { Link as RedwoodLink, routes } from '@redwoodjs/router'

import Button from 'src/components/Button/Button'

export default () => {
  return (
    <Box className="not-found-page">
      <Card className="not-found-card">
        <Box className="brand-info-container">
          <img
            src="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1683873993/tracepath/assets/logo1-cropped_hcmo16.png"
            alt="Tracepath logo"
            className="logo"
            loading="lazy"
          />
          <Typography variant="body1" className="brand-name">
            Tracepath
          </Typography>
        </Box>
        <Typography variant="h5" className="page-title">
          Page Not Found
        </Typography>
        <Typography className="page-subtitle">
          Oops! The page you&rsquo;re looking for could not be found
        </Typography>
        <Button
          size="medium"
          variant="contained"
          fullWidth={true}
          component={RedwoodLink}
          to={routes.landing()}
        >
          Go back
        </Button>
      </Card>
    </Box>
  )
}
