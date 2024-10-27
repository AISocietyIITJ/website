import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add('no-scroll');
//     } else {
//       document.body.classList.remove('no-scroll');
//     }
//     // Cleanup on component unmount
//     return () => document.body.classList.remove('no-scroll');
//     }, [isOpen]);

  return (
    <nav className="fixed w-full z-20 bg-black shadow-md">
      <div className="flex items-center justify-between p-4 max-w-6xl mx-auto">
        {/* Logo Section */}
                {/* Logo Section with Image */}
                <div className="flex-shrink-0">
          <a href="/">
            <img src="/public/RAID_logo.jpeg" alt="MySite Logo" className="h-14 w-auto" />
          </a>
          </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-xl">
          <a href="/" className="text-white font-bold hover:text-orange-700">Home</a>
          <a href="projects" className="text-white font-bold hover:text-orange-700">Projects</a>
          <a href="/teams" className="text-white font-bold hover:text-orange-700">Team</a>
          <a href="/Alumni" className="text-white font-bold hover:text-orange-700">Alumni</a>
          <a href="/contactus" className="text-white font-bold hover:text-orange-700">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(true)} 
          className="md:hidden focus:outline-none text-3xl"
        >
          &#9776;
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-100 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-4 right-4 text-3xl text-white"
        >
          &times;
        </button>

        {/* Mobile Menu Links */}
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-white text-2xl font-bold">
          <a href="/" onClick={() => setIsOpen(false)}>Home</a>
          <a href="projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="/teams" onClick={() => setIsOpen(false)}>Team</a>
          <a href="/Alumni" onClick={() => setIsOpen(false)}>Alumni</a>
          <a href="/contactus" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
