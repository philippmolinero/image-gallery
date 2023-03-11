import { Link } from "react-router-dom"

function Header() {

  return (
    <header>
      <p className="logo"><Link to="/">home</Link></p>
      <nav className="navigation">
        <ul>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/cart">cart</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header