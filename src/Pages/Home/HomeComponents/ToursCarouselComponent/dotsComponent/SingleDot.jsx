import styles from './CarouselDots.module.css'

function SingleDot({ currentDot, ownIdx }) {
  return (
    <div
      className={
        currentDot === ownIdx ? styles.dot + ' ' + styles.active : styles.dot
      }
    ></div>
  )
}
export default SingleDot
