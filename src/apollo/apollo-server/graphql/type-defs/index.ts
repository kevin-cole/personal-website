import { gql } from 'graphql-tag'

// Define your schema
const typeDefs = gql`
  type Skill {
    name: String!
    category: String!
    yearsExperience: Int!
  }
  type Education {
    school: String!
    degree: String!
    degreeAbbreviation: String!
    major: String!
  }
  type Job {
    company: String!
    startDate: String!
    endDate: String!
  }
  type Query {
    skills: [Skill!]!
    jobs: [Job!]!
    educations: [Education!]!
  }
`

export default typeDefs
