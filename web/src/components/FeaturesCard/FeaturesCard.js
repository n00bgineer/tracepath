// IMPORTING PACKAGES/MODULES
import React from 'react'
import './featuresCard.css'

import { ArrowCircleRight } from '@mui/icons-material'
import { Box, Card as MuiCard, Chip, Typography, styled } from '@mui/material'

import { Link } from '@redwoodjs/router'

import IconButton from '../IconButton/IconButton'

// CUSTOM COMPONENTS
// CUSTOM CARD COMPONENT
const CustomCard = styled(MuiCard)(({ theme }) => ({
  '&.feature-card': {
    aspectRatio: '1.1/1',
    border: '1px solid',
    borderRadius: '25px',
    flexGrow: '1',
    margin: '15px',
    maxWidth: 'calc(33% - 50px)',
    minWidth: '400px',
    padding: '25px',
    position: 'relative',
    borderColor:
      theme.palette.mode === 'light'
        ? 'rgb(56, 68, 77)'
        : 'rgba(230,230,230,0.4)',
    backdropFilter: 'blur(10px)',
  },
  '& .feature-card-title': {
    fontWeight: 'bold',
    textAlign: 'left',
  },
  '& .feature-card-subtitle': {
    marginTop: '10px',
    textAlign: 'left',
  },
  '&> .feature-card-image': {
    bottom: '0',
    marginBottom: '-20%',
    marginRight: '-15%',
    position: 'absolute',
    right: '0',
    width: '60%',
  },
  '& .feature-tags-container': {
    marginTop: '15px',
  },
  '& .feature-card-link': {
    marginLeft: '-5px',
    marginTop: '5px',
  },
}))

const FeaturesCard = ({ title, content, image, tags, link }) => {
  return (
    <CustomCard className="feature-card">
      <Box className="feature-card-content">
        <Typography variant="h5" className="feature-card-title">
          {title}
        </Typography>
        <Typography variant="body1" className="feature-card-subtitle">
          {content}
        </Typography>
        {tags && (
          <Box className="feature-tags-container">
            {tags.map((tag, index) => {
              return <Chip key={index} color="default" label={tag} />
            })}
          </Box>
        )}
        {link && (
          <IconButton component={Link} to={link} className="feature-card-link">
            {' '}
            <ArrowCircleRight fontSize="large" />{' '}
          </IconButton>
        )}
      </Box>
      {image && <img src={image} className="feature-card-image" alt={title} />}
    </CustomCard>
  )
}

export default FeaturesCard
