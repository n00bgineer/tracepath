// IMPORTING PACKAGES/MODULES
import { Box, Card, Typography } from '@mui/material'

import './priceCard.css'
import { Link as RedwoodLink } from '@redwoodjs/router'

import Button from '../Button/Button'

const PriceCard = ({
  title,
  content,
  selected,
  price,
  features,
  link,
  linkDisabled,
  linkStartIcon,
}) => {
  return (
    <Card
      className="price-card"
      sx={(theme) => {
        return {
          border: selected ? '3px solid' : '1px solid',
          borderColor:
            theme.palette.mode === 'light'
              ? selected
                ? 'primary.main'
                : 'rgb(56, 68, 77)'
              : selected
              ? 'primary.main'
              : 'rgba(230,230,230,0.4)',
          backdropFilter: 'blur(10px)',
        }
      }}
    >
      <Typography variant="h5" className="price-card-title">
        {title}
      </Typography>
      <Typography variant="body1" className="price-card-subtitle">
        {content}
      </Typography>
      <Box className="price-card-value-container">
        <Typography
          variant="body1"
          className="price-card-value"
          color={selected ? 'primary.main' : ''}
        >
          {price}
        </Typography>
      </Box>
      <Typography variant="body1" className="feature-list-label">
        Feature List
      </Typography>
      {features && (
        <Box component="ul" className="feature-list">
          {features.map((feature, index) => {
            return (
              <Typography
                key={index}
                variant="body1"
                className="feature-list-item"
                component="div"
              >
                {feature}
              </Typography>
            )
          })}
        </Box>
      )}
      <Box className="price-card-action-container">
        <Button
          variant="contained"
          component={RedwoodLink}
          size="large"
          to={link}
          disabled={linkDisabled}
          startIcon={linkStartIcon}
          fullWidth
        >
          Get Started
        </Button>
      </Box>
    </Card>
  )
}

export default PriceCard
