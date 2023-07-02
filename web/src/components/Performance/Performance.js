// IMPORTING PACKAGES/MODULES
import {
  Box as MuiBox,
  Card as MuiCard,
  Typography,
  styled,
} from '@mui/material'

import { Tooltip } from '../SiteMetaCard/SiteMetaCard'

// CUSTOM COMPONENTS
// CUSTOM BOX COMPONENT
const CustomBox = styled(MuiBox)(() => ({
  '&.MuiBox-root': {
    padding: '0px',
    margin: '10px 0px',
  },
}))
// CUSTOM CARD COMPONENT
const CustomCard = styled(MuiCard)(({ theme }) => ({
  '&.MuiCard-root': {
    borderRadius: '25px',
    border: `1px solid ${theme.palette.divider}`,
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    minHeight: '175px',
  },
  '&> .performance-score-container': {
    padding: '20px',
    borderRight: `1px solid ${theme.palette.divider}`,
    flexGrow: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '30%',
  },
  '&> .performance-score-container > .performance-score-text': {
    fontWeight: '900',
  },
  '&> .performance-details-container': {
    padding: '20px',
    flexGrow: '3',
    maxWidth: '70%',
  },
  '& .metric-name': {
    fontWeight: '900',
  },
  '& .metric-question': {
    fontWeight: '900',
    fontSize: '18px',
  },
  '& .metric-description': {
    marginTop: '5px',
  },
  '& .metric-value': {
    fontSize: '18px',
    fontWeight: 'bolder',
  },
}))

// CUSTOM CARD COMPONENT FOR SHOWING PERF METRIC INFO
const MetricCard = ({
  metricType,
  metricValue,
  metricScore,
  metricName,
  metricQuestion,
  metricDesc1,
  metricDesc2,
  tooltipText = 'Score out of 100',
}) => {
  // METHODS
  /**
   * @name determineScoreColor
   * @description METHOD TO DETERMINE SCORE COLOR BASED ON TYPE AND VALUE
   * @param {*} metricType SCORE TYPE
   * @param {*} metricValue SCORE VALUE
   * @returns String COLOR CLASS
   */
  const determineScoreColor = () => {
    // STORING LOCAL VARIABLES
    const colors = {
      low: 'error',
      mid: 'warning',
      high: 'primary',
    }
    const normalisedScore =
      metricValue === 0 ? 0 : (metricValue / 1000).toFixed(2)

    // DETERMINING FOR VARIOUS COLORS
    // FOR SPEED INDEX
    if (metricType === 'speedIndex') {
      if (normalisedScore >= 0 && normalisedScore <= 3.4) return colors.high
      else if (normalisedScore > 3.4 && normalisedScore <= 5.8)
        return colors.mid
      else if (normalisedScore > 5.8) return colors.low
    }
    // FOR FCP
    else if (metricType === 'fcp') {
      if (normalisedScore >= 0 && normalisedScore <= 1.8) return colors.high
      else if (normalisedScore > 1.8 && normalisedScore <= 3) return colors.mid
      else if (normalisedScore > 3) return colors.low
    }
    // FOR LCP
    else if (metricType === 'lcp') {
      if (normalisedScore >= 0 && normalisedScore <= 2.5) return colors.high
      else if (normalisedScore > 2.5 && normalisedScore <= 4) return colors.mid
      else if (normalisedScore > 4) return colors.low
    }
    // FOR TTI
    else if (metricType === 'tti') {
      if (normalisedScore < 5) return colors.high
      else if (normalisedScore >= 5) return colors.low
    }
    // FOR TBT
    else if (metricType === 'tbt') {
      if (normalisedScore < 1) return colors.high
      else if (normalisedScore >= 1 && normalisedScore <= 10) return colors.mid
      else if (normalisedScore > 10) return colors.low
    }
  }

  return (
    <CustomCard elevation={0}>
      <Tooltip title={tooltipText}>
        <MuiBox
          className="performance-score-container"
          sx={(theme) => {
            return {
              color:
                theme.palette.mode === 'light'
                  ? 'common.white'
                  : 'common.black',
              background: metricValue
                ? `linear-gradient(to top, ${
                    theme.palette[determineScoreColor(metricType, metricValue)]
                      .dark
                  }, ${
                    theme.palette[determineScoreColor(metricType, metricValue)]
                      .main
                  }, ${
                    theme.palette[determineScoreColor(metricType, metricValue)]
                      .main
                  })`
                : `linear-gradient(to top, ${theme.palette.info.dark}, ${theme.palette.info.main}, ${theme.palette.info.main})`,
            }
          }}
        >
          <Typography variant="h4" className="performance-score-text">
            {metricScore === 0 ? 0 : parseInt(metricScore.toFixed(2) * 100)}
          </Typography>
        </MuiBox>
      </Tooltip>
      <MuiBox className="performance-details-container">
        <Typography variant="h6" className="metric-question">
          {metricQuestion}
        </Typography>
        <Typography variant="body2" className="metric-description">
          <span className="metric-name">{metricName}</span> {metricDesc1}{' '}
          {metricValue && (
            <Typography
              variant="h6"
              component="span"
              className="metric-value"
              sx={{
                color: `${determineScoreColor(metricType, metricValue)}.main`,
              }}
            >
              {(metricValue / 1000).toFixed(2)}s
            </Typography>
          )}{' '}
          {metricDesc2}
        </Typography>
      </MuiBox>
    </CustomCard>
  )
}

