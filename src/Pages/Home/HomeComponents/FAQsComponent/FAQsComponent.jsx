import SingleAccordion from './SingleAccordion'
import data from './accordionData'

function FAQsComponent() {
  return (
    <section className="accordion-section">
      {data.map((qItem, idx) => {
        return <SingleAccordion {...qItem} idx={idx} key={qItem.id} />
      })}
    </section>
  )
}
export default FAQsComponent
