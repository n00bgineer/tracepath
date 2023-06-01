// IMPORTING PACKAGES/MODULES
import { useState } from 'react'

import { OpenInNew, Shield, ShutterSpeed } from '@mui/icons-material'
import { Box, Tabs, Typography, useMediaQuery } from '@mui/material'

import { Link as RedwoodLink, routes } from '@redwoodjs/router'

import './reportData.css'
import HopTimeline from '../HopTimeline/HopTimeline'
import IconButton from '../IconButton/IconButton'
import SiteMetaCard from '../SiteMetaCard/SiteMetaCard'
import Tab from '../Tab/Tab'
import TabPanel from '../TabPanel/TabPanel'

const ReportData = ({ data, hideLink, pointData, ...props }) => {
  // SETTING LOCAL STATES
  const [tabValue, setTabValue] = useState(0)

  // SETTING MEDIA QUERY
  const isMobileViewport = useMediaQuery('(min-width:900px)')

  // METHODS
  /**
   * @name setTab
   * @description METHOD TO SET TAB VALUE
   * @param {*} event EVENT OBJECT
   * @param {*} value VALUE
   * @returns {undefined} undefined
   */
  const setTab = (event, value) => setTabValue(value)

  return (
    <Box
      {...props}
      className={
        props.className
          ? props.className + ' report-data-container'
          : 'report-data-container'
      }
    >
      {!hideLink && (
        <>
          <Box className="report-title-container">
            <Typography variant="h3" className="report-title">
              Report
            </Typography>
            <IconButton
              sx={(theme) => {
                return {
                  color:
                    theme.palette.mode === 'light'
                      ? 'common.black'
                      : 'common.white',
                }
              }}
              size="medium"
              component={RedwoodLink}
              to={routes.report({ id: data.id })}
            >
              <OpenInNew />
            </IconButton>
          </Box>
          <Typography variant="body2" className="report-subtitle">
            Every report can be categorized into two parts: (a) Performance
            Analysis & (b) Security Tracerouting.
          </Typography>
        </>
      )}
      <Box className="report-tabs-container">
        <SiteMetaCard
          url={data.url}
          finalUrl={data.finalUrl}
          siteMeta={data.siteMeta}
          Region={data.Region}
        />
        <Tabs
          value={tabValue}
          onChange={setTab}
          variant="fullWidth"
          TabIndicatorProps={{
            sx: { display: 'none' },
          }}
        >
          <Tab
            label="Performance"
            icon={<ShutterSpeed fontSize="small" />}
            iconPosition="start"
          />
          <Tab
            label={!isMobileViewport ? 'Tracerouting' : 'Security Tracerouting'}
            icon={<Shield fontSize="small" />}
            iconPosition="start"
          />
        </Tabs>
        <TabPanel value={0} index={tabValue}>
          abcd
        </TabPanel>
        <TabPanel value={1} index={tabValue}>
          {data.traceroute && (
            <HopTimeline hops={data.traceroute.hops} pointData={pointData} />
          )}
        </TabPanel>
      </Box>
    </Box>
  )
}

export default ReportData
