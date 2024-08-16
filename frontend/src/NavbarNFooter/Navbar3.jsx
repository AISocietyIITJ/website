import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-black'>
      <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleDropdown}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-8 6h8"
                  />
                </svg>
              )}
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
              <ul
                tabIndex={0}
                className="menu menu-md dropdown-content bg-black font-bold rounded-box z-[1] mt-3 w-screen items-center p-2 shadow-white"
              >
                <li>
                  <a href='/' onClick={toggleDropdown}>Home</a>
                </li>
                <li>
                  <a href='/teams' onClick={toggleDropdown}>Team</a>
                </li>
                <li>
                  <a href='/projects' onClick={toggleDropdown}>Projects</a>
                </li>
                <li>
                  <a href='/contactus' onClick={toggleDropdown}>Contact Us</a>
                </li>
                
              </ul>
            )}
          </div>

          <a href='/' className="w-12 ml-12">
            <img src='RAID_logo.jpeg' alt="RAID Logo" />
          </a>
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
            <li>
                  <a href='/contactus' onClick={toggleDropdown}>Contact Us</a>
                </li>
          </ul>
        </div>

        <div className="navbar-end"></div>
      </div>
    </div>
  );
}

export default Navbar;
