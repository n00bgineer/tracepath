// IMPORTING PACKAGES/MODULES
import { useMutation } from '@redwoodjs/web'

import ReportForm from 'src/components/Report/ReportForm'

const CREATE_REPORT_MUTATION = gql`
  mutation CreateReportMutation($input: CreateReportInput!) {
    createReport(input: $input) {
      id
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
  const [createReport, { loading, error }] = useMutation(
    CREATE_REPORT_MUTATION,
    {
      onCompleted: () => console.log('REPORT CREATED'),
      onError: (error) => console.error(error.message),
    }
  )

  const onSave = async (input) => {
    return await createReport({ variables: { input } })
  }

  return <ReportForm onSave={onSave} loading={loading} error={error} />
}

export default NewReport
