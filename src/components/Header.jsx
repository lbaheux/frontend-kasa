import { NavLink } from "react-router-dom"
import "../styles/Header.scss"

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/" end>Acceuil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </header>
  );
}

export default Header