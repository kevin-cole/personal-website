import React from 'react'
import * as styles from './skill.module.css'
import type { Skill } from '../../apollo/types'

const Skill = (skill: Skill) => {
  return (
    <div className={styles.skill}>
        {skill.name}
    </div>
  )
}

export default Skill