import { FC } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import styles from './Input.module.css'

const Input: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.inner}>
          <button className={styles.button}><AiOutlineSearch size={20} /></button>
          <input className={styles.input} type="text" />
        </div>
      </div>
    </>
  )
}

export default Input