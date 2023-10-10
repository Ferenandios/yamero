import { FC } from 'react'
import styles from './Filter.module.css'

const Filter: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.filter}>
        <div className={styles.items}>
          <button className={styles.button}>All</button>
          <button className={styles.button}>Art</button>
          <button className={styles.button}>Biography</button>
          <button className={styles.button}>Computers</button>
          <button className={styles.button}>History</button>
          <button className={styles.button}>Medical</button>
          <button className={styles.button}>Poetry</button>
        </div>
        <div className={styles.items}>
          <button className={styles.button}>Relevance</button>
          <button className={styles.button}>Newest</button>
        </div>
      </div>
    </>
  )
}

export default Filter