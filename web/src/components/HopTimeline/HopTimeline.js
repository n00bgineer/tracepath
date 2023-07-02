// IMPORTING PACKAGES/MODULES
import { Lock, LockOpen } from '@mui/icons-material'
import {
  Timeline as MuiTimeline,
  TimelineConnector,
  TimelineContent as MuiTimelineContent,
  TimelineDot,
  TimelineItem as MuiTimelineItem,
  TimelineSeparator,
} from '@mui/lab'
import { Box, Card, Chip, Typography, styled } from '@mui/material'

import Alert from '../Alert/Alert'

// METHODS
/**
 * @name capitalise
 * @description METHOD TO CAPITALISE TEXT
 * @param {*} text TEXT
 * @returns {String} CAPITALISED TEXT
 */
export const capitalise = (text) => {
  return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase()
}

// CUSTOM COMPONENTS
// TIMELINE CARD COMPONENT
const TimelineCard = styled(Card)(({ theme }) => ({
  '&.MuiCard-root': {
    borderRadius: '25px',
    border: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  '& .hop-ip': {
    fontWeight: 'bold',
  },
  '& .hop-content-chip-container': {
    padding: '20px',
    width: '100%',
  },
  '& .hop-content-container': {
    flexGrow: '1',
  },
  '& .hop-chips-container': {
    marginTop: '5px',
  },
  '& .hop-chip': {
    marginRight: '10px',
  },
  '& .hop-reputation-container': {
    width: '100%',
    padding: '10px 20px',
    background: `linear-gradient(to top, ${theme.palette.error.dark}, ${theme.palette.error.main}, ${theme.palette.error.main})`,
  },
  '& .hop-reputation-verdict': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: theme.palette.common.white,
  },
  '& .hop-reputation-verdict-icon': {
    marginRight: '5px',
  },
}))

// TIMELINE COMPONENT
const Timeline = styled(MuiTimeline)(() => ({
  '&.MuiTimeline-root': {
    padding: '0px',
    margin: '10px 0px',
  },
}))

// TIMELINE ITEM COMPONENT
const TimelineItem = styled(MuiTimelineItem)(() => ({
  '&.MuiTimelineItem-root': {
    marginBottom: '20px',
  },
  '&.MuiTimelineItem-root::before': {
    flex: '0',
    padding: '0px',
  },
}))

// TIMELINE CONTENT COMPONENT
const TimelineContent = styled(MuiTimelineContent)(() => ({
  '&.MuiTimelineContent-root': {
    padding: '0px',
    marginLeft: '10px',
  },
}))

