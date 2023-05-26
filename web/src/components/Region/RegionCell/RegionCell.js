import Region from 'src/components/Region/Region'

export const QUERY = gql`
  query FindRegionById($id: String!) {
    region: region(id: $id) {
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

export const Empty = () => <div>Region not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ region }) => {
  return <Region region={region} />
}
