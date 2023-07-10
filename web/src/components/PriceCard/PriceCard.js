// IMPORTING PACKAGES/MODULES
import { Box, Card, Typography, styled } from '@mui/material'

import './priceCard.css'
import { Link as RedwoodLink } from '@redwoodjs/router'

import Button from '../Button/Button'

const CustomCard = styled(Card)(({ theme }) => ({
  '&.price-card': {
    border: '1px solid',
    borderColor:
      theme.palette.mode === 'light'
        ? 'rgb(56, 68, 77)'
        : 'rgba(230,230,230,0.4)',
    backdropFilter: 'blur(10px)',
    borderRadius: '25px',
    flexGrow: '1',
    margin: '15px',
    maxWidth: '450px',
    padding: '25px',
    position: 'relative',
  },
  '&.selected-price-card': {
    border: '3px solid',
    borderColor:
      theme.palette.primary.main,
  },
  '& .price-card-title': {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  '& .price-card-subtitle': {
    marginTop: '10px',
    textAlign: 'center',
  },
  '& .price-card-value-container': {
    margin: '15px auto',
  },
  '& .price-card-value': {
    fontSize: '2.5em',
    fontWeight: '900',
    textAlign: 'center',
  },
  '&.price-card > .feature-list-label': {
    fontWeight: '600',
    textAlign: 'center',
  },
  '&.price-card > .feature-list': {
    listStyle: 'none',
  },
  '&.price-card .feature-list-item': {
    textAlign: 'center',
    margin: '10px 0px 10px -25px',
  },
  '& .price-card-action-container': {
    margin: '10px auto',
  },
}))

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

  // SETTING LOCAL VARIABLES
  // SETTING SELECTED CLASS
  const selectedStyle = selected ? 'selected-price-card' : ''

  return (
    <CustomCard className={`price-card ${selectedStyle}`}>
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
    </CustomCard>
  )
}

export default PriceCard
