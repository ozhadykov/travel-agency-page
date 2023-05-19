import SingleDot from './SingleDot'
import data from '../toursData'
import { useState } from 'react'
import styles from './CarouselDots.module.css'

function CarouselDots({ currentDot }) {
  // const [current, setCurrent] = useState(currentDot)

  return (
    <div className={styles.dots}>
      {data.map((item, idx) => {
        return <SingleDot currentDot={currentDot} ownIdx={idx} key={idx} />
      })}
    </div>
  )
}
export default CarouselDots
