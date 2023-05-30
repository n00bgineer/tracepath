// IMPORTING PACKAGES/MODULES
import React from 'react'

import { Box, Typography } from '@mui/material'
import './loading.css'

const Loading = ({ imgUrl, title, subtitle, small, gray, ...props }) => {
  // SETTING LOCAL VARIABLES
  // SETTING LOADING CONTAINER SIZE
  let loadingContainerSizeClass = 'loading-container-large'
  if (small === true) loadingContainerSizeClass = 'loading-container-small'

  return (
    <Box
      sx={(theme) => {
        return {
          bgcolor:
            theme.palette.mode === 'light'
              ? gray
                ? 'grey.200'
                : 'background.default'
              : 'background.paper',
        }
      }}
      className={
        props.className
          ? props.className + ' loading-container ' + loadingContainerSizeClass
          : 'loading-container ' + loadingContainerSizeClass
      }
    >
      {imgUrl && (
        <img src={imgUrl} alt={subtitle} className="loading-container-image" />
      )}
      <Box className="loading-text-container">
        <Typography variant="h2" className="loading-container-title">
          {title}
        </Typography>
        <Typography variant="body1" className="loading-container-subtitle">
          {subtitle}
        </Typography>
      </Box>
    </Box>
  )
}

export default Loading
