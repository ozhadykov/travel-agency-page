import styles from './OfferFormComponent.module.css'

function OfferFormComponent() {
  return (
    <section className={styles.offer_section}>
      <h1>Give us your email, to get a free traveling offer for you</h1>
      <p>We will send you the best places to go</p>
      <div className={styles.input}>
        <input type="text" placeholder="Your email" />
        <button>Get a Tour</button>
      </div>
    </section>
  )
}
export default OfferFormComponent
