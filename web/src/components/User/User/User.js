// IMPORTING PACKAGES/MODULES
import { useEffect, useState } from 'react'

import { useApolloClient } from '@apollo/client'
import { Assessment, Inventory2 } from '@mui/icons-material'
import { Box, Skeleton, Tabs, Typography, useMediaQuery } from '@mui/material'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import './user.css'
import 'src/components/Report/Reports/reports.css'
import { useRecoilState } from 'recoil'

import { Link as RedwoodLink, routes } from '@redwoodjs/router'

import DataLoading from 'src/components/DataLoading/DataLoading'
import { capitalise } from 'src/components/HopTimeline/HopTimeline'
import { QUERY1 as USER_REPORTS_QUERY } from 'src/components/Report/ReportsCell'
import SiteMetaCard from 'src/components/SiteMetaCard/SiteMetaCard'
import Tab from 'src/components/Tab/Tab'
import TabPanel from 'src/components/TabPanel/TabPanel'
import { userReportsAtom } from 'src/contexts/atoms'

// INSTANTIATING TIME AGO DEFAULT LOCALE
TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

const User = ({ user }) => {
  // SETTING LOCAL STATES
  const [tabValue, setTabValue] = useState(0)

  // SETTING MEDIA QUERY
  const isMobileViewport = useMediaQuery('(max-width:900px)')

  // GETTING ATOMIC STATES
  const [reports, setReports] = useRecoilState(userReportsAtom)

  // INITIALISING APOLLO CLIENT
  const client = useApolloClient()

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
   * @name setUserReports
   * @description METHOD TO LOAD USER REPORTS DATA
   * @returns {undefined} undefined
   */
  const setUserReports = async () => {
    await client
      .query({
        query: USER_REPORTS_QUERY,
        variables: {
          id: 'bba8c3b0-fc14-43b0-a2fb-4ab8a8314d46',
        },
      })
      .then((res) => {
        setReports(res.data.userReports)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    if (reports === null || reports === undefined) setUserReports()
  }, [reports])

  return (
    <Box className="user-account-container">
      <Box className="user-account-header">
        <Box
          className="user-account-header-image-container"
          sx={(theme) => {
            return { border: `1px solid ${theme.palette.divider}` }
          }}
        >
          <img
            src="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1685999029/An_illustration_of_lush_gren_mountain_forest_again-transformed_naqdxt.jpg"
            className="user-header-img"
            alt="Lush green mountains"
          />
        </Box>
        <Box className="user-avatar-info-container">
          <img
            src={`https://api.dicebear.com/6.x/avataaars-neutral/svg?seed=${user.userName}`}
            className="user-avatar-img"
            alt="User Account Avatar"
          />
          <Box className="user-info-container">
            <Typography variant="h5" className="user-display-name">
              {user.displayName}
            </Typography>
            <Typography variant="body2" color="grey">
              @{user.userName} / {capitalise(user.accountType)}
            </Typography>
            <Typography variant="body2" color="grey">
              Joined {timeAgo.format(new Date(user.createdAt))}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="user-account-body">
        <Tabs
          value={tabValue}
          onChange={setTab}
          TabIndicatorProps={{
            sx: { display: 'none' },
          }}
          centered={isMobileViewport}
        >
          <Tab
            label="Your reports"
            icon={<Assessment fontSize="small" />}
            iconPosition="start"
          />
          <Tab
            label={'Your projects'}
            icon={<Inventory2 fontSize="small" />}
            iconPosition="start"
            disabled
          />
        </Tabs>
        <TabPanel value={0} className="user-tab" index={tabValue}>
          {/* LOADING STATE */}
          {reports === null && (
            <Skeleton variant="rectangular" className="user-data-skeleton" />
          )}

          {/*  */}
          {reports === undefined && (
            <DataLoading
              title="Reports Error"
              subtitle="An error occured while loading your report"
              gray={true}
              imgUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1685743033/emptyPerformance_rbqkus.png"
            />
          )}
          {reports && reports.length == 0 && (
            <DataLoading
              title="No Reports"
              subtitle="Couldn't find any reports for your account"
              gray={true}
              imgUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/v1686058485/empty-user-reports_xbcf3b.png"
            />
          )}
          {reports && reports.length > 0 && (
            <Box className="explore-content-container">
              {reports
                .filter((report) => {
                  if (
                    report.siteMeta.ogTitle ||
                    report.siteMeta.ogDescription ||
                    report.siteMeta.twitterDescription ||
                    report.siteMeta.description
                  )
                    return true
                })
                .map((report, index) => {
                  // SETTING LOCAL VARIABLES
                  const scores = {
                    fcp: report.fcpScore,
                    lcp: report.lcpScore,
                    cls: report.clsScore,
                    tbt: report.tbtScore,
                    tti: report.ttiScore,
                    speedIndex: report.speedIndexScore,
                  }

                  return (
                    <SiteMetaCard
                      component={RedwoodLink}
                      to={routes.report({ id: report.id })}
                      className="reports-card"
                      key={index}
                      url={report.url}
                      finalUrl={report.finalUrl}
                      siteMeta={report.siteMeta}
                      Region={report.Region}
                      createdAt={report.createdAt}
                      scores={scores}
                    />
                  )
                })}
            </Box>
          )}
        </TabPanel>
      </Box>
    </Box>
  )
}

export default User
