function SingleDot({ currentDot, ownIdx }) {
  return <div className={currentDot === ownIdx ? 'dot active' : 'dot'}></div>
}
export default SingleDot
