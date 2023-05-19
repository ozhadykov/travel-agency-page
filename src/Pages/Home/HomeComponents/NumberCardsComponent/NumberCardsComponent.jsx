import data from './data'
import SingleCard from './SingleCard'
import styles from './NumberCardsComponent.module.css'

function NumberCardsComponent() {
  return (
    <section className={styles.numbers_component}>
      <p className={styles.heading_text}>NUMBERS</p>
      <h2>What makes us so special?</h2>
      {data.map((item) => {
        return <SingleCard {...item} />
      })}
    </section>
  )
}
export default NumberCardsComponent
