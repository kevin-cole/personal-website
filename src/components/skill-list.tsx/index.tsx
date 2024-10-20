import React, { Suspense } from 'react'
import * as styles from './skill-list.module.css'
import Skill from '../skill'
import { getSkills } from '../../apollo/apollo-client/queries'
import LoadingSpinner from '../loading-spinner'

const SkillList = () => {
  const { loading, error, data } = getSkills()

  if (loading) return null

  if (!data?.skills) return (
    <div className={styles.skills}>
      none
    </div>
  )

  return (
    <div className={styles.skills}>
      {data.skills.map(skill => Skill(skill))}
    </div>
  )
}

const SkillsComponent = () => {
  return (
    <Suspense fallback={<LoadingSpinner/>}>
      <SkillList/>
    </Suspense>
  )
}

export default SkillsComponent