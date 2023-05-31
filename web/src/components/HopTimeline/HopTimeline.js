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

const HopTimeline = ({ hops, ...props }) => {
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
  const capitalise = (text) =>
    text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase()

  /**
   * @name determineHopChipColor
   * @description METHOD TO DETERMINE HOP COLOR
   * @param {*} type TYPE
   * @param {*} data DATA
   * @returns {String} COLOR
   */
  const determineHopChipColor = (type, data) => {
    // SETTING LOCAL VARIABLES
    let chipColor
    const privateCondition =
      data?.city === 'PRIVATE' || data?.city.toUpperCase() === 'RESERVED'

    if (data !== undefined) {
      if (!privateCondition) chipColor = 'primary'
      else if (privateCondition) chipColor = 'error'
      else if (type === 'UNTRACEROUTABLE') chipColor = 'warning'
      else chipColor = 'error'
    } else {
      chipColor = 'warning'
    }

    return {
      color: `${chipColor}.main`,
      bgColor: `${chipColor}.400`,
    }
  }

  /**
   * @name determineHopChipText
   * @description METHOD TO DETERMINE TEXT THAT GOES WITHIN THE HOP CHIP
   * @param {*} type TYPE
   * @param {*} data DATA
   * @returns {String} TYPE
   */
  const determineHopChipText = (type, data) => {
    // SETTING LOCAL VARIABLES
    let chipText
    const privateCondition =
      data?.city === 'PRIVATE' || data?.city.toUpperCase() === 'RESERVED'

    if (data !== undefined) {
      if (type === 'UNTRACEROUTABLE') chipText = 'Untraceroutable'
      else if (!privateCondition) chipText = 'Geolocated'
      else if (privateCondition) chipText = 'Private'
      else chipText = capitalise(type)
    } else {
      if (type === 'UNTRACEROUTABLE') chipText = 'Untraceroutable'
    }
    return chipText
  }

  return (
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
                    {determineHopChipText(hop.type, hop.data).toUpperCase() ===
                      'GEOLOCATED' && (
                      <>
                        <Typography variant="body2" color="grey">
                          {capitalise(hop.data.city)},{' '}
                          {capitalise(hop.data.country)}
                        </Typography>
                        <Typography variant="body2" color="grey">
                          {hop.data.latitude}, {hop.data.longitude}
                        </Typography>
                      </>
                    )}
                    {determineHopChipText(hop.type, hop.data).toUpperCase() ===
                      'UNGEOLOCATED' && (
                      <>
                        <Typography variant="body2" color="grey">
                          This IP address cannot be geolocated
                        </Typography>
                      </>
                    )}
                    {determineHopChipText(hop.type, hop.data).toUpperCase() ===
                      'PRIVATE' && (
                      <>
                        <Typography variant="body2" color="grey">
                          This is a private IP address & it cannot be geolocated
                        </Typography>
                      </>
                    )}
                    {determineHopChipText(hop.type, hop.data).toUpperCase() ===
                      'UNTRACEROUTABLE' && (
                      <>
                        <Typography variant="body2" color="grey">
                          Cannot ascertain IP address because the router blocks
                          ICMP requests
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
                          {determineHopChipText(hop.type, hop.data)}
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
  )
}

export default HopTimeline
