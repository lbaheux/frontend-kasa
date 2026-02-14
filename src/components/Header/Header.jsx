import { NavLink } from "react-router-dom"
import "./Header.scss"
import logo from "./LOGO_header.svg"

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo"><img src={logo} alt="Logo Kasa" /></div>

        <nav className="header__nav">
          <NavLink to="/">Acceuil</NavLink>
          <NavLink to="/about">A propos</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header