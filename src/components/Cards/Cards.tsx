import { FC } from 'react'
import Card from './Card/Card'
import styles from './Cards.module.css'

const Cards: FC = (): JSX.Element => {
  return (
    <>
      <section>
        <div className="container">
          <div className={styles.inner}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </>
  )
}

export default Cards