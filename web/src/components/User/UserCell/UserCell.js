// IMPORTING PACKAGES/MODULES
import { routes } from '@redwoodjs/router'

import ScreenLoading from 'src/components/ScreenLoading/ScreenLoading'
import User from 'src/components/User/User'

// QUERIES AND MUTATIONS
// QUERY TO FETCH A USER BY ID
export const QUERY = gql`
  query FindUserById($id: String!) {
    user: user(id: $id) {
      id
      guid
      createdAt
      accountType
      subscriptionType
      userName
      email
      displayName
    }
  }
`

export const Loading = () => {
  return (
    <ScreenLoading
      imgUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1683873993/tracepath/assets/logo1-cropped_hcmo16.png"
      title="Loading account"
      subtitle="Retrieving your account information"
    />
  )
}

export const Empty = () => {
  return (
    <ScreenLoading
      imgUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1683873993/tracepath/assets/logo1-cropped_hcmo16.png"
      title="No user account found"
      subtitle=" There are no user accounts associated with your credentials"
      btnLink={routes.landing()}
      btnText="Go back"
    />
  )
}

export const Failure = ({ error }) => {
  console.error(error.message)
  return (
    <ScreenLoading
      imgUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1683873993/tracepath/assets/logo1-cropped_hcmo16.png"
      title="Something went wrong"
      subtitle="If the problem persists, please contact our support team for further assistance"
      errorLink={routes.landing()}
      errorText="Go back"
    />
  )
}

export const Success = ({ user }) => {
  return <User user={user} />
}
