import { FC } from 'react'
import styles from './Preview.module.css'

const Preview: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.preview}>
        <img src="rofl.png" alt="" />
      </div>
    </>
  )
}

export default Preview