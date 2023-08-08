// IMPORTING PACKAGES/MODULES
import { useEffect, useRef, useState } from 'react'

import { Assessment, Link, Refresh, Storage } from '@mui/icons-material'
import { Box, Skeleton, Typography } from '@mui/material'
import { getAuth, sendEmailVerification } from 'firebase/auth'
import Globe from 'react-globe.gl'
import { useRecoilState } from 'recoil'
import './reportForm.css'

import Alert from 'src/components/Alert/Alert'
import Button from 'src/components/Button/Button'
import DataLoading from 'src/components/DataLoading/DataLoading'
import { capitalise } from 'src/components/HopTimeline/HopTimeline'
import IconButton from 'src/components/IconButton/IconButton'
import Input from 'src/components/Input/Input'
import ReportData from 'src/components/ReportData/ReportData'
import Select from 'src/components/Select/Select'
import { reportAtom, accountAtom } from 'src/contexts/atoms'
/**
 * @name validateUrl
 * @description METHOD TO VALIDATE URL
 * @param {*} url URL VALUE
 * @returns {Boolean} WHETHER URL IS CORRECT OR NOT
 */
const validateUrl = (url) => {
  const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/
  return urlPattern.test(url)
}

const ReportForm = ({ loading, onSave, regions }) => {
  // SETTING LOCAL VARIABLES
  // STORING HTML
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

  // STORING LOADING  DATA CONTAINER ITEMS
  const loadingContainerItems = [
    {
      label: "It might take a minute to load your report, so here's a Panda",
      imgUrl:
        'https://res.cloudinary.com/dgu9rv3om/image/upload/v1685369472/tracepath/assets/panda_mi7tab.png',
    },
    {
      label: "It might take a minute to load your report, so here's a Rhea",
      imgUrl:
        'https://res.cloudinary.com/dgu9rv3om/image/upload/v1685369489/tracepath/assets/fawn_dvhyuz.png',
    },
  ]
  const randomLoadingContainerItem =
    loadingContainerItems[
      Math.floor(Math.random() * loadingContainerItems.length)
    ]

  // GETTING ATOMIC STATES
  const [account] = useRecoilState(accountAtom)
  const [report] = useRecoilState(reportAtom)

  // SETTING LOCAL STATE
  const [url, setUrl] = useState('') // SETTING URL
  const [arcsData, setArcsData] = useState([]) // STORING ARC INFO
  const [pointData, setPointData] = useState([]) // STORING POINTS DATA
  const [selectedRegion, setSelectedRegion] = useState('default') // SETTING SELECTED REGION

  // INPUT FIELD VALIDATION STATES
  const [urlErrorText, setUrlErrorText] = useState('')
  const [submitErrorText, setSubmitErrorText] = useState('')
  const [accountValidationErrorText, setAccountValidationErrorText] =
    useState('')

  // GETTING AUTH CONTEXT
  const auth = getAuth()
  const currentUser = auth.currentUser

  // SETTING REFERENCES
  const globeContainerRef = useRef(null)

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
      if (d.city) countryElement.innerHTML = `${d.country}`
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

  /**
   * @name setUrlField
   * @description METHOD TO SET EMAIL VALUE
   * @returns {undefined} undefined
   */
  const setUrlField = (event) => {
    setUrl(event.target.value)

    if (!validateUrl(event.target.value.trim()))
      setUrlErrorText(
        'URL format is incorrect (e.g. espn.com or https://espn.com)'
      )
    else setUrlErrorText('')
  }

  /**
   * @name setSelectedField
   * @description METHOD TO SET SELECTED FIELD
   * @param {*} event EVENT OBJECT
   * @returns {undefined} undefined
   */
  const setSelectedField = (event) => setSelectedRegion(event.target.value)

  /**
   * @name resetReportStates
   * @description METHOD TO RESET REPORT STATES
   * @returns {undefined} undefined
   */
  const resetReportStates = () => {
    // RESETTING STATES
    setArcsData([])
    setPointData([])
    setSubmitErrorText('')
    setAccountValidationErrorText('')
  }

  /**
   * @name resetFormStates
   * @description METHOD TO RESET FORM STATES
   * @returns {undefined} undefined
   */
  const resetFormStates = () => {
    // RESETTING STATES
    setUrl('')
    setSelectedRegion('default')
    setSubmitErrorText('')
  }

  /**
   * @name setVerifyMail
   * @description METHOD TO VERIFY MAIL
   * @returns {undefined} undefined
   */
  const setVerifyMail = async () => {
    // SENDING VERIFICATION MAIL
    await sendEmailVerification(currentUser)
      .then(() => {
        setAccountValidationErrorText(
          'Please check your mail & refresh upon verification'
        )
      })
      .catch(() => {
        setAccountValidationErrorText(
          'Error occured upon sending verification mail'
        )
      })
  }

  /**
   * @name onSubmit
   * @description METHOD TO SUBMIT DATA
   * @param {*} event EVENT OBJECT
   * @returns {undefined} undefined
   */
  const onSubmit = async (event) => {
    // PREVENTING DEFAULT ACTION
    event.preventDefault()
    resetReportStates()

    // BASIC CHECKS
    if (!currentUser.emailVerified)
      setAccountValidationErrorText('Please verify your account')
    else if (!account)
      setSubmitErrorText("Just a second! Account data hasn't loaded")
    else if (selectedRegion === null || selectedRegion === 'default')
      setSubmitErrorText('Please select a region to continue')
    else if (urlErrorText !== '' || url.length === 0)
      setSubmitErrorText('Please enter an appropriate URL')
    else {
      // STORING FORM DATA
      const data = {
        url: url.toLowerCase(),
        regionName: selectedRegion,
        userId: account.id,
      }
      await onSave(data).then((response) => {
        const data = response.data
        const errors = response.errors
        if (!data) setSubmitErrorText(capitalise(errors.message))
      })
    }
  }

  // SETTING SIDE EFFECTS
  useEffect(() => {
    // SETTING GLOBE CONTAINER REFERENCE
    globeContainerRef.current = document.getElementsByClassName(
      'report-globe-container'
    )
  }, [])

  // REPORT LOAD SIDE EFFECT
  useEffect(() => {
    // SHOWING TRANSFORMATION DATA
    if (report !== null) transformHopData()
  }, [report])

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
            Generate Reports
          </Typography>
          <Typography variant="body2" className="page-subtitle">
            Leverage comprehensive reports to analyze various metrics and make
            informed decisions for your web application&rsquo;s performance and
            security
          </Typography>
        </Box>

        {/* FORM */}
        {regions !== null ? (
          <form>
            <Select
              fullWidth={true}
              margin="medium"
              label="📍 Select Server Location"
              placeholder="📍 Select Server Location"
              className="select-server"
              size="small"
              defaultValue="default"
              startAdornment={<Storage />}
              selectItems={regions}
              onChange={setSelectedField}
              disabled={loading}
              value={selectedRegion}
            />
            <Input
              placeholder="Enter URL"
              required={true}
              startAdornment={<Link />}
              fullWidth={true}
              value={url}
              margin="medium"
              color={urlErrorText !== '' ? 'error' : 'primary'}
              onInput={setUrlField}
              errorText={urlErrorText}
              label="url"
              size="small"
              disabled={loading}
            />
            <Button
              type="submit"
              margin="medium"
              fullWidth={true}
              variant="contained"
              size="small"
              startIcon={<Assessment />}
              onClick={onSubmit}
              disabled={loading}
            >
              Get Insights
            </Button>
            {accountValidationErrorText !== '' && (
              <Alert
                fullWidth={true}
                margin="large"
                severity="error"
                action={
                  <Button
                    size="small"
                    sx={{
                      color: 'common.white',
                      background: 'rgba(255, 255, 255, 0.3)',
                      backdropFilter: 'blur(10px)',
                    }}
                    onClick={setVerifyMail}
                  >
                    <Typography variant="body2">Verify</Typography>
                  </Button>
                }
              >
                {accountValidationErrorText}
              </Alert>
            )}
            {submitErrorText !== '' && (
              <Alert
                fullWidth={true}
                margin="large"
                severity="error"
                action={
                  <IconButton
                    size="small"
                    sx={{ color: 'common.white' }}
                    onClick={resetFormStates}
                  >
                    <Refresh />
                  </IconButton>
                }
              >
                {submitErrorText}
              </Alert>
            )}
          </form>
        ) : (
          <Skeleton variant="rectangular" className="report-form-skeleton" />
        )}

        {/* LOADING CONTAINER */}
        {loading && (
          <DataLoading
            title="Generating report"
            subtitle={randomLoadingContainerItem.label}
            imgUrl={randomLoadingContainerItem.imgUrl}
          />
        )}

        {/* REPORT OUTPUT */}
        {report && !loading && (
          <ReportData data={report} pointData={pointData} />
        )}

        {/* TODO: ADD EXLPORE SNIPPET */}
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

export default ReportForm
