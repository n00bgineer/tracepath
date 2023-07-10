// IMPORTING PACKAGES/MODULES
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserForm from 'src/components/User/UserForm'

// QUERIES AND MUTATIONS
// MUTATION TO CREATE A NEW USER
export const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      guid
      createdAt
      accountType
      userName
      email
      displayName
    }
  }
`

// MUTATION TO SIGNIN BY GOOGLE
export const CREATE_GOOGLE_USER_MUTATION = gql`
  mutation CreateGoogleUserMutation($input: CreateUserInput!) {
    createGoogleUser(input: $input) {
      id
      guid
      createdAt
      accountType
      userName
      email
      displayName
    }
  }
`

const NewUser = () => {
  const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User created')
      navigate(routes.users())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createUser({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New User</h2>
      </header>
      <div className="rw-segment-main">
        <UserForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewUser
