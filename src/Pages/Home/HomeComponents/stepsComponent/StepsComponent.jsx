import SingleStep from './SingleStep'
import data from './data'

function StepsComponent() {
  return (
    <section className="steps-section">
      <article className="heading-text">
        <p>How it works?</p>
        <h1>Your best traveling journey in 3 steps</h1>
      </article>
      <div className="cards-container">
        {data.map((item, idx) => {
          return <SingleStep {...item} idx={idx} key={idx} />
        })}
      </div>
    </section>
  )
}

export default StepsComponent
