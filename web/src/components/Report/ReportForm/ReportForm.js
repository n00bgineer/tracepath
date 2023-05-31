// IMPORTING PACKAGES/MODULES
import { useEffect, useRef, useState } from 'react'

import { useApolloClient } from '@apollo/client'
import { Assessment, Link, Storage } from '@mui/icons-material'
import { Box, Skeleton, Typography } from '@mui/material'
import Globe from 'react-globe.gl'
import { useRecoilState } from 'recoil'
import './reportForm.css'

import Alert from 'src/components/Alert/Alert'
import Button from 'src/components/Button/Button'
import Input from 'src/components/Input/Input'
import Loading from 'src/components/Loading/Loading'
import { QUERY as REGIONS_QUERY } from 'src/components/Region/RegionsCell/RegionsCell'
import ReportData from 'src/components/ReportData/ReportData'
import Select from 'src/components/Select/Select'
import { reportAtom, regionsAtom } from 'src/contexts/atoms'

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

const ReportForm = ({ loading = true, onSave, error }) => {
  // SETTING LOCAL VARIABLES
  const loadingContainerItems = [
    {
      label: "It might take a minute to load your report, so here's a Panda",
      imgUrl:
        'https://res.cloudinary.com/dgu9rv3om/image/upload/v1685369472/panda_mi7tab.png',
    },
    {
      label: "It might take a minute to load your report, so here's a Rhea",
      imgUrl:
        'https://res.cloudinary.com/dgu9rv3om/image/upload/v1685369489/fawn_dvhyuz.png',
    },
  ]
  const randomLoadingContainerItem =
    loadingContainerItems[
      Math.floor(Math.random() * loadingContainerItems.length)
    ]

  // GETTING ATOMIC CONTEXT
  const [report, setReport] = useRecoilState(reportAtom)
  const [regions, setRegions] = useRecoilState(regionsAtom)

  // SETTING LOCAL STATE
  const [url, setUrl] = useState('') // SETTING URL
  const [selectedRegion, setSelectedRegion] = useState('default') // SETTING SELECTED REGION

  // INPUT FIELD VALIDATION STATES
  const [urlErrorText, setUrlErrorText] = useState('')
  const [submitErrorText, setSubmitErrorText] = useState('')

  // INITIALISING APOLLO CLIENT
  const client = useApolloClient()

  // SETTING REF
  const globeContainerRef = useRef(null)

  // METHODS
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
   * @name onSubmit
   * @description METHOD TO SUBMIT DATA
   * @param {*} event EVENT OBJECT
   * @returns {undefined} undefined
   */
  const onSubmit = async (event) => {
    event.preventDefault()
    setSubmitErrorText('')
    if (selectedRegion === null || selectedRegion === 'default')
      setSubmitErrorText('Please select a region to continue')
    else if (urlErrorText !== '' || url.length === 0)
      setSubmitErrorText('Please enter an appropriate URL')
    else {
      if (error) {
        setSubmitErrorText(error.message)
      } else {
        // STORING FORM DATA
        const data = {
          url: url,
          regionName: selectedRegion,
        }
        await onSave(data)
          .then(({ data, errors }) => {
            if (!errors) {
              setSelectedRegion('default')
              setUrl('')
              setReport(data.createReport)
            } else setSubmitErrorText(errors[0]['message'])
          })
          .catch((error) => {
            console.log(error)
            setSubmitErrorText('Something went wrong')
          })
      }
    }
  }

  /**
   * @name setRegionsLoad
   * @description METHOD TO LOAD REGIONS DATA
   * @returns {undefined} undefined
   */
  const setRegionsLoad = async () => {
    await client
      .query({
        query: REGIONS_QUERY,
      })
      .then((res) => {
        setRegions(
          res.data.regions.map((region) => {
            return {
              label: region.name,
              value: region.regionName,
              disabled: region.status === 'OK' ? false : true,
              chipLabel: region.status === 'OK' ? '🟢 ONLINE' : '🔴 OFFLINE',
              chipColor: region.status === 'OK' ? 'primary' : 'error',
            }
          })
        )
      })
      .catch((error) => {
        console.error(error.message)
      })
  }

  // SETTING SIDE EFFECTS
  useEffect(() => {
    // SETTING GLOBE CONTAINER REF
    globeContainerRef.current = document.getElementsByClassName(
      'report-globe-container'
    )
    // LOADING REGIONS DATA
    if (regions === null) setRegionsLoad()
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
            Generate Reports
          </Typography>
          <Typography variant="body2" className="page-subtitle">
            Leverage comprehensive reports to analyze performance metrics and
            make informed decisions for your web application&rsquo;s
            optimization
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
              margin="small"
              fullWidth={true}
              variant="contained"
              size="small"
              startIcon={<Assessment />}
              onClick={onSubmit}
              disabled={loading}
            >
              Get Insights
            </Button>
            {submitErrorText !== '' && (
              <Alert fullWidth={true} margin="large" severity="error">
                {submitErrorText}
              </Alert>
            )}
          </form>
        ) : (
          <Skeleton variant="rectangular" className="report-form-skeleton" />
        )}

        {/* LOADING CONTAINER */}
        {loading && (
          <Loading
            title="Generating report"
            subtitle={randomLoadingContainerItem.label}
            gray={true}
            imgUrl={randomLoadingContainerItem.imgUrl}
          />
        )}

        {/* REPORT OUTPUT */}
        {report && !loading && <ReportData data={report} />}

        {/* TODO: ADD EXLPORE SNIPPET */}
      </Box>
      <div className="report-globe-container" ref={globeContainerRef}>
        <Globe
          projection="equirectangular"
          globeImageUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/v1685334753/earth-blue-marble_ype7nq.jpg"
          bumpImageUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/v1685335416/earth-topology_q6brg8.png"
          backgroundImageUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/v1685335571/night-sky_hplesi.png"
          width={(window.innerWidth - 81) * 0.667}
          height={globeContainerRef.current?.offsetHeight}
          center={{ lat: 23.3441, lng: 85.3096 }}
        />
      </div>
    </Box>
  )
}

export default ReportForm
