// IMPORTING PACKAGES/MODULES
import { Public } from '@mui/icons-material'
import {
  Box,
  Card as MuiCard,
  Tooltip as MuiTooltip,
  Typography,
  styled,
} from '@mui/material'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

import IconButton from '../IconButton/IconButton'

// INSTANTIATING TIME AGO DEFAULT LOCALE
TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

// CUSTOM COMPONENTS
export const Tooltip = styled(MuiTooltip)(() => ({
  '& .MuiTooltip-tooltip': {
    width: '100px',
    maxWidth: '100px',
    marginTop: '10px',
  },
}))

const Card = styled(MuiCard)(({ theme }) => ({
  '&.MuiCard-root': {
    borderRadius: '25px',
    border: `1px solid ${theme.palette.divider}`,
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
  },
  '& .site-meta-content-container': {
    padding: '20px',
    flexGrow: '1',
  },
  '& .site-meta-score-container': {
    height: '15px',
    display: 'flex',
    flexWrap: 'nowrap',
  },
  '& .site-meta-score-container > *': {
    flexGrow: '1',
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  '& .site-meta-hostname-link-container': {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  '& .site-meta-hostname': {
    fontWeight: 'bold',
    maxWidth: 'calc(100% - 45px)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  '& .site-meta-description': {
    margin: '5px 0px',
  },
}))

const SiteMetaCard = ({
  url,
  finalUrl,
  siteMeta,
  Region,
  createdAt,
  scores,
  ...props
}) => {
  // SETTING LOCAL VARIABLES
  const { fcp, lcp, cls, tbt, tti, speedIndex } = scores

  /**
   * @name setColorValue
   * @description METHOD TO RETURN COLOR VALUE
   * @param {*} score SCORE
   * @returns {Int} SCORE VALUE 0, 50, 100, 200, ... 900
   */
  const setColorValue = (score) => {
    const value = score * 1000

    if (value < 50) return '50'
    else if (value < 150) return '100'
    else if (value < 250) return '200'
    else if (value < 350) return '300'
    else if (value < 450) return '400'
    else if (value < 550) return '500'
    else if (value < 650) return '600'
    else if (value < 750) return '700'
    else if (value < 850) return '800'
    else if (value < 950) return 'main'
    else return 'dark'
  }

  return (
    <Card {...props} elevation={0}>
      <Box className="site-meta-content-container">
        <Box className="site-meta-hostname-link-container">
          <Typography variant="h5" className="site-meta-hostname">
            {new URL(url).hostname}
          </Typography>
          <IconButton
            component="a"
            href={finalUrl}
            target="_blank"
            color="default"
          >
            <Public />
          </IconButton>
        </Box>

        <Typography variant="body2" color="grey">
          {finalUrl}
        </Typography>
        <Typography variant="body2" color="grey">
          {Region.name}
        </Typography>
        {(siteMeta.ogDescription ||
          siteMeta.twitterDescription ||
          siteMeta.ogTitle ||
          siteMeta.description) && (
          <Typography variant="body2" className="site-meta-description">
            {siteMeta.twitterDescription ||
              siteMeta.ogDescription ||
              siteMeta.ogTitle ||
              siteMeta.description}
          </Typography>
        )}
        <Typography variant="body2" color="grey">
          {timeAgo.format(new Date(createdAt))}
        </Typography>
      </Box>
      <Box className="site-meta-score-container">
        <Tooltip
          title={`SI score is ${speedIndex}. Value close to one is better.`}
        >
          <Box
            sx={(theme) => {
              return {
                bgcolor: theme.palette.primary[setColorValue(speedIndex)],
              }
            }}
          ></Box>
        </Tooltip>
        <Tooltip title={`FCP score is ${fcp}. Value close to one is better.`}>
          <Box
            sx={(theme) => {
              return { bgcolor: theme.palette.secondary[setColorValue(fcp)] }
            }}
          ></Box>
        </Tooltip>
        <Tooltip title={`LCP score is ${lcp}. Value close to one is better.`}>
          <Box
            sx={(theme) => {
              return { bgcolor: theme.palette.grey[setColorValue(lcp)] }
            }}
          ></Box>
        </Tooltip>
        <Tooltip title={`CLS score is ${cls}. Value close to one is better.`}>
          <Box
            sx={(theme) => {
              return { bgcolor: theme.palette.warning[setColorValue(cls)] }
            }}
          ></Box>
        </Tooltip>

        <Tooltip title={`TBT score is ${tbt}. Value close to one is better.`}>
          <Box
            sx={(theme) => {
              return { bgcolor: theme.palette.error[setColorValue(tbt)] }
            }}
          ></Box>
        </Tooltip>

        <Tooltip title={`TTI score is ${tti}.\nValue close to one is better.`}>
          <Box
            sx={(theme) => {
              return { bgcolor: theme.palette.info[setColorValue(tti)] }
            }}
          ></Box>
        </Tooltip>
      </Box>
    </Card>
  )
}

export default SiteMetaCard
