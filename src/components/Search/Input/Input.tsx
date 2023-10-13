import { FC, useRef } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import styles from './Input.module.css'
import { useAppDispatch } from '../../../hook'
import { getBooks } from '../../../features/books.slice'

const Input: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)
  const handlePress = () => {
    if (inputRef && inputRef.current) {
      dispatch(getBooks({payload: inputRef.current.value, type: 'books/getBooks'}))
    }
  }
  return (
    <>
      <div className={styles.section}>
        <div className={styles.inner}>
          <button onClick={handlePress} className={styles.button}><AiOutlineSearch size={20} /></button>
          <input ref={inputRef} className={styles.input} type="text" />
        </div>
      </div>
    </>
  )
}

export default Input