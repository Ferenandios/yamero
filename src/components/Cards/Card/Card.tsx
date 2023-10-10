import { FC } from 'react'
import Preview from './Preview/Preview'
import Text from './Text/Text'
import styles from './Card.module.css'

const Card: FC = (): JSX.Element => {
  return (
    <>
      <button className={styles.card}>
        <Preview />
        <Text />
      </button>
    </>
  )
}

export default Card