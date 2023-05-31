// IMPORTING PACKAGES/MODULES
import { useEffect, useRef, useState } from 'react'

import { Box, Typography } from '@mui/material'
import Globe from 'react-globe.gl'

import ReportData from 'src/components/ReportData/ReportData'

import 'src/components/Report/ReportForm/reportForm.css'

const Report = ({ report }) => {
  // SETTING REF
  const globeContainerRef = useRef(null)

  useEffect(() => {
    globeContainerRef.current = document.getElementsByClassName(
      'report-globe-container'
    )
  }, [window.innerWidth])
  return (
    <Box className="dashboard report-form-globe-container">
      <Box
        className="report-form-container"
        sx={(theme) => {
          return { borderRight: `1px solid ${theme.palette.divider}` }
        }}
      >
        {/* METADTA */}
        <Box className="page-description-container">
          <Typography variant="h2" className="page-title">
            Explore Report
          </Typography>
          <Typography variant="body2" className="report-subtitle">
            Every report can be categorized into two parts: (a) Performance
            Analysis & (b) Security Tracerouting.
          </Typography>
        </Box>

        {/* REPORT OUTPUT */}
        {report && <ReportData data={report} hideLink={true} />}
      </Box>
      <div className="report-globe-container" ref={globeContainerRef}>
        <Globe
          projection="equirectangular"
          globeImageUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/v1685334753/earth-blue-marble_ype7nq.jpg"
          bumpImageUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/v1685335416/earth-topology_q6brg8.png"
          backgroundImageUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/v1685335571/night-sky_hplesi.png"
          width={(window.innerWidth - 81) * 0.667}
          height={globeContainerRef.current?.offsetHeight}
          showAtmosphere={true}
        />
      </div>
    </Box>
  )
}

export default Report
