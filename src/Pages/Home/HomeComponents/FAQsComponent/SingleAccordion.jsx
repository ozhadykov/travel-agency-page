import { useState } from 'react'

function SingleAccordion({ idx, question, answer, bullets }) {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="icon"
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
      className={!toggle ? 'accordion-item' : 'accordion-item open'}
      onClick={toggleTab}
    >
      <div className="number">0{idx + 1}</div>
      <div className="text">{question}</div>
      <button className="icon-btn" onClick={toggleTab}>
        {icon}
      </button>
      <div className="hidden-text">
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
