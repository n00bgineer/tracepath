import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, jsonDisplay, timeTag } from 'src/lib/formatters'

const DELETE_REPORT_MUTATION = gql`
  mutation DeleteReportMutation($id: String!) {
    deleteReport(id: $id) {
      id
    }
  }
`

const Report = ({ report }) => {
  const [deleteReport] = useMutation(DELETE_REPORT_MUTATION, {
    onCompleted: () => {
      toast.success('Report deleted')
      navigate(routes.reports())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete report ' + id + '?')) {
      deleteReport({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Report {report.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{report.id}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{report.userId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(report.createdAt)}</td>
            </tr>
            <tr>
              <th>Update at</th>
              <td>{timeTag(report.updateAt)}</td>
            </tr>
            <tr>
              <th>Report version</th>
              <td>{report.reportVersion}</td>
            </tr>
            <tr>
              <th>Lh version</th>
              <td>{report.lhVersion}</td>
            </tr>
            <tr>
              <th>Execution time</th>
              <td>{report.executionTime}</td>
            </tr>
            <tr>
              <th>Is private</th>
              <td>{checkboxInputTag(report.isPrivate)}</td>
            </tr>
            <tr>
              <th>Is traceroute error</th>
              <td>{checkboxInputTag(report.isTracerouteError)}</td>
            </tr>
            <tr>
              <th>Is lighthouse error</th>
              <td>{checkboxInputTag(report.isLighthouseError)}</td>
            </tr>
            <tr>
              <th>Region name</th>
              <td>{report.regionName}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{report.url}</td>
            </tr>
            <tr>
              <th>Final url</th>
              <td>{report.finalUrl}</td>
            </tr>
            <tr>
              <th>Traceroute</th>
              <td>{jsonDisplay(report.traceroute)}</td>
            </tr>
            <tr>
              <th>Fcp score</th>
              <td>{report.fcpScore}</td>
            </tr>
            <tr>
              <th>Fcp value</th>
              <td>{report.fcpValue}</td>
            </tr>
            <tr>
              <th>Lcp score</th>
              <td>{report.lcpScore}</td>
            </tr>
            <tr>
              <th>Lcp value</th>
              <td>{report.lcpValue}</td>
            </tr>
            <tr>
              <th>Tbt score</th>
              <td>{report.tbtScore}</td>
            </tr>
            <tr>
              <th>Tbt value</th>
              <td>{report.tbtValue}</td>
            </tr>
            <tr>
              <th>Tti score</th>
              <td>{report.ttiScore}</td>
            </tr>
            <tr>
              <th>Tti value</th>
              <td>{report.ttiValue}</td>
            </tr>
            <tr>
              <th>Cls score</th>
              <td>{report.clsScore}</td>
            </tr>
            <tr>
              <th>Srt value</th>
              <td>{report.srtValue}</td>
            </tr>
            <tr>
              <th>Srt items</th>
              <td>{report.srtItems}</td>
            </tr>
            <tr>
              <th>Speed index score</th>
              <td>{report.speedIndexScore}</td>
            </tr>
            <tr>
              <th>Speed index value</th>
              <td>{report.speedIndexValue}</td>
            </tr>
            <tr>
              <th>Bootup time score</th>
              <td>{report.bootupTimeScore}</td>
            </tr>
            <tr>
              <th>Bootup time value</th>
              <td>{report.bootupTimeValue}</td>
            </tr>
            <tr>
              <th>Bootup time items</th>
              <td>{jsonDisplay(report.bootupTimeItems)}</td>
            </tr>
            <tr>
              <th>Bootup time summary</th>
              <td>{jsonDisplay(report.bootupTimeSummary)}</td>
            </tr>
            <tr>
              <th>Third party items</th>
              <td>{jsonDisplay(report.thirdPartyItems)}</td>
            </tr>
            <tr>
              <th>Third party summary</th>
              <td>{jsonDisplay(report.thirdPartySummary)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editReport({ id: report.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(report.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Report
