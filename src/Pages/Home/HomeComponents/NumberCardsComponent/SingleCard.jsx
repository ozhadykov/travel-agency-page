import styles from './NumberCardsComponent.module.css'

function SingleCard({ number, title, text, icon }) {
  return (
    <div className={styles.single_card}>
      <h1>{number}+</h1>
      <strong>{title}</strong>
      <p>{text}</p>
      {icon}
    </div>
  )
}
export default SingleCard
