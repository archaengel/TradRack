// Code generated by Prisma (prisma@1.23.0-test.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateComment {
  count: Int!
}

type AggregateIssue {
  count: Int!
}

type AggregateProject {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Comment {
  author: User!
  id: ID!
  content: String!
  issue: Issue!
}

type CommentConnection {
  pageInfo: PageInfo!
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  author: UserCreateOneInput!
  id: ID
  content: String!
  issue: IssueCreateOneWithoutCommentsInput!
}

input CommentCreateManyWithoutIssueInput {
  create: [CommentCreateWithoutIssueInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateWithoutIssueInput {
  author: UserCreateOneInput!
  id: ID
  content: String!
}

type CommentEdge {
  node: Comment!
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  content_ASC
  content_DESC
}

type CommentPreviousValues {
  id: ID!
  content: String!
}

input CommentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [CommentScalarWhereInput!]
  OR: [CommentScalarWhereInput!]
  NOT: [CommentScalarWhereInput!]
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
  AND: [CommentSubscriptionWhereInput!]
  OR: [CommentSubscriptionWhereInput!]
  NOT: [CommentSubscriptionWhereInput!]
}

input CommentUpdateInput {
  author: UserUpdateOneRequiredInput
  content: String
  issue: IssueUpdateOneRequiredWithoutCommentsInput
}

input CommentUpdateManyDataInput {
  content: String
}

input CommentUpdateManyMutationInput {
  content: String
}

input CommentUpdateManyWithoutIssueInput {
  create: [CommentCreateWithoutIssueInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  set: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutIssueInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutIssueInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput!
  data: CommentUpdateManyDataInput!
}

input CommentUpdateWithoutIssueDataInput {
  author: UserUpdateOneRequiredInput
  content: String
}

input CommentUpdateWithWhereUniqueWithoutIssueInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutIssueDataInput!
}

input CommentUpsertWithWhereUniqueWithoutIssueInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutIssueDataInput!
  create: CommentCreateWithoutIssueInput!
}

input CommentWhereInput {
  author: UserWhereInput
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  issue: IssueWhereInput
  AND: [CommentWhereInput!]
  OR: [CommentWhereInput!]
  NOT: [CommentWhereInput!]
}

input CommentWhereUniqueInput {
  id: ID
}

type Issue {
  title: String!
  content: String!
  author: User!
  id: ID!
  status: String!
  project: Project!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
}

type IssueConnection {
  pageInfo: PageInfo!
  edges: [IssueEdge]!
  aggregate: AggregateIssue!
}

input IssueCreateInput {
  title: String!
  content: String!
  author: UserCreateOneInput!
  id: ID
  status: String!
  project: ProjectCreateOneWithoutIssuesInput!
  comments: CommentCreateManyWithoutIssueInput
}

input IssueCreateManyWithoutProjectInput {
  create: [IssueCreateWithoutProjectInput!]
  connect: [IssueWhereUniqueInput!]
}

input IssueCreateOneWithoutCommentsInput {
  create: IssueCreateWithoutCommentsInput
  connect: IssueWhereUniqueInput
}

input IssueCreateWithoutCommentsInput {
  title: String!
  content: String!
  author: UserCreateOneInput!
  id: ID
  status: String!
  project: ProjectCreateOneWithoutIssuesInput!
}

input IssueCreateWithoutProjectInput {
  title: String!
  content: String!
  author: UserCreateOneInput!
  id: ID
  status: String!
  comments: CommentCreateManyWithoutIssueInput
}

type IssueEdge {
  node: Issue!
  cursor: String!
}

enum IssueOrderByInput {
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  id_ASC
  id_DESC
  status_ASC
  status_DESC
}

type IssuePreviousValues {
  title: String!
  content: String!
  id: ID!
  status: String!
}

input IssueScalarWhereInput {
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
  AND: [IssueScalarWhereInput!]
  OR: [IssueScalarWhereInput!]
  NOT: [IssueScalarWhereInput!]
}

type IssueSubscriptionPayload {
  mutation: MutationType!
  node: Issue
  updatedFields: [String!]
  previousValues: IssuePreviousValues
}

input IssueSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: IssueWhereInput
  AND: [IssueSubscriptionWhereInput!]
  OR: [IssueSubscriptionWhereInput!]
  NOT: [IssueSubscriptionWhereInput!]
}

