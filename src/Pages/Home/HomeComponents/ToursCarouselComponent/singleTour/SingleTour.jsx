import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import CarouselDots from '../dotsComponent/CarouselDots'
import styles from './SingleTour.module.css'

function SingleTour({ header, description, img, changeTour, currentTour }) {
  return (
    <div className={styles.single_tour}>
      <div className={styles.left}>
        <div className={styles.top_container}>
          <strong>WHERE TO GO?</strong>
          <h1>{header}</h1>
          <div className={styles.text}>{description}</div>
          <button className={styles.btn}>Learn more</button>
        </div>

        <div className={styles.controls}>
          <button className={styles.c_btn} onClick={() => changeTour('prev')}>
            <BsArrowLeft className={styles.btn_icon} />
            <p>prev</p>
          </button>

          <CarouselDots currentDot={currentTour} />

          <button className={styles.c_btn} onClick={() => changeTour('next')}>
            <p>next</p>
            <BsArrowRight className={styles.btn_icon} />
          </button>
        </div>
      </div>
      <div className={styles.right}>
        <img src={img} />
      </div>
    </div>
  )
}
export default SingleTour
