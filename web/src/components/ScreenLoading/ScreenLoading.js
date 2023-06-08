// IMPORTING PACKAGES/MODULES
import { ErrorOutline } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

import { Link as RedwoodLink } from '@redwoodjs/router'

import Button from '../Button/Button'

import './screenLoading.css'

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
    <Box
      className={
        props.className
          ? props.className + ' screen-loading-container'
          : 'screen-loading-container'
      }
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
    </Box>
  )
}

export default ScreenLoading
