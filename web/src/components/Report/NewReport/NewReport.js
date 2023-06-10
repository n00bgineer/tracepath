// IMPORTING PACKAGES/MODULES

import { useRecoilState } from 'recoil'

import { useMutation } from '@redwoodjs/web'

import ReportForm from 'src/components/Report/ReportForm'
import { reportAtom, reportLoadingAtom } from 'src/contexts/atoms'

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
  const [loading, setLoading] = useRecoilState(reportLoadingAtom)

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

  const onSave = async (input) => {
    setReport(null)
    setLoading(true)
    return await createReport({ variables: { input } })
  }

  return <ReportForm onSave={onSave} loading={loading} error={error} />
}

export default NewReport
