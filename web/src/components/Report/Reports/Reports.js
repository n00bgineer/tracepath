import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Report/ReportsCell'
import {
  checkboxInputTag,
  jsonTruncate,
  timeTag,
  truncate,
} from 'src/lib/formatters'

const DELETE_REPORT_MUTATION = gql`
  mutation DeleteReportMutation($id: String!) {
    deleteReport(id: $id) {
      id
    }
  }
`

const ReportsList = ({ reports }) => {
  const [deleteReport] = useMutation(DELETE_REPORT_MUTATION, {
    onCompleted: () => {
      toast.success('Report deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete report ' + id + '?')) {
      deleteReport({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Created at</th>
            <th>Update at</th>
            <th>Report version</th>
            <th>Lh version</th>
            <th>Execution time</th>
            <th>Is private</th>
            <th>Is traceroute error</th>
            <th>Is lighthouse error</th>
            <th>Region name</th>
            <th>Url</th>
            <th>Final url</th>
            <th>Traceroute</th>
            <th>Fcp score</th>
            <th>Fcp value</th>
            <th>Lcp score</th>
            <th>Lcp value</th>
            <th>Tbt score</th>
            <th>Tbt value</th>
            <th>Tti score</th>
            <th>Tti value</th>
            <th>Cls score</th>
            <th>Srt value</th>
            <th>Srt items</th>
            <th>Speed index score</th>
            <th>Speed index value</th>
            <th>Bootup time score</th>
            <th>Bootup time value</th>
            <th>Bootup time items</th>
            <th>Bootup time summary</th>
            <th>Third party items</th>
            <th>Third party summary</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{truncate(report.id)}</td>
              <td>{truncate(report.userId)}</td>
              <td>{timeTag(report.createdAt)}</td>
              <td>{timeTag(report.updateAt)}</td>
              <td>{truncate(report.reportVersion)}</td>
              <td>{truncate(report.lhVersion)}</td>
              <td>{truncate(report.executionTime)}</td>
              <td>{checkboxInputTag(report.isPrivate)}</td>
              <td>{checkboxInputTag(report.isTracerouteError)}</td>
              <td>{checkboxInputTag(report.isLighthouseError)}</td>
              <td>{truncate(report.regionName)}</td>
              <td>{truncate(report.url)}</td>
              <td>{truncate(report.finalUrl)}</td>
              <td>{jsonTruncate(report.traceroute)}</td>
              <td>{truncate(report.fcpScore)}</td>
              <td>{truncate(report.fcpValue)}</td>
              <td>{truncate(report.lcpScore)}</td>
              <td>{truncate(report.lcpValue)}</td>
              <td>{truncate(report.tbtScore)}</td>
              <td>{truncate(report.tbtValue)}</td>
              <td>{truncate(report.ttiScore)}</td>
              <td>{truncate(report.ttiValue)}</td>
              <td>{truncate(report.clsScore)}</td>
              <td>{truncate(report.srtValue)}</td>
              <td>{truncate(report.srtItems)}</td>
              <td>{truncate(report.speedIndexScore)}</td>
              <td>{truncate(report.speedIndexValue)}</td>
              <td>{truncate(report.bootupTimeScore)}</td>
              <td>{truncate(report.bootupTimeValue)}</td>
              <td>{jsonTruncate(report.bootupTimeItems)}</td>
              <td>{jsonTruncate(report.bootupTimeSummary)}</td>
              <td>{jsonTruncate(report.thirdPartyItems)}</td>
              <td>{jsonTruncate(report.thirdPartySummary)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.report({ id: report.id })}
                    title={'Show report ' + report.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editReport({ id: report.id })}
                    title={'Edit report ' + report.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete report ' + report.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(report.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ReportsList
