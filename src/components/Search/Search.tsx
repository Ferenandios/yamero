import { FC } from 'react'
import Input from './Input/Input'
import Filter from './Filter/Filter'
import Title from './Title/Title'
import styles from './Search.module.css'

const Search: FC = (): JSX.Element => {
  return (
    <>
      <section className={styles.section}>
        <img className={styles.bg} src="banner.jpg" alt="Banner" />
        <div className="container">
          <div className={styles.inner}>
            <Title />
            <Input />
            <Filter />
          </div>
        </div>
      </section>
    </>
  )
}

export default Search