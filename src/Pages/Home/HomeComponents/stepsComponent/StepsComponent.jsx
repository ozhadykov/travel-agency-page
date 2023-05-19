import SingleStep from './SingleStep'
import data from './data'
import styles from './StepsComponent.module.css'

function StepsComponent() {
  return (
    <section className={styles.steps_section}>
      <article className={styles.heading_text}>
        <p>How it works?</p>
        <h1>Your best traveling journey in 3 steps</h1>
      </article>
      <div className={styles.cards_container}>
        {data.map((item, idx) => {
          return <SingleStep {...item} idx={idx} key={idx} />
        })}
      </div>
    </section>
  )
}

export default StepsComponent
