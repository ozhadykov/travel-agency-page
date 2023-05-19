import { useState } from 'react'
import styles from './FAQsComponent.module.css'

function SingleAccordion({ idx, question, answer, bullets }) {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={styles.icon}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  )

  const [toggle, setToggle] = useState(false)

  const toggleTab = () => {
    setToggle(!toggle)
  }
  return (
    <div
      className={
        !toggle
          ? styles.accordion_item
          : styles.accordion_item + ' ' + styles.open
      }
      onClick={toggleTab}
    >
      <div className={styles.number}>0{idx + 1}</div>
      <div className={styles.text}>{question}</div>
      <button className={styles.icon_btn} onClick={toggleTab}>
        {icon}
      </button>
      <div className={styles.hidden_text}>
        <p>{answer}</p>
        <ul>
          {bullets.map((text, idx) => {
            return <li key={idx + Math.floor(Math.random() * 100)}>{text}</li>
          })}
        </ul>
      </div>
    </div>
  )
}
export default SingleAccordion
