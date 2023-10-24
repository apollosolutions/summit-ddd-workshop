###############################
## Usecase 1: Create Account ##
###############################

# first iteration
type Query {
  createAccount(
    email: String!, 
    password: String!, 
    username: String
  ): Boolean!
}



# second iteration

# single input parameters
type Mutation {
  createUserAccount(input: CreateUserAccountInput!): CreateAccountResponse!
}

# single input type
input CreateUserAccountInput {
	email: String!
	password: String!
	username: String
}

# union of errors
union CreateAccountResponse = 
  CreateAccountSuccessResponse | 
  UsernameTakenError | 
  ExistingAccountError

type UsernameTakenError {
  code: String!
  message: String!
  suggestedUsername: String
}

type ExistingAccountError {
  
}

type CreateUserAccountSuccessResponse {
	ok: Boolean!
	user: User
}

type User {
  id: ID!
  email: String!
  username: String
}







##################################################################
## Usecase 2: Reviews (create, list, delete, metrics per track) ##
##################################################################

type Query {
	reviewMetrics(trackId: ID!): ReviewMetrics!
}

type Review {
	id: ID!
	content: String!
	rating: Int!
	reviewerName: String
	timeSincePosted: String
}

type Track @key(fields: "id") {
	id: ID!
	reviews: [Review]!
	reviewMetrics: ReviewMetrics!
}

type ReviewMetrics {
	trackId: ID! 
	reviewCount: Int
	averageRating: Float
}














#####################################
## Usecase 3: assessment questions ##
#####################################

# Iteration 1
type module {
  questions: [Question!]!
}

type Question {
  id: ID!
  content: String!
  options: [Option!]!
  correctOptionID: ID! # answers into list of ID

  # no essay questions as a caveat
}

type Option {
  id: ID!
  content: String!
}

type AssessmentResult {
  id: ID!
  user: User!
  track: Track!
  module: Module!
  question: Question!
  selectedOptionID: ID!
  isCorrect: Boolean!
}

type Query {
  getQuestionsByModule(moduleID: ID!): [Question!]!
  getUserAssessmentResults(userID: ID!): [AssessmentResult!]!
}

type Mutation {
  createQuestion(
    moduleID: ID!,
    content: String!,
    options: [String!]!,
    correctOptionIndex: Int!
  ): Question!

  answerQuestion(
    userID: ID!,
    trackID: ID!,
    moduleID: ID!,
    questionID: ID!,
    selectedOptionID: ID!
  ): AssessmentResult!
}










# iteration 2
interface Question {
  id: ID!
  content: String!
}

type MultipleChoiceQuestion implements Question {
  id: ID!
  content: String!
  options: [Option!]!
  correctOptionID: ID!
}

type TrueFalseQuestion implements Question {
  id: ID!
  content: String!
  isTrue: Boolean!
}

type Option {
  id: ID!
  content: String!
}

type AssessmentResult {
  id: ID!
  user: User!
  track: Track!
  module: Module!
  question: Question!
  selectedOptionID: ID
  selectedAnswer: Boolean
  isCorrect: Boolean!
}

# Queries
type Query {
  getQuestionsByModule(moduleID: ID!): [Question!]!
  getUserAssessmentResults(userID: ID!): [AssessmentResult!]!
}

# Mutations
type Mutation {
  createMultipleChoiceQuestion(
    moduleID: ID!,
    content: String!,
    options: [String!]!,
    correctOptionIndex: Int!
  ): MultipleChoiceQuestion!

  createTrueFalseQuestion(
    moduleID: ID!,
    content: String!,
    isTrue: Boolean!
  ): TrueFalseQuestion!

  answerMultipleChoiceQuestion(
    userID: ID!,
    trackID: ID!,
    moduleID: ID!,
    questionID: ID!,
    selectedOptionID: ID!
  ): AssessmentResult!

  answerTrueFalseQuestion(
    userID: ID!,
    trackID: ID!,
    moduleID: ID!,
    questionID: ID!,
    selectedAnswer: Boolean!
  ): AssessmentResult!
}











# iteration 3
interface Question {
    id: ID!
    content: String!
    versions: [QuestionVersion!]!
    latestVersion: QuestionVersion!
}

type MultipleChoiceQuestion implements Question {
    id: ID!
    content: String!
    versions: [MultipleChoiceQuestionVersion!]!
    latestVersion: MultipleChoiceQuestionVersion!
}

type TrueFalseQuestion implements Question {
    id: ID!
    content: String!
    versions: [TrueFalseQuestionVersion!]!
    latestVersion: TrueFalseQuestionVersion!
}

type QuestionVersion {
    version: Int!
    createdAt: DateTime!
}

type MultipleChoiceQuestionVersion implements QuestionVersion {
    version: Int!
    createdAt: DateTime!
    options: [Option!]!
    correctOptionID: ID!
}

type TrueFalseQuestionVersion implements QuestionVersion {
    version: Int!
    createdAt: DateTime!
    isTrue: Boolean!
}

type Option {
    id: ID!
    content: String!
}

type AssessmentResult {
    id: ID!
    user: User!
    track: Track!
    module: Module!
    question: Question!
    questionVersion: Int!
    selectedOptionID: ID?
    selectedAnswer: Boolean?
    isCorrect: Boolean!
}

# Queries
type Query {
    getQuestionsByModule(moduleID: ID!, version: Int): [Question!]!
    getUserAssessmentResults(userID: ID!): [AssessmentResult!]!
}

# Mutations
type Mutation {
    createMultipleChoiceQuestionVersion(
        questionID: ID!,
        content: String!,
        options: [String!]!,
        correctOptionIndex: Int!
    ): MultipleChoiceQuestionVersion!

    createTrueFalseQuestionVersion(
        questionID: ID!,
        content: String!,
        isTrue: Boolean!
    ): TrueFalseQuestionVersion!

    answerMultipleChoiceQuestion(
        userID: ID!,
        trackID: ID!,
        moduleID: ID!,
        questionID: ID!,
        questionVersion: Int!,
        selectedOptionID: ID!
    ): AssessmentResult!

    answerTrueFalseQuestion(
        userID: ID!,
        trackID: ID!,
        moduleID: ID!,
        questionID: ID!,
        questionVersion: Int!,
        selectedAnswer: Boolean!
    ): AssessmentResult!
}
