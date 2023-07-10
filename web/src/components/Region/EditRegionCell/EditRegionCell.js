// IMPORTING PACKAGE/MODULES
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RegionForm from 'src/components/Region/RegionForm'

// QUERIES AND MUTATIONS
// REGIONS FETCH QUERY
export const QUERY = gql`
  query EditRegionById($id: String!) {
    region: region(id: $id) {
      name
      regionName
    }
  }
`

// REGION UPDATE MUTATION
const UPDATE_REGION_MUTATION = gql`
  mutation UpdateRegionMutation($id: String!, $input: UpdateRegionInput!) {
    updateRegion(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ region }) => {
  const [updateRegion, { loading, error }] = useMutation(
    UPDATE_REGION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Region updated')
        navigate(routes.regions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateRegion({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Region {region?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <RegionForm
          region={region}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
