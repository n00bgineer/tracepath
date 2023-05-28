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

  return <ReportForm onSave={onSave} loading={loading} error={error} />
}

export default NewReport
