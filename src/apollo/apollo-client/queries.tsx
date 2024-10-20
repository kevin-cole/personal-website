import { gql } from 'graphql-tag'
import { useQuery } from '@apollo/client'
import { Skill } from '../types';

const GET_JOBS = gql`
  query {
    jobs {
      company
      startDate
      endDate
    }
  }
`;

const GET_SKILLS = gql`
  query {
    skills {
      name
      category
      yearsExperience
    }
  }
`;

const GET_EDUCATION = gql`
  query {
    education {
      school
      degree
      degreeAbbreviation
      major
    }
  }
`

export const getJobs = () => {
  return useQuery(GET_JOBS)
}
export type SkillsQuery = {
  loading: boolean,
  error: Error,
  data: {
    skills: Skill[]
  } | null
}
export const getSkills = (): SkillsQuery => {
  return useQuery(GET_SKILLS) as SkillsQuery
}
export const getEducations = () =>  {
  return useQuery(GET_EDUCATION)
}