input IssueUpdateInput {
  title: String
  content: String
  author: UserUpdateOneRequiredInput
  status: String
  project: ProjectUpdateOneRequiredWithoutIssuesInput
  comments: CommentUpdateManyWithoutIssueInput
}

input IssueUpdateManyDataInput {
  title: String
  content: String
  status: String
}

input IssueUpdateManyMutationInput {
  title: String
  content: String
  status: String
}

input IssueUpdateManyWithoutProjectInput {
  create: [IssueCreateWithoutProjectInput!]
  delete: [IssueWhereUniqueInput!]
  connect: [IssueWhereUniqueInput!]
  set: [IssueWhereUniqueInput!]
  disconnect: [IssueWhereUniqueInput!]
  update: [IssueUpdateWithWhereUniqueWithoutProjectInput!]
  upsert: [IssueUpsertWithWhereUniqueWithoutProjectInput!]
  deleteMany: [IssueScalarWhereInput!]
  updateMany: [IssueUpdateManyWithWhereNestedInput!]
}

input IssueUpdateManyWithWhereNestedInput {
  where: IssueScalarWhereInput!
  data: IssueUpdateManyDataInput!
}

input IssueUpdateOneRequiredWithoutCommentsInput {
  create: IssueCreateWithoutCommentsInput
  update: IssueUpdateWithoutCommentsDataInput
  upsert: IssueUpsertWithoutCommentsInput
  connect: IssueWhereUniqueInput
}

input IssueUpdateWithoutCommentsDataInput {
  title: String
  content: String
  author: UserUpdateOneRequiredInput
  status: String
  project: ProjectUpdateOneRequiredWithoutIssuesInput
}

input IssueUpdateWithoutProjectDataInput {
  title: String
  content: String
  author: UserUpdateOneRequiredInput
  status: String
  comments: CommentUpdateManyWithoutIssueInput
}

input IssueUpdateWithWhereUniqueWithoutProjectInput {
  where: IssueWhereUniqueInput!
  data: IssueUpdateWithoutProjectDataInput!
}

input IssueUpsertWithoutCommentsInput {
  update: IssueUpdateWithoutCommentsDataInput!
  create: IssueCreateWithoutCommentsInput!
}

input IssueUpsertWithWhereUniqueWithoutProjectInput {
  where: IssueWhereUniqueInput!
  update: IssueUpdateWithoutProjectDataInput!
  create: IssueCreateWithoutProjectInput!
}

input IssueWhereInput {
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  author: UserWhereInput
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
  project: ProjectWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  AND: [IssueWhereInput!]
  OR: [IssueWhereInput!]
  NOT: [IssueWhereInput!]
}

input IssueWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createComment(data: CommentCreateInput!): Comment!
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  createIssue(data: IssueCreateInput!): Issue!
  updateIssue(data: IssueUpdateInput!, where: IssueWhereUniqueInput!): Issue
  updateManyIssues(data: IssueUpdateManyMutationInput!, where: IssueWhereInput): BatchPayload!
  upsertIssue(where: IssueWhereUniqueInput!, create: IssueCreateInput!, update: IssueUpdateInput!): Issue!
  deleteIssue(where: IssueWhereUniqueInput!): Issue
  deleteManyIssues(where: IssueWhereInput): BatchPayload!
  createProject(data: ProjectCreateInput!): Project!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateManyProjects(data: ProjectUpdateManyMutationInput!, where: ProjectWhereInput): BatchPayload!
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Project {
  name: String!
  id: ID!
  issues(where: IssueWhereInput, orderBy: IssueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Issue!]
  lead: User!
}

type ProjectConnection {
  pageInfo: PageInfo!
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  name: String!
  id: ID
  issues: IssueCreateManyWithoutProjectInput
  lead: UserCreateOneWithoutProjectsInput!
}

input ProjectCreateManyWithoutLeadInput {
  create: [ProjectCreateWithoutLeadInput!]
  connect: [ProjectWhereUniqueInput!]
}

