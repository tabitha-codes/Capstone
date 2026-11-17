import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">Lease Lens</Link>
      <nav aria-label="Main navigation">
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
