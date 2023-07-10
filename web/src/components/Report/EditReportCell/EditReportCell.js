// IMPORTING PACKAGE/MODULES
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ReportForm from 'src/components/Report/ReportForm'

// QUERIES AND MUTATIONS
// QUERY TO FETCH A REPORT BY ID
export const QUERY = gql`
  query EditReportById($id: String!) {
    report: report(id: $id) {
      id
      userId
      createdAt
      updateAt
      reportVersion
      lhVersion
      executionTime
      isPrivate
      isTracerouteError
      isLighthouseError
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
    }
  }
`

// MUTATION TO UPDATE THE REPORT
const UPDATE_REPORT_MUTATION = gql`
  mutation UpdateReportMutation($id: String!, $input: UpdateReportInput!) {
    updateReport(id: $id, input: $input) {
      id
      userId
      createdAt
      updateAt
      reportVersion
      lhVersion
      executionTime
      isPrivate
      isTracerouteError
      isLighthouseError
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
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ report }) => {
  const [updateReport, { loading, error }] = useMutation(
    UPDATE_REPORT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Report updated')
        navigate(routes.reports())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateReport({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Report {report?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ReportForm
          report={report}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