input ProjectCreateOneWithoutIssuesInput {
  create: ProjectCreateWithoutIssuesInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateWithoutIssuesInput {
  name: String!
  id: ID
  lead: UserCreateOneWithoutProjectsInput!
}

input ProjectCreateWithoutLeadInput {
  name: String!
  id: ID
  issues: IssueCreateManyWithoutProjectInput
}

type ProjectEdge {
  node: Project!
  cursor: String!
}

enum ProjectOrderByInput {
  name_ASC
  name_DESC
  id_ASC
  id_DESC
}

type ProjectPreviousValues {
  name: String!
  id: ID!
}

input ProjectScalarWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [ProjectScalarWhereInput!]
  OR: [ProjectScalarWhereInput!]
  NOT: [ProjectScalarWhereInput!]
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
  AND: [ProjectSubscriptionWhereInput!]
  OR: [ProjectSubscriptionWhereInput!]
  NOT: [ProjectSubscriptionWhereInput!]
}

input ProjectUpdateInput {
  name: String
  issues: IssueUpdateManyWithoutProjectInput
  lead: UserUpdateOneRequiredWithoutProjectsInput
}

input ProjectUpdateManyDataInput {
  name: String
}

input ProjectUpdateManyMutationInput {
  name: String
}

input ProjectUpdateManyWithoutLeadInput {
  create: [ProjectCreateWithoutLeadInput!]
  delete: [ProjectWhereUniqueInput!]
  connect: [ProjectWhereUniqueInput!]
  set: [ProjectWhereUniqueInput!]
  disconnect: [ProjectWhereUniqueInput!]
  update: [ProjectUpdateWithWhereUniqueWithoutLeadInput!]
  upsert: [ProjectUpsertWithWhereUniqueWithoutLeadInput!]
  deleteMany: [ProjectScalarWhereInput!]
  updateMany: [ProjectUpdateManyWithWhereNestedInput!]
}

input ProjectUpdateManyWithWhereNestedInput {
  where: ProjectScalarWhereInput!
  data: ProjectUpdateManyDataInput!
}

input ProjectUpdateOneRequiredWithoutIssuesInput {
  create: ProjectCreateWithoutIssuesInput
  update: ProjectUpdateWithoutIssuesDataInput
  upsert: ProjectUpsertWithoutIssuesInput
  connect: ProjectWhereUniqueInput
}

input ProjectUpdateWithoutIssuesDataInput {
  name: String
  lead: UserUpdateOneRequiredWithoutProjectsInput
}

input ProjectUpdateWithoutLeadDataInput {
  name: String
  issues: IssueUpdateManyWithoutProjectInput
}

input ProjectUpdateWithWhereUniqueWithoutLeadInput {
  where: ProjectWhereUniqueInput!
  data: ProjectUpdateWithoutLeadDataInput!
}

input ProjectUpsertWithoutIssuesInput {
  update: ProjectUpdateWithoutIssuesDataInput!
  create: ProjectCreateWithoutIssuesInput!
}

input ProjectUpsertWithWhereUniqueWithoutLeadInput {
  where: ProjectWhereUniqueInput!
  update: ProjectUpdateWithoutLeadDataInput!
  create: ProjectCreateWithoutLeadInput!
}

input ProjectWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  issues_every: IssueWhereInput
  issues_some: IssueWhereInput
  issues_none: IssueWhereInput
  lead: UserWhereInput
  AND: [ProjectWhereInput!]
  OR: [ProjectWhereInput!]
  NOT: [ProjectWhereInput!]
}

input ProjectWhereUniqueInput {
  id: ID
}

type Query {
  comment(where: CommentWhereUniqueInput!): Comment
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  issue(where: IssueWhereUniqueInput!): Issue
  issues(where: IssueWhereInput, orderBy: IssueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Issue]!
  issuesConnection(where: IssueWhereInput, orderBy: IssueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): IssueConnection!
  project(where: ProjectWhereUniqueInput!): Project
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  issue(where: IssueSubscriptionWhereInput): IssueSubscriptionPayload
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  projects: ProjectCreateManyWithoutLeadInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutProjectsInput {
  create: UserCreateWithoutProjectsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutProjectsInput {
  id: ID
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  projects: ProjectUpdateManyWithoutLeadInput
}

input UserUpdateInput {
  name: String
  projects: ProjectUpdateManyWithoutLeadInput
}

input UserUpdateManyMutationInput {
  name: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutProjectsInput {
  create: UserCreateWithoutProjectsInput
  update: UserUpdateWithoutProjectsDataInput
  upsert: UserUpsertWithoutProjectsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutProjectsDataInput {
  name: String
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutProjectsInput {
  update: UserUpdateWithoutProjectsDataInput!
  create: UserCreateWithoutProjectsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  projects_every: ProjectWhereInput
  projects_some: ProjectWhereInput
  projects_none: ProjectWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`