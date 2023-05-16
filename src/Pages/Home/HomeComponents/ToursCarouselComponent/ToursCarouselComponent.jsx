import data from './toursData'
import SingleTour from './singleTour/SingleTour'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

function ToursCarouselComponent() {
  const [currentTour, setCurrentTour] = useState(0)

  const handleChangeTour = (param) => {
    param === 'next'
      ? setCurrentTour((currentTour + 1) % data.length)
      : setCurrentTour(currentTour - 1 < 0 ? data.length - 1 : currentTour - 1)
  }

  return (
    <section className="tours-carousel-component">
      <div className="heading-block">
        <p>TOURS</p>
        <h2>You can choose one from 100+ our tours</h2>
      </div>
      <SingleTour
        {...data[currentTour]}
        changeTour={handleChangeTour}
        currentTour={currentTour}
      />
      <Link to={'/tours'}>
        See all tours <BsArrowRight />
      </Link>
    </section>
  )
}
export default ToursCarouselComponent
