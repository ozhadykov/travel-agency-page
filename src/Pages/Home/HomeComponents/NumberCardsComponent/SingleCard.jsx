function SingleCard({ number, title, text, icon }) {
  return (
    <div className="single-card">
      <h1>{number}+</h1>
      <strong>{title}</strong>
      <p>{text}</p>
      {icon}
    </div>
  )
}
export default SingleCard
