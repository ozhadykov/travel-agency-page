import SingleDot from './SingleDot'
import data from '../toursData'
import { useState } from 'react'

function CarouselDots({ currentDot }) {
  // const [current, setCurrent] = useState(currentDot)

  return (
    <div className="dots">
      {data.map((item, idx) => {
        return <SingleDot currentDot={currentDot} ownIdx={idx} key={idx} />
      })}
    </div>
  )
}
export default CarouselDots
