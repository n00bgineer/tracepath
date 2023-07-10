// IMPORTING PACKAGES/MODULES
import { routes } from '@redwoodjs/router'

import Report from 'src/components/Report/Report'
import ScreenLoading from 'src/components/ScreenLoading/ScreenLoading'

// QUERIES AND MUTATIONS
// QUERY TO FETCH A REPORT BY ID
export const QUERY = gql`
  query FindReportById($id: String!) {
    report: report(id: $id) {
      id
      createdAt
      reportVersion
      lhVersion
      executionTime
      regionName
      url
      finalUrl
      traceroute
      fcpScore
      fcpValue
      lcpScore
      lcpValue
      tbtScore
      tbtValue
      ttiScore
      ttiValue
      clsScore
      srtValue
      srtItems
      speedIndexScore
      speedIndexValue
      bootupTimeScore
      bootupTimeValue
      bootupTimeItems
      bootupTimeSummary
      thirdPartyItems
      thirdPartySummary
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
      title="Loading report"
      subtitle="Unlock insights into your web app's performance and fortify its security"
    />
  )
}

export const Empty = () => {
  return (
    <ScreenLoading
      imgUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1683873993/tracepath/assets/logo1-cropped_hcmo16.png"
      title="No report found"
      subtitle="It seems there is no such report available at the moment. To generate a report, click on the button below"
      btnLink={routes.generate()}
      btnText="Generate Report"
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
      errorLink={routes.generate()}
      errorText="Go back"
    />
  )
}

export const Success = ({ report }) => {
  return <Report report={report} />
}
