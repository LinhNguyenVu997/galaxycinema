import React from 'react'
import styles from './spinner.module.css'

const Spinner = props => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
      <div className={styles.headerWrapper}>
        <div className={styles.zoominheader}>
          <div className={styles.zoomoutheader}></div>
        </div>
      </div>
    </div>
  )
}

export default Spinner
