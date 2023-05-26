import { Link, routes } from '@redwoodjs/router'

import Regions from 'src/components/Region/Regions'

export const QUERY = gql`
  query FindRegions {
    regions {
      id
      createdAt
      updateAt
      expiryAt
      providerType
      name
      regionName
      authKey
      ipAddress
      portNo
      machineConfig
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No regions yet. '}
      <Link to={routes.newRegion()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ regions }) => {
  return <Regions regions={regions} />
}
