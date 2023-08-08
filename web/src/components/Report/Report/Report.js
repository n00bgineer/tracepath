// IMPORTING PACKAGES/MODULES
import { useEffect, useRef, useState } from 'react'

import { Box, Typography } from '@mui/material'
import Globe from 'react-globe.gl'

import ReportData from 'src/components/ReportData/ReportData'

import 'src/components/Report/ReportForm/reportForm.css'

const Report = ({ report }) => {
  // SETTING LOCAL VARIABLES
  // STORING HTML MARKER
  const markerSvg = `<div class="blinking-dot">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="70" height="70" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);">
  <defs>
    <clipPath id="__lottie_element_2">
      <rect width="20" height="20" x="0" y="0"></rect>
    </clipPath>
  </defs>
  <g clip-path="url(#__lottie_element_2)">
    <g transform="matrix(0.015766000375151634,0,0,0.015766000375151634,9.850639343261719,10.036055564880371)" opacity="0.77" style="display: block;">
      <g opacity="1" transform="matrix(0.9719499945640564,0,0,0.9719499945640564,11.178000450134277,-2.697000026702881)">
        <path fill="#ed6c02" fill-opacity="1" d="M0,-165.92750549316406 C91.57539367675781,-165.92750549316406 165.92750549316406,-91.57539367675781 165.92750549316406,0 C165.92750549316406,91.57539367675781 91.57539367675781,165.92750549316406 0,165.92750549316406 C-91.57539367675781,165.92750549316406 -165.92750549316406,91.57539367675781 -165.92750549316406,0 C-165.92750549316406,-91.57539367675781 -91.57539367675781,-165.92750549316406 0,-165.92750549316406z"></path>
        <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="#ed6c02" stroke-opacity="1" stroke-width="0" d="M0,-165.92750549316406 C91.57539367675781,-165.92750549316406 165.92750549316406,-91.57539367675781 165.92750549316406,0 C165.92750549316406,91.57539367675781 91.57539367675781,165.92750549316406 0,165.92750549316406 C-91.57539367675781,165.92750549316406 -165.92750549316406,91.57539367675781 -165.92750549316406,0 C-165.92750549316406,-91.57539367675781 -91.57539367675781,-165.92750549316406 0,-165.92750549316406z"></path>
      </g>
    </g>
    <g transform="matrix(0.024961085990071297,0,0,0.024961085990071297,9.703012466430664,10.071656227111816)" opacity="0.27" style="display: block;">
      <g opacity="1" transform="matrix(0.9719499945640564,0,0,0.9719499945640564,11.178000450134277,-2.697000026702881)">
        <path fill="#ed6c02" fill-opacity="1" d="M0,-165.92750549316406 C91.57539367675781,-165.92750549316406 165.92750549316406,-91.57539367675781 165.92750549316406,0 C165.92750549316406,91.57539367675781 91.57539367675781,165.92750549316406 0,165.92750549316406 C-91.57539367675781,165.92750549316406 -165.92750549316406,91.57539367675781 -165.92750549316406,0 C-165.92750549316406,-91.57539367675781 -91.57539367675781,-165.92750549316406 0,-165.92750549316406z"></path>
        <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="#ed6c02" stroke-opacity="1" stroke-width="0" d="M0,-165.92750549316406 C91.57539367675781,-165.92750549316406 165.92750549316406,-91.57539367675781 165.92750549316406,0 C165.92750549316406,91.57539367675781 91.57539367675781,165.92750549316406 0,165.92750549316406 C-91.57539367675781,165.92750549316406 -165.92750549316406,91.57539367675781 -165.92750549316406,0 C-165.92750549316406,-91.57539367675781 -91.57539367675781,-165.92750549316406 0,-165.92750549316406z"></path>
      </g>
    </g>
  </g>
</svg>
<div class="marker-subcontainer">
  <div class="city-country">
    <span class="city"></span>
    <span class="country"></span>
  </div>
  <div class="lat-long">
    <span class="lat"></span>
    <span class="long"></span>
  </div>
</div>
</div>`

  // SETTING LOCAL STATES
  const [arcsData, setArcsData] = useState([]) // STORING ARC DATA
  const [pointData, setPointData] = useState([]) // STORING POINTS DATA

  // SETTING REFERENCES
  const globeContainerRef = useRef(null) // STORING REFERENCE TO GLOBE CONTAINER

  // METHODS
  /**
   * @name transformHopData
   * @description METHOD TO TRANSFORM HOP DATA
   * @returns {undefined} undefined
   */
  const transformHopData = () => {
    const hops = report.traceroute.hops
    // FILTERING OUT NON-GEOLOCATED ADDRESSES
    const geolocatedAddresses = hops.filter((hop) => {
      if (hop.type === 'GEOLOCATED') return true
    })

    // FILTERING OUT UNDEFINED VALUES
    let arcsData = geolocatedAddresses.filter((arcDatum) => {
      if (arcDatum !== undefined) return true
    })

    // ITERATING THROUGH INDIVIDUAL LAT & LONG AND STORING UNIQUE COORDINATES
    const uniqueCoordinates = []
    arcsData.forEach((arcsDatum) => {
      const { latitude, longitude, city, country } = arcsDatum.data
      if (latitude !== undefined && longitude !== undefined) {
        const coordinate = {
          lat: latitude,
          lng: longitude,
          city: city,
          country: country,
        }
        if (
          !uniqueCoordinates.some(
            (coord) => coord.lat === latitude && coord.lng === longitude
          )
        ) {
          uniqueCoordinates.push(coordinate)
        }
      }
    })

    // TRANSFORMING ARC DATA INTO REQUIRED FORM
    arcsData = arcsData
      .map((arcDatum, index, arcData) => {
        if (index !== arcData.length - 1) {
          return {
            startLat: arcDatum.data.latitude,
            startLng: arcDatum.data.longitude,
            endLat: arcData[index + 1].data.latitude,
            endLng: arcData[index + 1].data.longitude,
            color: '#ed6c02',
          }
        }
      })
      .filter((arcDatum) => {
        if (arcDatum !== undefined) return true
      })

    // SETTING POINTS
    setPointData(uniqueCoordinates)

    // SETTING ARCS
    setArcsData(arcsData)
  }

  /**
   * @name findCoordinateByIndex
   * @description METHOD TO RETURN ARRAY INDEX FOR GIVEN COORDINATE VALUE
   * @param {*} coordinates COORDINATES ARRAY
   * @param {*} coordinate COORDINATE OBJECT
   * @returns {Int} INDEX
   */
  const findCoordinateByIndex = (coordinates, coordinate) => {
    for (let index = 0; index < coordinates.length; index++) {
      if (
        coordinates[index].lat === coordinate.lat &&
        coordinates[index].lng === coordinate.lng &&
        coordinates[index].city === coordinate.city &&
        coordinates[index].country === coordinate.country
      )
        return index
    }
    return -1 // Object not found
  }

  /**
   * @name setHTMLElement
   * @description METHOD TO SET HTML ELEMENT
   * @param {*} d DATA
   * @returns {Node} HTML ELEMENT
   */
  const setHTMLElement = (d) => {
    const index = findCoordinateByIndex(pointData, d)
    const element = document.createElement('div')
    element.classList.add(`marker-container${index}`)
    element.innerHTML = markerSvg

    element.style.color = d.color
    element.style.width = `${d.size}px`
    element.style['pointer-events'] = 'auto'
    element.style.cursor = 'pointer'
    element.onmouseover = () => {
      const markerSubcontainerElement = document.querySelector(
        `.marker-container${index} .marker-subcontainer`
      )
      const cityElement = document.querySelector(
        `.marker-container${index} .city`
      )
      const countryElement = document.querySelector(
        `.marker-container${index} .country`
      )
      const latElement = document.querySelector(
        `.marker-container${index} .lat`
      )
      const longElement = document.querySelector(
        `.marker-container${index} .long`
      )
      if (d.city) cityElement.innerHTML = `${d.city}, `
      if (d.country) countryElement.innerHTML = `${d.country}`
      if (d.lat) latElement.innerHTML = `${d.lat}, `
      if (d.lng) longElement.innerHTML = `${d.lng}`
      markerSubcontainerElement.style.visibility = 'visible'
    }
    element.onmouseout = () => {
      const markerSubcontainerElement = document.querySelector(
        `.marker-container${index} .marker-subcontainer`
      )
      markerSubcontainerElement.style.visibility = 'hidden'
    }

    return element
  }

  // SETTING SIDE EFFECTS
  useEffect(() => {
    globeContainerRef.current = document.getElementsByClassName(
      'report-globe-container'
    )
    // SHOWING TRANSFORMATION DATA
    if (report !== null) transformHopData()
  }, [])

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
            Analysis & (b) Security Tracerouting
          </Typography>
        </Box>

        {/* REPORT OUTPUT */}
        {report && (
          <ReportData data={report} hideLink={true} pointData={pointData} />
        )}
      </Box>
      <div className="report-globe-container" ref={globeContainerRef}>
        <Globe
          projection="equirectangular"
          globeImageUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/v1685334753/tracepath/assets/earth-blue-marble_ype7nq.jpg"
          bumpImageUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/v1685335416/tracepath/assets/earth-topology_q6brg8.png"
          backgroundImageUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/v1685335571/tracepath/assets/night-sky_hplesi.png"
          width={(window.innerWidth - 81) * 0.667}
          height={globeContainerRef.current?.offsetHeight}
          showAtmosphere={true}
          center={{ lat: 11, lng: 11 }}
          arcsData={arcsData}
          arcColor="color"
          arcDashLength={3}
          arcDashGap={0.5}
          arcStroke={0.65}
          arcDashAnimateTime={500}
          htmlElementsData={pointData}
          htmlElement={setHTMLElement}
          pointAltitude={0}
        />
      </div>
    </Box>
  )
}

export default Report
