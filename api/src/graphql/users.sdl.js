export const schema = gql`
  type User {
    id: String!
    guid: String!
    createdAt: DateTime!
    updateAt: DateTime!
    lastLoginAt: DateTime!
    roleType: RoleType!
    accountType: AccountType!
    subscriptionType: SubscriptionType!
    userName: String!
    email: String!
    displayName: String
    Reports: [Report]!
  }

  enum RoleType {
    USER
    BOT
    ADMIN
  }

  enum AccountType {
    INDIVIDUAL
    ORGANIZATION
  }

  enum SubscriptionType {
    FREE
    PRO_MONTHLY
    PRO_ANNUAL
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    guid: String!
    updateAt: DateTime!
    lastLoginAt: DateTime!
    roleType: RoleType!
    accountType: AccountType!
    subscriptionType: SubscriptionType!
    userName: String!
    email: String!
    displayName: String
  }

  input UpdateUserInput {
    guid: String
    updateAt: DateTime
    lastLoginAt: DateTime
    roleType: RoleType
    accountType: AccountType
    subscriptionType: SubscriptionType
    userName: String
    email: String
    displayName: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`