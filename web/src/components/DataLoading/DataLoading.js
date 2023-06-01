// IMPORTING PACKAGES/MODULES
import React from 'react'

import { Box, Typography } from '@mui/material'
import './dataLoading.css'

const DataLoading = ({ imgUrl, title, subtitle, small, gray, ...props }) => {
  // SETTING LOCAL VARIABLES
  // SETTING LOADING CONTAINER SIZE
  let loadingContainerSizeClass = 'data-loading-container-large'
  if (small === true) loadingContainerSizeClass = 'data-loading-container-small'

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
          ? props.className +
            ' data-loading-container ' +
            loadingContainerSizeClass
          : 'data-loading-container ' + loadingContainerSizeClass
      }
    >
      {imgUrl && (
        <img
          src={imgUrl}
          alt={subtitle}
          className="data-loading-container-image"
        />
      )}
      <Box className="loading-text-container">
        <Typography variant="h2" className="data-loading-container-title">
          {title}
        </Typography>
        <Typography variant="body1" className="data-loading-container-subtitle">
          {subtitle}
        </Typography>
      </Box>
    </Box>
  )
}

export default DataLoading
