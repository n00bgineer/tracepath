// IMPORTING PACKAGES/MODULES
import { Card as MuiCard, Typography, styled } from '@mui/material'

// CUSTOM COMPONENTS
const Card = styled(MuiCard)(({ theme }) => ({
  '&.MuiCard-root': {
    padding: '20px',
    borderRadius: '25px',
    border: `1px solid ${theme.palette.divider}`,
    marginBottom: '15px',
  },
  '& .site-meta-hostname': {
    fontWeight: 'bold',
  },
  '& .site-meta-description': {
    marginTop: '10px',
  },
}))

const SiteMetaCard = ({ url, finalUrl, siteMeta, Region, ...props }) => {
  return (
    <Card {...props} elevation={0}>
      <Typography variant="h5" className="site-meta-hostname">
        {new URL(url).hostname}
      </Typography>
      <Typography variant="body2" color="grey">
        {finalUrl}
      </Typography>
      <Typography variant="body2" color="grey">
        {Region.name}
      </Typography>
      {(siteMeta.ogDescription ||
        siteMeta.twitterDescription ||
        siteMeta.ogTitle) && (
        <Typography variant="body2" className="site-meta-description">
          {siteMeta.twitterDescription ||
            siteMeta.ogDescription ||
            siteMeta.ogTitle}
        </Typography>
      )}
    </Card>
  )
}

export default SiteMetaCard
