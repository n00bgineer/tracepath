// IMPORTING PACKAGES/MODULES
import { Box, Link, Typography } from '@mui/material'

import { Link as RedwoodLink, routes } from '@redwoodjs/router'

import './header.css'
import { useAuth } from 'src/auth'

const Header = () => {
  // GETTING AUTH CONTEXT
  const { isAuthenticated } = useAuth()

  return (
    <Box component="header">
      {/* SECONDARY LINKS CONTAINER */}
      <Box
        component="nav"
        className="secondary-links"
        sx={(theme) => {
          return {
            '&>a': {
              color:
                theme.palette.mode === 'light'
                  ? 'common.black'
                  : 'common.white',
            },
          }
        }}
      >
        <Link
          component="a"
          href="https://twitter.com/n00bgineer/status/1654742809394692097?s=20"
          target="_blank"
        >
          Updates
        </Link>
      </Box>

      {/* BRAND INFO CONTAINER */}
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

      {/* PRIMARY LINKS CONTAINER */}
      <Box
        component="nav"
        className="primary-links"
        sx={(theme) => {
          return {
            '&>a': {
              color:
                theme.palette.mode === 'light'
                  ? 'common.black'
                  : 'common.white',
            },
          }
        }}
      >
        {isAuthenticated ? (
          <Link component={RedwoodLink} to={routes.generate()}>
            Home
          </Link>
        ) : (
          <Link component={RedwoodLink} to={routes.signup()}>
            Signup
          </Link>
        )}
      </Box>
    </Box>
  )
}

export default Header
