// IMPORTING PACKAGES/MODULES
import { useState } from 'react'

import { OpenInNew, Shield, ShutterSpeed } from '@mui/icons-material'
import { Box, Typography, styled, useMediaQuery } from '@mui/material'

import { Link as RedwoodLink, routes } from '@redwoodjs/router'

import DataLoading from '../DataLoading/DataLoading'
import HopTimeline from '../HopTimeline/HopTimeline'
import IconButton from '../IconButton/IconButton'
import Performance from '../Performance/Performance'
import SiteMetaCard from '../SiteMetaCard/SiteMetaCard'
import Tab from '../Tab/Tab'
import TabPanel from '../TabPanel/TabPanel'
import Tabs from '../Tabs/Tabs'

// CUSTOM COMPONENTS
// CUSTOM BOX COMPONENT
const CustomBox = styled(Box)(() => ({
  '&.report-data-container': {
    margin: '10px 0px',
  },
  '& .report-title-container': {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  '& .report-title': {
    fontSize: '1.25em',
    fontWeight: '600',
  },
  '& .report-subtitle': {
    marginBottom: '5px',
  },
  '& .report-sitemeta-tabs-container': {
    margin: '5px 0px',
  },
  '& .report-tabs-container': {
    margin: '15px 0px',
  },
}))
const ReportData = ({ data, hideLink, pointData, ...props }) => {
  // SETTING LOCAL VARIABLES
  const scores = {
    fcp: data.fcpScore,
    lcp: data.lcpScore,
    cls: data.clsScore,
    tbt: data.tbtScore,
    tti: data.ttiScore,
    speedIndex: data.speedIndexScore,
  }

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

  /**
   * @name isValidPerformanceData
   * @description METHOD TO CHECK VALIDITY OF PERFORMANCE METRICS
   * @param {*} performanceData PERFORMANCE OBJECT
   * @returns {Boolean} WHETHER OR NOT PERF DATA IS FALSE
   */
  const isValidPerformanceData = (performanceData) => {
    // CHECKING RESPONSE BY TESTING AGAINST FIVE SCORE VALUES
    return !(
      performanceData &&
      (performanceData.fcpScore == null ||
        performanceData.fcpScore == undefined) &&
      (performanceData.lcpScore == null ||
        performanceData.lcpScore == undefined) &&
      (performanceData.tbtScore == null ||
        performanceData.tbtScore == undefined) &&
      (performanceData.ttiScore == null ||
        performanceData.ttiScore == undefined) &&
      (performanceData.speedIndexScore == null ||
        performanceData.speedIndexScore == undefined) &&
      (performanceData.clsScore == null ||
        performanceData.clsScore == undefined)
    )
  }

  return (
    <CustomBox
      {...props}
      className={`${
        props.className ? props.className : ''
      } report-data-container`}
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
            Analysis & (b) Security Tracerouting
          </Typography>
        </>
      )}
      <Box className="report-sitemeta-tabs-container">
        <SiteMetaCard
          url={data.url}
          finalUrl={data.finalUrl}
          siteMeta={data.siteMeta}
          Region={data.Region}
          createdAt={data.createdAt}
          scores={scores}
        />
        <Box className="report-tabs-container">
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
              label={
                !isMobileViewport ? 'Tracerouting' : 'Security Tracerouting'
              }
              icon={<Shield fontSize="small" />}
              iconPosition="start"
            />
          </Tabs>
        </Box>
        <TabPanel value={0} index={tabValue}>
          {!isValidPerformanceData(data) ? (
            <DataLoading
              title="Performance Analysis Error!"
              subtitle="Performance analysis data is empty"
              imgUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1685743033/emptyPerformance_rbqkus.png"
            />
          ) : (
            <Performance data={data} />
          )}
        </TabPanel>
        <TabPanel value={1} index={tabValue}>
          {data.traceroute ? (
            <HopTimeline hops={data.traceroute.hops} pointData={pointData} />
          ) : (
            <DataLoading
              title="Tracerouting Error!"
              subtitle="Security tracerouting data is empty"
              imgUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1685742401/emptyTracepath_fvhoxr.png"
            />
          )}
        </TabPanel>
      </Box>
    </CustomBox>
  )
}

export default ReportData
