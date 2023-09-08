import React from 'react'
import './NavBar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import searchIcon from '../../svg/icon_search.svg'
import navbarLogo from '../../svg/logo_navbar.svg'
import { useRef } from 'react'

function NavBar() {
  const navigate = useNavigate()
  const PKMN = useRef()
  return (
    <>
      <nav>
        <img id="Nav-logo" src={navbarLogo} alt="WeBDèX" />
        <ul className="nav-routes">
          <li className="nav-routes">
            <NavLink to="/" className={({ isActive }) => isActive ? "linkActive" : ""}>
              Home
            </NavLink>
          </li>
          <li className="nav-routes">
            <NavLink to="/types" className={({ isActive }) => isActive ? "linkActive" : ""}>
              Types
            </NavLink>
          </li>
          <li className="nav-routes">
            <NavLink to="/about" className={({ isActive }) => isActive ? "linkActive" : ""}>
              About us
            </NavLink>
          </li>
        </ul>
        <input
          type="text"
          ref={PKMN}
          placeholder="Enter Pokemon name or Number..."
          className="nav-search-box"
        />
        <img
          id="nav-search-icon"
          src={searchIcon}
          onClick={() => {
            navigate(`/pokemon/${PKMN.current.value}`)
          }}
        />
      </nav>
    </>
  )
}

export default NavBar