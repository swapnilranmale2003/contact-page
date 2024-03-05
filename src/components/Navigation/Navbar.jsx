import React from 'react'
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <nav className={`${styles.nav} `}>
      <div className="logo"> 
        <img src="images/logo.png" alt="" />
      </div>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  )
}

export default Navbar
