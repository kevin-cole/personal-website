import React from 'react'
import * as styles from './loading-spinner.module.css'

const LoadingSpinner = () => {
  return (
    <div className={styles.loading_spinner}>
        <div className={styles.loading_spinner_dot}></div>
        <div className={styles.loading_spinner_dot}></div>
        <div className={styles.loading_spinner_dot}></div>
        <div className={styles.loading_spinner_dot}></div>
        <div className={styles.loading_spinner_dot}></div>
        <div className={styles.loading_spinner_dot}></div>
        <div className={styles.loading_spinner_dot}></div>
        <div className={styles.loading_spinner_dot}></div>
    </div>
  )
}

export default LoadingSpinner