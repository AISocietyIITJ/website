import React from 'react'
import { Link } from 'react-router-dom' 

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/publications">Publications</Link></li>
      </ul>
    </nav>
  )
}
