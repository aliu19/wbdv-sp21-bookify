import React from 'react'
import logo from '../svgs/spotify-logo.svg'


const Nav = () => {
    return (
        <div className="navBar">
        <div className="logo">
          <img src={logo} width="100" height="50"/>
          Vibeify
        </div>
        <ul>
          <li>Home</li>
          <li>Search</li>
          <li>Library</li>
        </ul>
        <div className="cookies">
            <span>Cookies</span>
            <span>Privacy Policy</span>

        </div>
      </div>
    )

}

export default Nav