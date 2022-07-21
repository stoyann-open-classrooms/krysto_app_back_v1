import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo_krysto.png'
import './header.css'
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt />
            Connexion
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser/>
            S'inscrire
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