const HopTimeline = ({ hops, pointData, ...props }) => {
  // SETTING LOCAL VARIABLES
  const origDestColor = {
    color: `info.main`,
    bgColor: `info.400`,
  } // ORIGIN AND DESTINATION COLOR

  // SETTING LOCAL STATES
  const maliciousReputationScore = hops.filter((hop) => {
    if (hop.reputation && hop.reputation.verdict === 'malicious') return true
    else return false
  }).length

  // METHODS
  /**
   * @name determineHopChipColor
   * @description METHOD TO DETERMINE HOP COLOR
   * @param {*} type TYPE
   * @returns {String} COLOR
   */
  const determineHopChipColor = (type) => {
    // SETTING LOCAL VARIABLES
    let chipColor

    if (type === 'GEOLOCATED') chipColor = 'primary'
    else if (type === 'UNGEOLOCATED') chipColor = 'error'
    else if (type === 'UNTRACEROUTABLE') chipColor = 'warning'
    else chipColor = 'error'

    return {
      color: `${chipColor}.main`,
      bgColor: `${chipColor}.400`,
    }
  }

  /**
   * @name setHopReputationText
   * @description METHOD TO REPUTATION TEXT
   * @param {*} hop HOP OBJECT
   * @returns {String} HOP REPUTATION
   */
  const setHopReputationText = (hop) => {
    // SETTING LOCAL VARIABLES
    const hopReputationCategories = hop.reputation.category.length > 0 ? `` : ''
    return `This IP address was found to be ${hop.reputation.verdict}. ${hopReputationCategories}`
  }

  return (
    <>
      {/* SHOWING AN ALERT, IF <=1 LOCATION ITEMS WERE FOUND */}
      {pointData.length < 2 && (
        <Alert fullWidth={true} margin="medium" size="small" severity="warning">
          No more than one location found
        </Alert>
      )}

      {/* SHOWING AN ALERT, IF A MALICIOUS IP ADDRESS WAS FOUND */}
      {maliciousReputationScore > 0 && (
        <Alert fullWidth={true} margin="medium" size="small" severity="info">
          {maliciousReputationScore} malicious IP addresses found
        </Alert>
      )}

      <Timeline {...props}>
        {hops &&
          hops.map((hop, index, hops) => {
            return (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  {hops.length - 1 !== index && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <TimelineCard elevation={0}>
                    <Box className="hop-content-chip-container">
                      <Box className="hop-content-container">
                        <Typography variant="h5" className="hop-ip">
                          {hop.ip === '*' ? 'xxx.xxx.xxx.xxx' : hop.ip}
                        </Typography>

                        {hop.type === 'GEOLOCATED' && (
                          <>
                            {hop.data.country && (
                              <Typography variant="body2" color="grey">
                                {hop.data.city &&
                                  capitalise(hop.data.city + ', ')}
                                {capitalise(hop.data.country)}
                              </Typography>
                            )}
                            <Typography variant="body2" color="grey">
                              {hop.data.latitude}, {hop.data.longitude}
                            </Typography>
                          </>
                        )}

                        {hop.type === 'UNGEOLOCATED' && (
                          <>
                            <Typography variant="body2" color="grey">
                              This IP address cannot be geolocated
                            </Typography>
                          </>
                        )}

                        {hop.type === 'PRIVATE' && (
                          <>
                            <Typography variant="body2" color="grey">
                              This is a private IP address & it cannot be
                              geolocated
                            </Typography>
                          </>
                        )}

                        {hop.type === 'UNTRACEROUTABLE' && (
                          <>
                            <Typography variant="body2" color="grey">
                              Cannot ascertain IP address because the router
                              blocks ICMP requests
                            </Typography>
                          </>
                        )}
                      </Box>
                      <Box className="hop-chips-container">
                        {(index === 0 || hops.length - 1 === index) && (
                          <Chip
                            sx={origDestColor}
                            label={
                              <Typography variant="body2">
                                {index === 0 ? 'Origin' : 'Destination'}
                              </Typography>
                            }
                            size="small"
                            className="hop-chip"
                          />
                        )}
                        <Chip
                          sx={determineHopChipColor(hop.type, hop.data)}
                          label={
                            <Typography variant="body2">
                              {hop.type !== undefined && capitalise(hop.type)}
                            </Typography>
                          }
                          size="small"
                          className="hop-chip"
                        />
                      </Box>
                    </Box>

                    {/* SHOWING IP REPUTATION INFO */}
                    {hop.reputation && hop.score != -1 && (
                      <Box
                        className="hop-reputation-container"
                        sx={(theme) => {
                          return {
                            borderTop: `1px solid ${theme.palette.divider}`,
                          }
                        }}
                      >
                        <Typography
                          variant="body2"
                          className="hop-reputation-verdict"
                        >
                          {hop.reputation.verdict === 'malicious' ? (
                            <LockOpen
                              fontSize="inherit"
                              className="hop-reputation-verdict-icon"
                            />
                          ) : (
                            <Lock
                              fontSize="inherit"
                              className="hop-reputation-verdict-icon"
                            />
                          )}{' '}
                          {setHopReputationText(hop)}
                        </Typography>
                      </Box>
                    )}
                  </TimelineCard>
                </TimelineContent>
              </TimelineItem>
            )
          })}
      </Timeline>
    </>
  )
}

export default HopTimeline
