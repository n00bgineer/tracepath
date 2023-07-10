// IMPORTING PACKAGES/MODULES
import { useEffect } from 'react'

import { useApolloClient } from '@apollo/client'
import { useRecoilState } from 'recoil'

import { useMutation } from '@redwoodjs/web'

import { QUERY as REGIONS_QUERY } from 'src/components/Region/RegionsCell/RegionsCell'
import ReportForm from 'src/components/Report/ReportForm'
import { regionsAtom, reportAtom, reportLoadingAtom } from 'src/contexts/atoms'

// QUERIES AND MUTATIONS
// MUTATION TO CREATE A REPORT
const CREATE_REPORT_MUTATION = gql`
  mutation CreateReportMutation($input: CreateReportInput!) {
    createReport(input: $input) {
      id
      createdAt
      reportVersion
      lhVersion
      executionTime
      regionName
      url
      finalUrl
      traceroute
      fcpScore
      fcpValue
      lcpScore
      lcpValue
      tbtScore
      tbtValue
      ttiScore
      ttiValue
      clsScore
      srtValue
      srtItems
      speedIndexScore
      speedIndexValue
      bootupTimeScore
      bootupTimeValue
      bootupTimeItems
      bootupTimeSummary
      thirdPartyItems
      thirdPartySummary
      siteMeta
      User {
        userName
      }
      Region {
        name
      }
    }
  }
`

const NewReport = () => {
  // GETTING ATOMIC STATES
  const [report, setReport] = useRecoilState(reportAtom)
  const [regions, setRegions] = useRecoilState(regionsAtom)
  const [loading, setLoading] = useRecoilState(reportLoadingAtom)

  // INITIALISING APOLLO CLIENT
  const client = useApolloClient()

  // CREATING GQL MUTATION
  const [createReport, { error }] = useMutation(CREATE_REPORT_MUTATION, {
    onCompleted: (data) => {
      setLoading(false)
      setReport(data.createReport)
    },
    onError: (error) => {
      setLoading(false)
      console.error(error.message)
    },
  })

  /**
   * @name onSave
   * @description METHOD TO SAVE CONTENT
   * @param {*} input INPUT OBJECT
   * @returns {Object} REPORT
   */
  const onSave = async (input) => {
    setReport(null)
    setLoading(true)
    return await createReport({ variables: { input } })
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
        console.error(error)
      })
  }

  // SETTING SIDE EFFECTS
  useEffect(() => {
    // LOADING REGIONS DATA
    if (regions === null) setRegionsLoad()
  }, [])

  return (
    <ReportForm
      onSave={onSave}
      loading={loading}
      error={error}
      regions={regions}
    />
  )
}

export default NewReport
