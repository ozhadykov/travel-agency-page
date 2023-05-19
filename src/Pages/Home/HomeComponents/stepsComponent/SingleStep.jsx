import styles from './StepsComponent.module.css'

function SingleStep({ idx, title, text }) {
  return (
    <article className={styles.container}>
      {idx % 2 === 0 ? (
        <>
          <div className={styles.box}>
            <p>0{idx + 1}</p>
            <div className={styles.content}></div>
          </div>
          <div className={styles.text}>
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        </>
      ) : (
        <>
          <div className={styles.text}>
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
          <div className={styles.box}>
            <p>0{idx + 1}</p>
            <div className={styles.content}></div>
          </div>
        </>
      )}
    </article>
  )
}
export default SingleStep