const Performance = ({ data, ...props }) => {
  return (
    <CustomBox {...props}>
      {/* SI CARD */}
      <MetricCard
        metricType="speedIndex"
        metricScore={data.speedIndexScore}
        metricValue={data.speedIndexValue}
        metricName="Speed Index"
        metricQuestion="How quickly does this app loads?"
        metricDesc1="measures the perceived amount of time it takes to load the app. It takes"
        metricDesc2="to load this app"
      />

      {/* FCP CARD */}
      <MetricCard
        metricType="fcp"
        metricScore={data.fcpScore}
        metricValue={data.fcpValue}
        metricName="First Contentful Paint"
        metricQuestion="How quickly does this app displays the first element to it's users?"
        metricDesc1="(FCP) measures the amount of time it takes for the first element to load. It takes"
        metricDesc2="to load the first element"
      />

      {/* LCP CARD */}
      <MetricCard
        metricType="lcp"
        metricScore={data.lcpScore}
        metricValue={data.lcpValue}
        metricName="Largest Contentful Paint"
        metricQuestion="How quickly does this app displays the largest element to it's users?"
        metricDesc1="(LCP) measures the amount of time it takes for the largest piece of content (e.g. hero) to load. It takes"
        metricDesc2="to load the largest element"
      />

      {/* TBT CARD */}
      <MetricCard
        metricType="tbt"
        metricScore={data.tbtScore}
        metricValue={data.tbtValue}
        metricName="Time Blocking Time"
        metricQuestion="How long is the app's main thread locked up by long taks?"
        metricDesc1="(TBT) measures the total amount of time that the main thread is blocked by long tasks. A long task is a task that runs on the main thread for more than 50 milliseconds. Your main thread is blocked for "
        // metricDesc2="."
      />

      {/* TTI CARD */}
      <MetricCard
        metricType="tti"
        metricScore={data.ttiScore}
        metricValue={data.ttiValue}
        metricName="Time To Interactive"
        metricQuestion="How quickly does the page become fully interactive after loading?"
        metricDesc1="(TTI) measures the amount of time the page is unresponsive to user input while it's loading and rendering content. It takes"
        metricDesc2="for your app to become fully interatcive"
      />

      {/* CLS CARD */}
      <MetricCard
        metricType="cls"
        metricScore={data.clsScore}
        metricQuestion="How often do users experience unexpected layout shifts on the app?"
        metricDesc1="A layout shift occurs when a visible element on a web page changes it's position from one rendered frame to another. Cumulative Layout Shift (CLS) in a unitless metrics which measures layout shifts. Lower the value, better will be the user experience"
        tooltipText="Value close to zero is better"
      />
    </CustomBox>
  )
}

export default Performance
