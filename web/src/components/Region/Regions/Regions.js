// IMPORTING PACKAGES/MOFDULES
import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Region/RegionsCell'
import { formatEnum, jsonTruncate, timeTag, truncate } from 'src/lib/formatters'

// QUERIES AND MUTATIONS
// MUTATION TO DELETE A REGION
const DELETE_REGION_MUTATION = gql`
  mutation DeleteRegionMutation($id: String!) {
    deleteRegion(id: $id) {
      id
    }
  }
`

const RegionsList = ({ regions }) => {
  const [deleteRegion] = useMutation(DELETE_REGION_MUTATION, {
    onCompleted: () => {
      toast.success('Region deleted')
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
    if (confirm('Are you sure you want to delete region ' + id + '?')) {
      deleteRegion({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Update at</th>
            <th>Expiry at</th>
            <th>Provider type</th>
            <th>Name</th>
            <th>Region name</th>
            <th>Auth key</th>
            <th>Ip address</th>
            <th>Port no</th>
            <th>Machine config</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {regions.map((region) => (
            <tr key={region.id}>
              <td>{truncate(region.id)}</td>
              <td>{timeTag(region.createdAt)}</td>
              <td>{timeTag(region.updateAt)}</td>
              <td>{timeTag(region.expiryAt)}</td>
              <td>{formatEnum(region.providerType)}</td>
              <td>{truncate(region.name)}</td>
              <td>{truncate(region.regionName)}</td>
              <td>{truncate(region.authKey)}</td>
              <td>{truncate(region.ipAddress)}</td>
              <td>{truncate(region.portNo)}</td>
              <td>{jsonTruncate(region.machineConfig)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.region({ id: region.id })}
                    title={'Show region ' + region.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editRegion({ id: region.id })}
                    title={'Edit region ' + region.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete region ' + region.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(region.id)}
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

export default RegionsList
