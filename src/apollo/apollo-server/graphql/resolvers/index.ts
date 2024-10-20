import { Education, Job, Skill } from '../../../types'

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    skills: (): Skill[] => {
      return [
        {
          name: 'Typescript',
          category: 'programming languages',
          yearsExperience: 5
        },
        {
          name: 'Javascript',
          category: 'programming languages',
          yearsExperience: 15
        },
        {
          name: 'Postgres',
          category: 'data storage',
          yearsExperience: 7
        },
      ]
    },
    educations: (): Education[] => {
      return [
        {
          school: 'UT Austin',
          degree: 'Bachelor of Science',
          degreeAbbreviation: 'BS',
          major: 'Computer Science'
        }
      ]
    },
    jobs: (): Job[] => {
      return [
        {
          company: 'Buildforce',
          startDate: '2020-02-02',
          endDate: '2024-08-01'
        }
      ]
    }
  },
}

export default resolvers
