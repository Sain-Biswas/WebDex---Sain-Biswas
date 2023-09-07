import React from 'react'
import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom'
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
            <Link to="/">Home</Link>
          </li>
          <li className="nav-routes">
            <Link to="/types">Types</Link>
          </li>
          <li className="nav-routes">
            <Link to="/about">About us</Link>
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