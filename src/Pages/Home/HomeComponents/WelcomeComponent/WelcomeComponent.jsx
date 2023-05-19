import styles from './WelcomeComponent.module.css'

function WelcomeComponent() {
  return (
    <section className={styles.welcome_hero}>
      <img src="src/assets/images/hero2.png" alt="" />
      <div className={styles.right_block}>
        <h1>Best Places, for a better Life</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quia
          aliquam repudiandae dolorum quos consectetur.
        </p>
        <div className={styles.btn_block}>
          <button className={styles.btn_one}>Start traveling</button>
          <button className={styles.btn_two}>Learn more</button>
        </div>
      </div>
    </section>
  )
}
export default WelcomeComponent
