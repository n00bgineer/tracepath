// IMPORTING PACKAGES/MODULES
import React from 'react'
import './featuresCard.css'

import { ArrowCircleRight } from '@mui/icons-material'
import { Box, Card, Chip, Typography } from '@mui/material'

import { Link } from '@redwoodjs/router'

import IconButton from '../IconButton/IconButton'

const FeaturesCard = ({ title, content, image, tags, link }) => {
  return (
    <Card
      className="features-card"
      sx={(theme) => {
        return {
          border: '1px solid',
          borderColor:
            theme.palette.mode === 'light'
              ? 'rgb(56, 68, 77)'
              : 'rgba(230,230,230,0.4)',
          backdropFilter: 'blur(10px)',
        }
      }}
    >
      <Box className="features-card-content">
        <Typography variant="h5" className="feature-card-title">
          {title}
        </Typography>
        <Typography variant="body1" className="feature-card-subtitle">
          {content}
        </Typography>
        {tags && (
          <Box className="feature-tags-container">
            {tags.map((tag) => {
              return <Chip key={tag} color="default" label={tag} />
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
    </Card>
  )
}

export default FeaturesCard
