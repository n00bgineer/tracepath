import { Link, routes } from '@redwoodjs/router'

import Reports from 'src/components/Report/Reports'

export const QUERY = gql`
  query FindReports {
    reports {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No reports yet. '}
      <Link to={routes.generate()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ reports }) => {
  return <Reports reports={reports} />
}
