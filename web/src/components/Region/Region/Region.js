// IMPORTING PACKAGE/MODULES
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum, jsonDisplay, timeTag } from 'src/lib/formatters'

// QUERIES AND MUTATIONS
// MUTATION TO DELETE A REGION
const DELETE_REGION_MUTATION = gql`
  mutation DeleteRegionMutation($id: String!) {
    deleteRegion(id: $id) {
      id
    }
  }
`

const Region = ({ region }) => {
  const [deleteRegion] = useMutation(DELETE_REGION_MUTATION, {
    onCompleted: () => {
      toast.success('Region deleted')
      navigate(routes.regions())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete region ' + id + '?')) {
      deleteRegion({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Region {region.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{region.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(region.createdAt)}</td>
            </tr>
            <tr>
              <th>Update at</th>
              <td>{timeTag(region.updateAt)}</td>
            </tr>
            <tr>
              <th>Expiry at</th>
              <td>{timeTag(region.expiryAt)}</td>
            </tr>
            <tr>
              <th>Provider type</th>
              <td>{formatEnum(region.providerType)}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{region.name}</td>
            </tr>
            <tr>
              <th>Region name</th>
              <td>{region.regionName}</td>
            </tr>
            <tr>
              <th>Auth key</th>
              <td>{region.authKey}</td>
            </tr>
            <tr>
              <th>Ip address</th>
              <td>{region.ipAddress}</td>
            </tr>
            <tr>
              <th>Port no</th>
              <td>{region.portNo}</td>
            </tr>
            <tr>
              <th>Machine config</th>
              <td>{jsonDisplay(region.machineConfig)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editRegion({ id: region.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(region.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Region
