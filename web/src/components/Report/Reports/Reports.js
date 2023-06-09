// IMPORTING PACAKGES/MODULES
import { Box, Typography } from '@mui/material'

import { Link as RedwoodLink, routes } from '@redwoodjs/router'

import './reports.css'
import SiteMetaCard from 'src/components/SiteMetaCard/SiteMetaCard'

const ReportsList = ({ reports }) => {
  return (
    <Box className="explore-container">
      <Box className="dashboard">
        <Typography variant="h2" className="page-title">
          Curated Reports
        </Typography>
        <Typography variant="body2" className="report-subtitle">
          The color bar below the cards represents the performance metrics.
          Darker the shade, better the performance metrics
        </Typography>
      </Box>
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
    </Box>
  )
}

export default ReportsList
