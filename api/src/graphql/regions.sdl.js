export const schema = gql`
  type Region {
    id: String!
    createdAt: DateTime!
    updateAt: DateTime!
    expiryAt: DateTime!
    providerType: ProviderType
    name: String!
    regionName: String!
    authKey: String!
    ipAddress: String!
    portNo: String!
    machineConfig: JSON
    status: String!
    Reports: [Report]!
  }

  enum ProviderType {
    AWSEC2
    AWSLS
    GOOGLE
    AZURE
    DIGITALOCEAN
    ALIBABA
  }

  type Query {
    regions: [Region!]! @requireAuth
    region(id: String!): Region @requireAuth
  }

  input CreateRegionInput {
    updateAt: DateTime!
    expiryAt: DateTime!
    providerType: ProviderType
    name: String!
    regionName: String!
    authKey: String!
    ipAddress: String!
    portNo: String!
    machineConfig: JSON
  }

  input UpdateRegionInput {
    updateAt: DateTime
    expiryAt: DateTime
    providerType: ProviderType
    name: String
    regionName: String
    authKey: String
    ipAddress: String
    portNo: String
    machineConfig: JSON
  }

  type Mutation {
    createRegion(input: CreateRegionInput!): Region! @requireAuth
    updateRegion(id: String!, input: UpdateRegionInput!): Region! @requireAuth
    deleteRegion(id: String!): Region! @requireAuth
  }
`
