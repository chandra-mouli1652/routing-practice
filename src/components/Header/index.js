// Write your JS code here
// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="Logo-and-title-container">
      <img
        alt="wave"
        className="Logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="title">Wave</h1>
    </div>

    <ul className="nav-items-list">
      <li className="Link-item">
        <Link className="route-Link" to="/">
          Home
        </Link>
      </li>
      <li className="Link-item">
        <Link className="route-link" to="/about">
          About
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-Link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
