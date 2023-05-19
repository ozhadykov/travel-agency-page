import SingleAccordion from './SingleAccordion'
import data from './accordionData'
import styles from './FAQsComponent.module.css'

function FAQsComponent() {
  return (
    <section className={styles.accordion_section}>
      {data.map((qItem, idx) => {
        return <SingleAccordion {...qItem} idx={idx} key={qItem.id} />
      })}
    </section>
  )
}
export default FAQsComponent
