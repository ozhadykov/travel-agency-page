import { Link } from 'react-router-dom'
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2'
import { useState } from 'react'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const toggle = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Travelers</Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/tours">Tours</Link>
          </li>
        </ul>
        <Link className="action-btn">Get Started</Link>
        <button className="toggle-btn" onClick={toggle}>
          {toggleMenu ? <HiOutlineXMark /> : <HiBars3 />}
        </button>
      </nav>

      <div className={toggleMenu ? 'dropdown-menu open' : 'dropdown-menu'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/tours">Tours</Link>
        </li>
        <li>
          <Link className="action-btn">Get Started</Link>
        </li>
      </div>
    </header>
  )
}
export default Navbar
