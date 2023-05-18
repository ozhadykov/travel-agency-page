function SingleStep({ idx, title, text }) {
  return (
    <article className="container">
      {idx % 2 === 0 ? (
        <>
          <div className="box">
            <p className="number">0{idx + 1}</p>
            <div className="content"></div>
          </div>
          <div className="text">
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        </>
      ) : (
        <>
          <div className="text">
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
          <div className="box">
            <p className="number">0{idx + 1}</p>
            <div className="content"></div>
          </div>
        </>
      )}
    </article>
  )
}
export default SingleStep
