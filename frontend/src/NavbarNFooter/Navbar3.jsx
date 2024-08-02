import React from 'react'

function Navbar() {
  return (
    <div className='bg-black'>
        <div className="navbar bg-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
            <a href='/'>Home</a>
            </li>
          <li>
            <a href='/teams'>Team</a>  
          </li>

             <li>
            <a href='/projects'>Projects</a>
             </li>
      </ul>
    </div>
    <a href='/' className="w-12 ml-12"><img src='RAID_logo.jpeg'/></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-2 text-lg font-semibold">
    <li>
            <a href='/'>Home</a>
            </li>
          <li>
            <a href='/teams'>Team</a>  
          </li>

             <li>
            <a href='/projects'>Projects</a>
             </li>
    </ul>
  </div>
  <div className="navbar-end">
    
    </div>
</div>
    </div>
  )
}

export default Navbar;