// IMPORTING PACKAGES/MODULES
import { Box, Card, Typography } from '@mui/material'
import './priceCard.css'

const PriceCard = ({ title, content, selected, price, features }) => {
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
                : 'hsl(214.3 31.8% 91.4)'
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
          {features.map((feature) => {
            return (
              <Typography
                component="li"
                key={feature}
                variant="body1"
                className="feature-list-item"
              >
                {feature}
              </Typography>
            )
          })}
        </Box>
      )}
    </Card>
  )
}

export default PriceCard
