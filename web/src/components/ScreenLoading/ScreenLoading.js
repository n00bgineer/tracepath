// IMPORTING PACKAGES/MODULES
import { ErrorOutline } from '@mui/icons-material'
import { Box, Typography, styled } from '@mui/material'

import { Link as RedwoodLink } from '@redwoodjs/router'

import Button from '../Button/Button'

import './screenLoading.css'

// CUSTOM COMPONENTS
// CUSTOM BOX COMPONENT
const CustomBox = styled(Box)(() => ({
  '&.screen-loading-container': {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '& .screen-loading-subcontainer': {
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  '& .screen-loading-subcontainer .logo': {
    height: '100px',
    marginBottom: '15px',
  },
  '& .screen-loading-subcontainer .page-title': {
    fontWeight: '900',
  },
  '& .screen-loading-subcontainer .page-subtitle': {
    marginBottom: '10px',
    textAlign: 'center',
  },
}))

const ScreenLoading = ({
  imgUrl,
  title,
  subtitle,
  errorLink,
  errorText,
  btnLink,
  btnText,
  ...props
}) => {
  return (
    <CustomBox
      className={`${
        props.className ? props.className : ''
      } screen-loading-container`}
    >
      <Box className="screen-loading-subcontainer">
        {imgUrl && (
          <img src={imgUrl} alt={title} className="logo" loading="lazy" />
        )}
        {title && (
          <Typography variant="h5" className="page-title">
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="body2" className="page-subtitle">
            {subtitle}
          </Typography>
        )}
        {errorLink && errorText && (
          <Button
            component={RedwoodLink}
            to={errorLink}
            color="error"
            size="small"
            variant="contained"
            startIcon={<ErrorOutline />}
          >
            {errorText}
          </Button>
        )}
        {btnLink && btnText && (
          <Button
            component={RedwoodLink}
            to={btnLink}
            color="primary"
            size="small"
            variant="contained"
          >
            {btnText}
          </Button>
        )}
      </Box>
    </CustomBox>
  )
}

export default ScreenLoading
