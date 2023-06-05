// IMPORTING PACKAGES/MODULES
import { routes } from '@redwoodjs/router'

import Reports from 'src/components/Report/Reports'
import ScreenLoading from 'src/components/ScreenLoading/ScreenLoading'

export const QUERY = gql`
  query FindReports {
    reports {
      id
      url
      createdAt
      finalUrl
      fcpScore
      lcpScore
      tbtScore
      ttiScore
      clsScore
      speedIndexScore
      bootupTimeScore
      siteMeta
      User {
        userName
      }
      Region {
        name
      }
    }
  }
`

export const Loading = () => {
  return (
    <ScreenLoading
      imgUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1683873993/tracepath/assets/logo1-cropped_hcmo16.png"
      title="Fetching Curated Reports"
      subtitle="Discovering curated performance and security insights of various web apps"
    />
  )
}

export const Empty = () => {
  return (
    <ScreenLoading
      imgUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1683873993/tracepath/assets/logo1-cropped_hcmo16.png"
      title="No curated reports"
      subtitle="Currently, there are no curated performance and security reports to showcase"
      btnLink={routes.generate()}
      btnText="Generate Report"
    />
  )
}

export const Failure = ({ error }) => {
  console.log(error.message)
  return (
    <ScreenLoading
      imgUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1683873993/tracepath/assets/logo1-cropped_hcmo16.png"
      title="Something went wrong"
      subtitle="If the problem persists, please contact our support team for further assistance"
      errorLink={routes.generate()}
      errorText="Go back"
    />
  )
}

export const Success = ({ reports }) => {
  return <Reports reports={reports} />
}
