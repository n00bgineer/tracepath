// IMPORTING PACKAGES/MODULES
import {
  Box,
  Divider,
  Link as MuiLink,
  Typography,
  styled,
} from '@mui/material'

import { routes } from '@redwoodjs/router'
import './footer.css'

// CUSTOM COMPONENTS
// CUSTOM LINK COMPONENT
const CustomLink = styled(MuiLink)(({ theme }) => ({
  '&.footer-link': {
    display: 'block',
    textDecoration: 'none',
    color:
      theme.palette.mode === 'light'
        ? theme.palette.common.black
        : theme.palette.common.white,
  },
  '&.footer-link:hover': {
    textDecoration: 'underline',
  },
}))

const Footer = () => {
  return (
    <>
      <Divider />
      <Box
        component="footer"
        sx={(theme) => {
          return {
            color:
              theme.palette.mode === 'light' ? 'common.black' : 'common.white',
            bgcolor:
              theme.palette.mode === 'light'
                ? 'background.default'
                : 'background.paper',
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
            Tracepath generates simplified performance and security reports for
            your web apps from multiple locations across the world
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
            <CustomLink
              component="a"
              className="footer-link"
              href={`${window.location.origin}/#features`}
            >
              Features
            </CustomLink>
            <CustomLink
              component="a"
              className="footer-link"
              href={`${window.location.origin}/#pricing`}
            >
              Pricing
            </CustomLink>
            <CustomLink
              component="a"
              className="footer-link"
              href={`${window.location.origin}/#faq`}
            >
              FAQ
            </CustomLink>
          </Box>
          <Box className="footer-links-subcontainer">
            <Typography variant="body1" className="footer-links-header">
              Policy
            </Typography>
            <CustomLink
              component="a"
              className="footer-link"
              href={routes.privacy()}
            >
              Privacy
            </CustomLink>
            <CustomLink
              component="a"
              className="footer-link"
              href={routes.tos()}
            >
              Terms
            </CustomLink>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Footer
