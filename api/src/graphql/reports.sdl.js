export const schema = gql`
  type Report {
    id: String!
    userId: String!
    createdAt: DateTime!
    updateAt: DateTime!
    reportVersion: String!
    lhVersion: String
    executionTime: Float!
    isPrivate: Boolean
    isTracerouteError: Boolean
    isLighthouseError: Boolean
    regionName: String!
    url: String!
    finalUrl: String
    siteMeta: JSON
    traceroute: JSON
    fcpScore: Float
    fcpValue: Float
    lcpScore: Float
    lcpValue: Float
    tbtScore: Float
    tbtValue: Float
    ttiScore: Float
    ttiValue: Float
    clsScore: Float
    srtValue: Float
    srtItems: JSON
    speedIndexScore: Float
    speedIndexValue: Float
    bootupTimeScore: Float
    bootupTimeValue: Float
    bootupTimeItems: JSON
    bootupTimeSummary: JSON
    thirdPartyItems: JSON
    thirdPartySummary: JSON
    User: User!
    Region: Region!
  }

  type Query {
    reports: [Report!]! @skipAuth
    report(id: String!): Report @skipAuth
    userReports(id: String!): [Report!]! @requireAuth
  }

  input CreateReportInput {
    userId: String
    regionName: String!
    url: String!
  }

  input UpdateReportInput {
    userId: String
    updateAt: DateTime
    reportVersion: String
    lhVersion: String
    executionTime: Float
    isPrivate: Boolean
    isTracerouteError: Boolean
    isLighthouseError: Boolean
    regionName: String
    url: String
    finalUrl: String
    traceroute: JSON
    fcpScore: Float
    fcpValue: Float
    lcpScore: Float
    lcpValue: Float
    tbtScore: Float
    tbtValue: Float
    ttiScore: Float
    ttiValue: Float
    clsScore: Float
    srtValue: Float
    srtItems: JSON
    speedIndexScore: Float
    speedIndexValue: Float
    bootupTimeScore: Float
    bootupTimeValue: Float
    bootupTimeItems: JSON
    bootupTimeSummary: JSON
    thirdPartyItems: JSON
    thirdPartySummary: JSON
  }

  type Mutation {
    createReport(input: CreateReportInput!): Report! @requireAuth
    updateReport(id: String!, input: UpdateReportInput!): Report! @requireAuth
    deleteReport(id: String!): Report! @requireAuth
  }
`
