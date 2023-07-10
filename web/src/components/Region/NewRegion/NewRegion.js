// IMPORTING PACKAGE/MODULES
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RegionForm from 'src/components/Region/RegionForm'

// QUERIES AND MUTATIONS
// CREATE NEW REGION MUTATION
const CREATE_REGION_MUTATION = gql`
  mutation CreateRegionMutation($input: CreateRegionInput!) {
    createRegion(input: $input) {
      id
    }
  }
`

const NewRegion = () => {
  const [createRegion, { loading, error }] = useMutation(
    CREATE_REGION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Region created')
        navigate(routes.regions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createRegion({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Region</h2>
      </header>
      <div className="rw-segment-main">
        <RegionForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRegion
