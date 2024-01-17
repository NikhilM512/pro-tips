import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <Link className='link' to="/"><h1>Kalvium ❤️</h1></Link>
        <div>
          <Link className='link' to="/contact"><p>Contacts</p></Link>
          <Link className='link' to="/registration"><p>Registration Form</p></Link>
        </div>
      </nav>
  )
}

export default Navbar