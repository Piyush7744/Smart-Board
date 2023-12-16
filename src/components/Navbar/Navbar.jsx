import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav class="navbar">
        <div class="logo">SB </div>

        <ul class="nav-links">


         
          <div class="menu">

            <li><a href="./login">Login</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="./project">How to use</a></li>

          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
