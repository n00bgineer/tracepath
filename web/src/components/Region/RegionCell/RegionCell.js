// IMPORTING PACKAGES/MOFDULES
import Region from 'src/components/Region/Region'

// QUERIES AND MUTATIONS
// QUERY TO FIND A MUTATION BY ID
export const QUERY = gql`
  query FindRegionById($id: String!) {
    region: region(id: $id) {
      name
      regionName
      status
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
