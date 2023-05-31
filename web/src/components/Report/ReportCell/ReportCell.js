// IMPORTING PACKAGES/MODULES
import Report from 'src/components/Report/Report'

export const QUERY = gql`
  query FindReportById($id: String!) {
    report: report(id: $id) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Report not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ report }) => {
  return <Report report={report} />
}
