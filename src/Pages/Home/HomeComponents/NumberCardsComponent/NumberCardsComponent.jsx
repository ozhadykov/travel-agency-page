import data from './data'
import SingleCard from './SingleCard'

function NumberCardsComponent() {
  return (
    <section className="numbers-component">
      <p className="heading-text">NUMBERS</p>
      <h2>What makes us so special?</h2>
      {data.map((item) => {
        return <SingleCard {...item} />
      })}
    </section>
  )
}
export default NumberCardsComponent
