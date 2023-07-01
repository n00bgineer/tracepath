// IMPORTING PACKAGES/MODULES
import React from 'react'

import { Box as MuiBox, Typography, styled } from '@mui/material'
import './dataLoading.css'

// CUSTOM COMPONENTS
// CUSTOM BOX COMPONENT
const CustomBox = styled(MuiBox)(({ theme }) => ({
  '&.MuiBox-root': {
    background:
      theme.palette.mode === 'light'
        ? theme.palette.grey[200]
        : theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '25px',
    padding: '10px',
    margin: '0px auto 10px',
  },
  '&.data-loading-container > .data-loading-container-image': {
    maxHeight: '300px',
    minHeight: '300px',
    margin: '10px auto 0px',
    display: 'block',
  },
  '& .loading-text-container': {
    width: '75%',
    margin: '15px auto 10px',
  },
  '& .data-loading-container-title': {
    fontSize: '1.25em',
    fontWeight: '900',
    textAlign: 'center',
  },
  '& .data-loading-container-subtitle': {
    fontSize: '0.85em',
    textAlign: 'center',
    marginTop: '0px',
  },
}))

const DataLoading = ({ imgUrl, title, subtitle, small, ...props }) => {
  // SETTING LOCAL VARIABLES
  // SETTING LOADING CONTAINER SIZE
  let loadingContainerSizeClass = 'data-loading-container-large'
  if (small === true) loadingContainerSizeClass = 'data-loading-container-small'

  return (
    <CustomBox
      {...props}
      className={`${
        props.className ? props.className : ''
      } data-loading-container ${loadingContainerSizeClass}`}
    >
      {imgUrl && (
        <img
          src={imgUrl}
          alt={subtitle}
          className="data-loading-container-image"
          loading="lazy"
        />
      )}
      <MuiBox className="loading-text-container">
        <Typography variant="h2" className="data-loading-container-title">
          {title}
        </Typography>
        <Typography variant="body1" className="data-loading-container-subtitle">
          {subtitle}
        </Typography>
      </MuiBox>
    </CustomBox>
  )
}

export default DataLoading
