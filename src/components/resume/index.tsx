import React from 'react'
import * as styles from './resume.module.css'
import SkillList from '../skill-list.tsx'

const Resume = () => {
  return (
    <div className={styles.body}>
      <div className={styles.mainContent}>
        <div className={styles.content}>
            <div className={styles.content_1}>
              <header>
                <h2>TBD</h2>
              </header>
            </div>

            <div className={styles.content_2}>
              <header>
                <h2><a href="#" rel="bookmark" title="">Header post</a></h2>
              </header>

              <div>
                blah blah
              </div>
            </div>
        </div>
        {SkillList()}
      </div>

      <footer>
        <p>Copyright &copy; 2013 <a href="">Your Name</a></p>
      </footer>

    </div>
  )
}

export default Resume