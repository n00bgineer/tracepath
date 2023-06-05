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
          color: 'common.black',
        }
      }}
    >
      <Box className="brand-info-container">
        <Box className="brand-logo-container">
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
            sx={{ color: 'common.black' }}
          >
            Features
          </Link>
          <Link
            component="a"
            className="footer-link"
            href={`${window.location.origin}/#pricing`}
            sx={{ color: 'common.black' }}
          >
            Pricing
          </Link>
          <Link
            component="a"
            className="footer-link"
            href={`${window.location.origin}/#faq`}
            sx={{ color: 'common.black' }}
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
            to={routes.privacy()}
            sx={{ color: 'common.black' }}
          >
            Privacy
          </Link>
          <Link
            component={RedwoodLink}
            className="footer-link"
            to={routes.tos()}
            sx={{ color: 'common.black' }}
          >
            Terms
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
