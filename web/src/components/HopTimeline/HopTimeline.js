// IMPORTING PACKAGES/MODULES

import styled from '@emotion/styled'
import {
  Timeline as MuiTimeline,
  TimelineConnector,
  TimelineContent as MuiTimelineContent,
  TimelineDot,
  TimelineItem as MuiTimelineItem,
  TimelineSeparator,
} from '@mui/lab'
import { Box, Card, Chip, Typography } from '@mui/material'

import Alert from '../Alert/Alert'

// CUSTOM COMPONENTS
const TimelineCard = styled(Card)(({ theme }) => ({
  '&.MuiCard-root': {
    padding: '20px',
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
  '& .hop-content-container': {
    flexGrow: '1',
  },
  '& .hop-chips-container': {
    marginTop: '5px',
  },
  '& .hop-chip': {
    marginRight: '10px',
  },
}))
const Timeline = styled(MuiTimeline)(() => ({
  '&.MuiTimeline-root': {
    padding: '0px',
    margin: '10px 0px',
  },
}))
const TimelineItem = styled(MuiTimelineItem)(() => ({
  '&.MuiTimelineItem-root': {
    marginBottom: '20px',
  },
  '&.MuiTimelineItem-root::before': {
    flex: '0',
    padding: '0px',
  },
}))
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

  // METHODS
  /**
   * @name capitalise
   * @description METHOD TO CAPITALISE TEXT
   * @param {*} text TEXT
   * @returns {String} CAPITALISED TEXT
   */
  const capitalise = (text) => {
    return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase()
  }

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

  return (
    <>
      {pointData.length < 2 && (
        <Alert fullWidth={true} margin="medium" size="small" severity="warning">
          No more than one location found
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
