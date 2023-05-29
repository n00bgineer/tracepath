// IMPORTING PACKAGES/MODULES
import { Box, Link, Typography } from '@mui/material'

import { Link as RedwoodLink, routes } from '@redwoodjs/router'
import './footer.css'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={(theme) => {
        return {
          background: `linear-gradient(to top, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.main})`,
          backdropFilter: 'blur(10px)',
        }
      }}
    >
      <Box className="brand-info-container">
        <Box className="brand-logo-container">
          <img
            src="https://res.cloudinary.com/dgu9rv3om/image/upload/v1683873993/tracepath/assets/logo1-cropped_hcmo16.png"
            alt="Tracepath logo"
            className="logo"
          />
          <Typography variant="body1" className="brand-name">
            Tracepath
          </Typography>
        </Box>
        <Typography variant="body2" className="brand-description">
          Tracepath generates simplified performance reports for your web apps
          from multiple locations across the world
        </Typography>
        <Typography variant="body2" className="footer-copyright">
          Copyright &copy; n00bgineer 2023
        </Typography>
      </Box>
      <Box className="footer-links-container">
        <Box className="footer-links-subcontainer">
          <Typography variant="body1" className="footer-links-header">
            About
          </Typography>
          <Link
            component="a"
            className="footer-link"
            href={`${window.location.origin}/#features`}
            sx={(theme) => {
              return {
                color:
                  theme.palette.mode === 'light'
                    ? 'common.black'
                    : 'common.white',
              }
            }}
          >
            Features
          </Link>
          <Link
            component="a"
            className="footer-link"
            href={`${window.location.origin}/#pricing`}
            sx={(theme) => {
              return {
                color:
                  theme.palette.mode === 'light'
                    ? 'common.black'
                    : 'common.white',
              }
            }}
          >
            Pricing
          </Link>
          <Link
            component="a"
            className="footer-link"
            href={`${window.location.origin}/#faq`}
            sx={(theme) => {
              return {
                color:
                  theme.palette.mode === 'light'
                    ? 'common.black'
                    : 'common.white',
              }
            }}
          >
            FAQ
          </Link>
        </Box>
        <Box className="footer-links-subcontainer">
          <Typography variant="body1" className="footer-links-header">
            Policy
          </Typography>
          <Link
            component={RedwoodLink}
            className="footer-link"
            to={routes.tos()}
            sx={(theme) => {
              return {
                color:
                  theme.palette.mode === 'light'
                    ? 'common.black'
                    : 'common.white',
              }
            }}
          >
            Terms of Services
          </Link>
          <Link
            component={RedwoodLink}
            className="footer-link"
            to={routes.privacy()}
            sx={(theme) => {
              return {
                color:
                  theme.palette.mode === 'light'
                    ? 'common.black'
                    : 'common.white',
              }
            }}
          >
            Privacy Policy
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
