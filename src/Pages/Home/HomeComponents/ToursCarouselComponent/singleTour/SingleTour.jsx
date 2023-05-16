import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import CarouselDots from '../dotsComponent/CarouselDots'
import { useEffect } from 'react'

function SingleTour({ header, description, img, changeTour, currentTour }) {
  return (
    <div className="single-tour">
      <div className="left">
        <div className="top-container">
          <strong>WHERE TO GO?</strong>
          <h1>{header}</h1>
          <div className="text">{description}</div>
          <button className="btn btn.learn-more">Learn more</button>
        </div>

        <div className="controls">
          <button className="c-btn btn-left" onClick={() => changeTour('prev')}>
            <BsArrowLeft className="btn-icon" />
            <p>prev</p>
          </button>

          <CarouselDots currentDot={currentTour} />

          <button
            className="c-btn btn-right"
            onClick={() => changeTour('next')}
          >
            <p>next</p>
            <BsArrowRight className="btn-icon" />
          </button>
        </div>
      </div>
      <div className="right">
        <img src={img} />
      </div>
    </div>
  )
}
export default SingleTour
