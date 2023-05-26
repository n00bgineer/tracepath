import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ReportForm from 'src/components/Report/ReportForm'

const CREATE_REPORT_MUTATION = gql`
  mutation CreateReportMutation($input: CreateReportInput!) {
    createReport(input: $input) {
      id
    }
  }
`

const NewReport = () => {
  const [createReport, { loading, error }] = useMutation(
    CREATE_REPORT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Report created')
        navigate(routes.reports())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createReport({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Report</h2>
      </header>
      <div className="rw-segment-main">
        <ReportForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewReport
